import { URL } from "@/app/lib/constants";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    // console.log({ request: request.cookies.getAll() })

    const res = await fetch(`${URL}/users/me/`);
    const data = await res.json();

    const response = NextResponse.json({
      message: "/me successful",
      success: data,
    });

    return response;
  } catch (error: any) {
    console.log("ERRRR :", error + "");
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
