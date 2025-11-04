// app/api/cms-data/route.ts
import { NextResponse } from 'next/server';
import { fetchCMSData } from '@/lib/api';

export async function GET() {
  try {
    const data = await fetchCMSData();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Failed to fetch CMS data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch CMS data' },
      { status: 500 }
    );
  }
}
