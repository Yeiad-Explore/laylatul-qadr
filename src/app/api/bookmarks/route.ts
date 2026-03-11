import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'data', 'bookmarks.json');

async function ensureDataDir() {
  const dir = path.dirname(DATA_FILE);
  await fs.mkdir(dir, { recursive: true });
}

async function readBookmarks(): Promise<Record<string, string[]>> {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return {};
  }
}

async function writeBookmarks(data: Record<string, string[]>) {
  await ensureDataDir();
  await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2));
}

export async function GET(req: NextRequest) {
  const sessionId = req.nextUrl.searchParams.get('sessionId') || 'default';
  const bookmarks = await readBookmarks();
  return NextResponse.json(bookmarks[sessionId] || []);
}

export async function POST(req: NextRequest) {
  const { sessionId = 'default', itemId } = await req.json();
  if (!itemId) return NextResponse.json({ error: 'itemId required' }, { status: 400 });
  const bookmarks = await readBookmarks();
  const user = bookmarks[sessionId] || [];
  if (!user.includes(itemId)) {
    user.push(itemId);
    bookmarks[sessionId] = user;
    await writeBookmarks(bookmarks);
  }
  return NextResponse.json(user);
}

export async function DELETE(req: NextRequest) {
  let body;
  try {
    body = await req.json();
  } catch {
    const sessionId = req.nextUrl.searchParams.get('sessionId') || 'default';
    const itemId = req.nextUrl.searchParams.get('itemId');
    if (!itemId) return NextResponse.json({ error: 'itemId required' }, { status: 400 });
    const bookmarks = await readBookmarks();
    const user = (bookmarks[sessionId] || []).filter((id) => id !== itemId);
    bookmarks[sessionId] = user;
    await writeBookmarks(bookmarks);
    return NextResponse.json(user);
  }
  const { sessionId = 'default', itemId } = body;
  if (!itemId) return NextResponse.json({ error: 'itemId required' }, { status: 400 });
  const bookmarks = await readBookmarks();
  const user = (bookmarks[sessionId] || []).filter((id) => id !== itemId);
  bookmarks[sessionId] = user;
  await writeBookmarks(bookmarks);
  return NextResponse.json(user);
}
