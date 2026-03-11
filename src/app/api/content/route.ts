import { NextResponse } from 'next/server';
import {
  introCards,
  nights,
  qadrStats,
  qadrFeatures,
  hadiths,
  historyItems,
  signs,
  ibadahCategories,
  duas,
} from '@/data/content';

export async function GET() {
  return NextResponse.json({
    introCards,
    nights,
    qadrStats,
    qadrFeatures,
    hadiths,
    historyItems,
    signs,
    ibadahCategories,
    duas,
  });
}
