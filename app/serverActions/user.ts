"use server";
import Fetch from "../lib/fetchHelper";
import { deleteCookies } from "./auth";

export const getCompanyById = async (id: string) => {
  try {
    console.log("#### get company by id ####", id);

    if (!id) {
      await deleteCookies();
    }

    const resp = await Fetch({
      url: `/companies/${id}`,
      method: "GET",
      tag: "get-company-by-id",
    });
    return resp;
  } catch (error) {
    throw error;
  }
};
