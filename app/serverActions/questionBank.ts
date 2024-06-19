"use server";

import { CategoryQuestionBankType } from "@/types/questionBank";
import Fetch from "../lib/fetchHelper";
import { revalidatePath, revalidateTag } from "next/cache";

export async function addCategoryToQuestionBank(
  body: CategoryQuestionBankType
) {
  try {
    const url = "/questionbank_file_upload/";
    const reqBody = {
      is_default: false,
      category: body.category,
      qb_file_base64: body.qb_file_base64?.base64,
    };
    console.log({ reqBody: reqBody });
    const response = await Fetch({
      url,
      method: "POST",
      tag: "add-question-bank-category",
      data: reqBody,
    });
    console.log({ response });
    if (response.status === "success") {
      revalidatePath("/dashboard-refactor/question-bank/list");
    }
    return response;
    // redirect(`/dashboard-refactor/question-bank/list`);
  } catch (error) {
    console.log("#### erorr ####", error);
    return { error };
  }
}

export async function getQuestionBankCategories() {
  try {
    const url = "/qbcategories/";

    const response = await Fetch({
      url,
      method: "GET",
      tag: "get-question-bank-categories",
    });
    console.log({ response });
    return response;
  } catch (error) {
    console.log("#### erorr ####", error);
    return { error };
  }
}

export async function getQuestionsFromQuestionBankCategories(
  categoryId: string | number
) {
  try {
    const url = `/qbcategories/${categoryId}/qbquestions/`;

    const response = await Fetch({
      url,
      method: "GET",
      tag: "get-questions-from-question-bank-category",
    });
    console.log({ response });
    return response;
  } catch (error) {
    console.log("#### erorr ####", error);
    return { error };
  }
}

export async function updateQuestion(body: {
  id: number | string;
  qb_category: string;
  question: string;
  ideal_answer: string;
}) {
  try {
    const { id, qb_category, ...reqbody } = body;
    const url = `/qbcategories/${qb_category}/qbquestions/${id}/`;

    const response = await Fetch({
      url,
      method: "PATCH",
      tag: "update-question",
      data: reqbody,
    });
    console.log({ response });
    return response;
  } catch (error) {
    console.log("#### erorr ####", error);
    return { error };
  }
}

export async function deleteQuestion(body: {
  id: number | string;
  qb_category: string;
  question: string;
  ideal_answer: string;
}) {
  try {
    const { id, qb_category } = body;
    const url = `/qbcategories/${qb_category}/qbquestions/${id}/`;

    const response = await Fetch({
      url,
      method: "DELETE",
      tag: "delete-question",
    });
    revalidateTag("get-questions-from-question-bank-category");

    console.log({ response });
    return response;
  } catch (error) {
    console.log("#### erorr ####", error);
    return Promise.reject(error);
    // return { error };
  }
}

export async function updateCategory(body: {
  id: number | string;
  qb_category: string;
}) {
  try {
    const { id, qb_category } = body;
    const url = `/qbcategories/${id}/`;

    const response = await Fetch({
      url,
      method: "PATCH",
      tag: "update-question",
      data: {
        qb_category,
      },
    });
    console.log({ response });
    return response;
  } catch (error) {
    console.log("#### erorr ####", error);
    return { error };
  }
}

export async function deleteCategory(qb_category: string | number) {
  try {
    const url = `/qbcategories/${qb_category}/`;

    const response = await Fetch({
      url,
      method: "DELETE",
      tag: "delete-category",
    });
    revalidateTag("get-question-bank-categories");

    console.log({ response });
    return response;
  } catch (error) {
    console.log("#### erorr ####", error);
    return Promise.reject(error);
    // return { error };
  }
}

export async function addQuestionToCategory(body: {
  qb_category: string;
  question: string;
  ideal_answer: string;
}) {
  try {
    const { qb_category, ...reqbody } = body;
    console.log({ body });
    const url = `/qbcategories/${qb_category}/qbquestions/`;

    const response = await Fetch({
      url,
      method: "POST",
      tag: "add-question-to-category",
      data: reqbody,
    });
    revalidateTag("get-questions-from-question-bank-category");

    console.log({ response });
    return response;
  } catch (error) {
    console.log("#### erorr ####", error);
    return Promise.reject(error);
    // return { error };
  }
}
