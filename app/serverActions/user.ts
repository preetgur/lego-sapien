import Fetch from "../lib/fetchHelper";

export const getCompanyById = async (id: string) => {
  try {
    const resp = await Fetch(`/companies/${id}`, "GET", "get-company-by-id");
    return resp;
  } catch (error) {
    throw error;
  }
};
