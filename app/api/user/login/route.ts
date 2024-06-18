import { NextRequest, NextResponse } from "next/server";

import { ACCESS_TOKEN, REFRESH_TOKEN, URL } from "@/app/lib/constants";

export async function POST(request: NextRequest) {
    try {

        const reqBody = await request.json()
        const res = await fetch(`${URL}/jwt/create/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reqBody),
        })
        const data = await res.json();

        if (!res.ok) {
            throw new Error(data?.detail)
        }

        const response = NextResponse.json({
            message: "Login successful",
            success: data,
        })
        response.cookies.set(ACCESS_TOKEN, data.access, {
            httpOnly: true,
        })
        response.cookies.set(REFRESH_TOKEN, data.refresh, {
            httpOnly: true,
        })
        return response;
    } catch (error: any) {
        return NextResponse.json({ error: error + '' }, { status: 400 })
    }
}


