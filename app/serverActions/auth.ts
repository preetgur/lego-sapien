"use server";

import { cookies } from "next/headers";
import { ACCESS_TOKEN } from "../lib/constants";

export const fetchAccessTokenFromCookie = async () => {
  return cookies().get(ACCESS_TOKEN)?.value;
};
