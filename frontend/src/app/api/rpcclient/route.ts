import { NextResponse, NextRequest } from "next/server";

export function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  const q = searchParams.get("q");

  console.log(id, q);
  return NextResponse.json({ result: "ok" }, { status: 200 });
}
