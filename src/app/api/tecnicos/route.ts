import { db } from "@/tools/libs/db";
import { NextResponse } from "next/server";
export async function GET() {
  try {
    const tecnicos = await db.tecnico.findMany();
    return NextResponse.json(tecnicos, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "could not get tecnicos" },
      { status: 500 }
    );
  }
}
