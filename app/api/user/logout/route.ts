import { ACCESS_TOKEN, URL } from "@/app/lib/constants";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {

        const access_token = cookies().get(ACCESS_TOKEN).value;
        console.log({ access_token });

        const res = await fetch(`${URL}/logout/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Cookie': `access=${access_token}`,
            }
        })

        // console.log({ res })
        const data = await res.json();
        if (!res.ok) {

            throw (`Logout failed with status: ${res.status} - ${res.statusText}: `);
        }

        console.log("token :: ", { data })
        const response = NextResponse.json({
            message: "logut successful",
            success: data,
        })
        // storing the access token to cookies
        const aa = response.cookies.get(ACCESS_TOKEN)
        console.log({ aa })
        console.log({ coo: cookies().get(ACCESS_TOKEN) })
        return response;

    } catch (error: any) {
        console.log("ERRRR :", error + '')
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}


