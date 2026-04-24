import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { createToken } from "@/lib/auth";

// POST /api/auth/login — Authenticate admin
export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();

    if (!password) {
      return NextResponse.json(
        { message: "Please provide a password" },
        { status: 400 }
      );
    }

    const adminPassword = process.env.ADMIN_PASSWORD || "admin_change_me";

    let isMatch = false;
    if (
      adminPassword.startsWith("$2a$") ||
      adminPassword.startsWith("$2b$")
    ) {
      isMatch = await bcrypt.compare(password, adminPassword);
    } else {
      isMatch = password === adminPassword;
    }

    if (isMatch) {
      const token = createToken({ id: "admin" }, "30d");
      return NextResponse.json({ success: true, token });
    } else {
      return NextResponse.json(
        { message: "Invalid password" },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error(`Login error: ${(error as Error).message}`);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
