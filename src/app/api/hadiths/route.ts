import { NextResponse } from 'next/server';
import { hadiths } from '@/data/content';

export async function GET() {
  return NextResponse.json(hadiths);
}
