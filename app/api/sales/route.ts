import { NextResponse } from "next/server";
import { getSales } from "@/lib/api";

export async function GET() {
  return NextResponse.json({ sales: getSales() });
}
