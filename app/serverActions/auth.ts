"use server";

import { cookies } from "next/headers";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../lib/constants";
import Fetch from "../lib/fetchHelper";
import { LoginInterface } from "@/types/auth";
import { redirect } from "next/navigation";
import { PATH } from "../lib/routes";

export const fetchAccessTokenFromCookie = async () => {
  return cookies().get(ACCESS_TOKEN)?.value;
};

export const getUserDetail = async () => {
  try {
    console.log("### server side getUserDetail ###");
    const resp = await Fetch({
      url: `/users/me/`,
      method: "GET",
      tag: "get-user-info",
    });
    return resp;
  } catch (error) {
    throw error;
  }
};

export const login = async (reqBody: LoginInterface) => {
  try {
    // const res = await axiosInstance.post("/jwt/create/", {
    //   ...reqBody,
    // });

    const res = await Fetch({
      url: `/jwt/create/`,
      method: "POST",
      tag: "login-user",
      data: reqBody,
    });

    console.log({ res });
    cookies().set(ACCESS_TOKEN, res.data.access, { secure: true });
    cookies().set(REFRESH_TOKEN, res.data.refresh, { secure: true });
    redirect(PATH.dashboard);
  } catch (error) {
    throw error;
  }
};

export async function deleteCookies() {
  console.log("#### delete coookies ####");
  const access_token = cookies().get(ACCESS_TOKEN)?.value;
  const refresh_token = cookies().get(REFRESH_TOKEN)?.value;

  console.log({ access_token, refresh_token });

  cookies().delete(ACCESS_TOKEN);
  cookies().delete(REFRESH_TOKEN);
  redirect("/signin");
}
