import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  const { username, isAdmin } = await req.json();
  const token = jwt.sign({ username, isAdmin }, process.env.JWT_SECRET!, { expiresIn: "1h" });
  return NextResponse.json({ token });
}
