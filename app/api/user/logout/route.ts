import { ACCESS_TOKEN, REFRESH_TOKEN } from "@/app/lib/constants";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const access_token = cookies().get(ACCESS_TOKEN)?.value;
    const refresh_token = cookies().get(REFRESH_TOKEN)?.value;

    console.log({ access_token, refresh_token });

    cookies().delete(ACCESS_TOKEN);
    cookies().delete(REFRESH_TOKEN);

    console.log("#### cookies deleted successfully #####");
    // return NextResponse.json(
    //   { message: "cookies deleted successfully", redirect: "/sigin" },
    //   { status: 500 }
    // );

    // Correctly constructing the URL for redirection
    const redirectUrl = new URL("/signin", request.url).toString();

    // Using NextResponse.redirect for server-side redirection
    return NextResponse.redirect(redirectUrl);
  } catch (error: any) {
    console.log(" /api/user/logout ERRRR :", error + "");
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
