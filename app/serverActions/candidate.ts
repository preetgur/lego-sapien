import { SendInviteBodyType } from "@/types/candidate";
import Fetch from "../lib/fetchHelper";
import { RESUMES_ZIP_FILE } from "../lib/constants";

export const sendEmailInviteToCandidate = async (body: SendInviteBodyType) => {
  try {
    /* 
        ###### depend on flow type #######
         => ALL_WEB : '/send_invite'
         => ALL_WA|WA_WEB : '/whatsapp_fitment'
      */
    const { flowType, ...updatedBody } = body;
    const url = flowType === "ALL_WEB" ? "/send_invite/" : "/whatsapp_fitment/";
    //   const resp = await axiosInstance.post(url, updatedBody);

    const resp = await Fetch({ url, method: "POST" });
    return resp;
  } catch (error) {
    // return Promise.reject(error);
    throw error;
  }
};

export const uploadBulkResumes = async (body: any, jobId: string) => {
  try {
    const resp = await Fetch({
      url: `/jobpostings/${jobId}/`,
      method: "PATCH",
      data: body,
    });

    console.log({ serveraction: resp });
    return resp;
  } catch (error) {
    console.log("### upload bulk resume ####", error);
    throw error;
  }
};
