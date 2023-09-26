import { db } from "@/tools/libs/db";
import { NextResponse } from "next/server";
export async function GET() {
  try {
    const empresas = await db.empresa.findMany();
    return NextResponse.json(empresas, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "could not get empresas" },
      { status: 500 }
    );
  }
}
