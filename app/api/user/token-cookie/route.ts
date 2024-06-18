import { ACCESS_TOKEN, REFRESH_TOKEN } from "@/app/lib/constants";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  console.log("### get token -cookie ###");

  const response = NextResponse.json({
    status: "successs",
    access: cookies().get(ACCESS_TOKEN),
    refresh: cookies().get(REFRESH_TOKEN),
  });
  response.cookies.set(ACCESS_TOKEN, "", {
    httpOnly: true,
  });
  response.cookies.set(REFRESH_TOKEN, "", {
    httpOnly: true,
  });
  return response;
}

export async function POST(request: NextRequest) {
  console.log("### post token -cookie ###");

  const reqBody = await request.json();
  console.log({ reqBody });

  cookies().set(ACCESS_TOKEN, reqBody.access);
  cookies().set(REFRESH_TOKEN, reqBody.refresh);

  const response = NextResponse.json({
    message: "cookie changed",
  });

  response.cookies.set(ACCESS_TOKEN, reqBody.access, {
    httpOnly: true,
  });

  response.cookies.set(REFRESH_TOKEN, reqBody.refresh, {
    httpOnly: true,
  });

  return response;
}
