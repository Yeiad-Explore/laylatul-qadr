import { NextResponse } from 'next/server';
import { nights } from '@/data/content';

export async function GET() {
  return NextResponse.json(nights);
}
