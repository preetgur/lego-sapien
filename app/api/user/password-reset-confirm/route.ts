import { NextRequest, NextResponse } from "next/server";

import { URL } from "@/app/lib/constants";
import { PasswordResetInterface } from "@/types/auth";

interface ErrorResponse {
    [key: string]: string[];
}

export async function POST(request: NextRequest) {
    try {
        const reqBody: PasswordResetInterface = await request.json();
        const res = await fetch(`${URL}/users/reset_password_confirm/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reqBody),
        });

        if (!res.ok) {
            const data = await res.json();

            if (res.status === 400) {
                const errors: ErrorResponse = {};
                Object.keys(data).forEach((field) => {
                    errors[field] = data[field];
                });

                return NextResponse.json(
                    {
                        status: "error",
                        data: { ...errors },
                    },
                    { status: 400, statusText: 'Bad Request' }
                );
            }

            if (res.status === 204) {
                return NextResponse.json({
                    status: "success",
                    data: {
                        isPasswordChanged: true,
                    },
                });
            }

            throw new Error(data?.detail);
        }

        return NextResponse.json({
            status: "success",
            data: {
                isPasswordChanged: true,
            },
        });
    } catch (error: any) {

        return NextResponse.json(
            {
                status: "error",
                data: {
                    isPasswordChanged: false,
                    error: error?.message || error + '',
                },
            },
            { status: 500 }
        );
    }
}
