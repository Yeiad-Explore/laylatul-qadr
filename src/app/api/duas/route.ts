import { NextResponse } from 'next/server';
import { duas } from '@/data/content';

export async function GET() {
  return NextResponse.json(duas);
}
