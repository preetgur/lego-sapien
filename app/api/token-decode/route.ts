
import { jwtVerify } from "jose";
var jwt = require('jsonwebtoken');
import { NextRequest, NextResponse } from "next/server";
const TOKEN_SECRET_KEY = process.env.NEXT_PUBLIC_JWT_SECRET_KEY;


function getJwtSecretKey() {
    const secret = TOKEN_SECRET_KEY;
    console.log({ secret })
    if (!secret) {
        throw new Error("JWT Secret key is not matched");
    }
    return new TextEncoder().encode(secret);
}


async function verifyJwtToken(token: string) {
    try {
        const encodedSecret = getJwtSecretKey()
        console.log({ verifyJwtToken: token, encodedSecret })

        const { payload } = await jwtVerify(token, encodedSecret);
        return payload;
    } catch (error) {
        console.log(error + '')
        throw error
    }

}
export async function POST(request: NextRequest) {
    try {
        const encodedSecret = getJwtSecretKey()
        const { token } = await request.json()
        var decoded = jwt.verify(token, encodedSecret);
        const response = NextResponse.json({ status: "success", data: decoded })
        return response;

    } catch (error: any) {
        return NextResponse.json({ error: error }, { status: 400 })
    }
}
