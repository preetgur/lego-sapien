import { NextRequest, NextResponse } from "next/server";

import { URL } from "@/app/lib/constants";
import { SignUpInterface } from "@/types/auth";

async function signup(reqBody: SignUpInterface) {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await fetch(`${URL}/users/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(reqBody),
            });
            const data = await res.json();
            if (res.status === 400) {
                reject(data)
            }
            resolve(data);
        } catch (error) {
            reject(error);
        }
    });
}

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const signupRes = await signup(reqBody);

        const response = NextResponse.json({
            message: "signup successful",
            success: signupRes,
        })
        return response;

    } catch (error: any) {
        return NextResponse.json({ error: error }, { status: 400 })
    }
}

export async function PATCH(request: NextRequest) {
    try {
        const reqBody = await request.json()
        console.log({ reqBody })
        // const signupRes = await signup(reqBody);

        const response = NextResponse.json({
            message: "update successful",
            success: [],
        })
        return response;

    } catch (error: any) {
        return NextResponse.json({ error: error }, { status: 400 })
    }
}