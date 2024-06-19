"use server";
import { cookies } from "next/headers";
import { ACCESS_TOKEN, REFRESH_TOKEN, URL } from "./constants";

// Function to refresh the access token
async function refreshAccessToken(refreshToken: string) {
  const response = await fetch(`${URL}/jwt/refresh/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ refresh: refreshToken }),
  });

  console.log({ response });
  if (!response.ok) {
    if (response.status === 401) {
      return { status: 401, isRedirectToLogin: true };
    }
    throw new Error("Failed to refresh token");
  }

  const jsonResponse = await response.json();

  // here trigeer route handler to et the cookies

  const resp = await fetch("http://localhost:3000/api/user/token-cookie", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      access: jsonResponse.access,
      refresh: refreshToken,
    }),
  });
  const routeresp = await resp.json();
  console.log({ routeresp });
  // setTokens({
  //   access: jsonResponse.access,
  //   refresh: jsonResponse.refresh,
  // });
  // cookies().set(ACCESS_TOKEN, jsonResponse.access); // Store the new access token in cookies
  return jsonResponse.access;
}

// Function to make an API call
async function fetchWithToken(
  path: string,
  method: "GET" | "POST" | "PATCH" | "DELETE",
  tag?: string,
  data?: any,
  token?: string
) {
  const response = await fetch(URL + path, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Cookie: `access=${token}`,
    },
    ...(method !== "GET" && { body: JSON.stringify(data) }),
    ...(tag && { next: { tags: [tag] } }),
  });

  console.log({ fetchWithTokenResponse: response });

  if (response.status === 401) {
    console.log("#### throwing unauthorized error #####");
    throw new Error("Unauthorized");
  }

  if (response.status === 204) {
    return { message: "No Content", is_deleted: true };
  }

  if (!response.ok) {
    if (response.status === 500) {
      console.log("#### throwing internal server error #####");

      throw new Error("Internal Server Error");
    }
    throw new Error(response.statusText ?? "Something went wrong!");
  }

  return response.json();
}

// Main function to handle the API call with token refresh
export default async function Fetch({
  url,
  method,
  tag,
  data,
}: {
  url: string;
  method: "GET" | "POST" | "PATCH" | "DELETE";
  tag?: string;
  data?: Object;
}) {
  try {
    const accessToken = cookies().get(ACCESS_TOKEN)?.value;
    const rrrrrToken = cookies().get(REFRESH_TOKEN)?.value;

    console.log("#### before request ####", { accessToken, rrrrrToken });
    const response = await fetchWithToken(url, method, tag, data, accessToken);
    return response;
  } catch (error) {
    console.log("#### got error in FETCh ###");

    if (error instanceof Error && error?.message === "Unauthorized") {
      console.log("#### unauthorized ######");
      const refreshToken = cookies().get(REFRESH_TOKEN)?.value;
      console.log("#### refreshToken ######", { refreshToken });

      if (!refreshToken) {
        return {
          status: 401,
          statusText: "Unauthorized",
          isRedirectToLogin: true,
        };
      }

      try {
        const newAccessToken = await refreshAccessToken(refreshToken);
        return fetchWithToken(url, method, tag, data, newAccessToken);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
}
