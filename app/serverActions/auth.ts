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
    const resp = await Fetch(`/users/me/`, "GET", "get-user-info");
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

    const res = await Fetch(`/jwt/create/`, "POST", "login-user", reqBody);

    console.log({ res });
    cookies().set(ACCESS_TOKEN, res.data.access, { secure: true });
    cookies().set(REFRESH_TOKEN, res.data.refresh, { secure: true });
    redirect(PATH.dashboard);
  } catch (error) {
    throw error;
  }
};
