import { NextRequest, NextResponse } from "next/server";

import { URL } from "@/app/lib/constants";
import { UserActivationInterface } from "@/types/candidate";

interface ErrorResponse {
    [key: string]: string[];
}

export async function POST(request: NextRequest) {
    try {
        const reqBody: UserActivationInterface = await request.json();

        const res = await fetch(`${URL}/users/activation/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reqBody),
        });
        const data = await res.json();

        if (!res.ok) {
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

            if (res.status === 403) {
                return NextResponse.json({
                    status: "success",
                    data: {
                        isVerified: true,
                    },
                });
            }

            throw new Error(data?.detail);
        }

        return NextResponse.json({
            status: "success",
            data: {
                isVerified: true,
            },
        });
    } catch (error: any) {
        console.log("ERRRR:", error + '');

        return NextResponse.json(
            {
                status: "error",
                data: {
                    isVerified: false,
                    error: error?.message || error + '',
                },
            },
            { status: 500 }
        );
    }
}
