import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Cat from "@/models/Cat";

// ✅ GET (FALTABA ESTO)
export async function GET() {
  try {
    await connectDB();

    const cats = await Cat.find();

    return NextResponse.json(cats);
  } catch (error) {
    return NextResponse.json({ error: "Error al obtener gatos" }, { status: 500 });
  }
}

// ✅ POST (ya lo tenías)
export async function POST(req: Request) {
  try {
    await connectDB();

    const data = await req.formData();

    const name = data.get("name");
    const age = data.get("age");
    const description = data.get("description");
    const file = data.get("image") as File;

    return NextResponse.json({ ok: true }); // simplificado por ahora
  } catch (error) {
    return NextResponse.json({ error: "Error" }, { status: 500 });
  }
}