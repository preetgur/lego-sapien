import { NextRequest, NextResponse } from "next/server";

import { URL } from "@/app/lib/constants";
import { ResetPasswordInterface } from "@/types/candidate";

interface ErrorResponse {
    [key: string]: string[];
}

export async function POST(request: NextRequest) {
    try {
        const reqBody: ResetPasswordInterface = await request.json();

        console.log({ reqBody })
        const res = await fetch(`${URL}/users/reset_password/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reqBody),
        });



        if (!res.ok) {
            const data = await res.json();
            console.log({ data })
            if (res.status === 400) {
                const errors: ErrorResponse = {};
                Object.keys(data)?.forEach((field) => {
                    errors[field] = data[field];
                });

                return NextResponse.json(
                    {
                        status: "error",
                        data: { ...errors }
                    },
                    { status: 400, statusText: 'Bad Request' }
                );
            }

            if (res.status === 204) {
                return NextResponse.json({
                    status: "success",
                    data: {
                        isEmailSent: true,
                    },
                });
            }

            // throw new Error(data?.detail);
        }

        return NextResponse.json({
            status: "success",
            data: {
                isEmailSent: true,
            },
        });
    } catch (error: any) {
        console.log("ERRRR:", error + '');

        return NextResponse.json(
            {
                status: "error",
                data: {
                    isEmailSent: false,
                    error: error?.message || error + '',
                },
            },
            { status: 400 }
        );
    }
}
