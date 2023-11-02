import { NextRequest, NextResponse } from "next/server";
export async function GET(request: NextRequest, { params }: any) {
  console.log("hit");
  console.log(params, "oooo");
  return NextResponse.json(
    { message: "success!", success: true },
    { status: 201 }
  );
}
