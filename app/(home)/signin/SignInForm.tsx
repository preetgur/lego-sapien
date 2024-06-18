"use client";

import Link from "next/link";
import { Dialog } from "@headlessui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { EMAIL, NEW_USER, PASSWORD, SIGN_UP_FIELDS } from "../../lib/constants";

import { login } from "../../serverActions/auth";
import { PATH } from "../../lib/routes";

import { LoginInterface } from "@/types/auth";
import { useUI } from "@/app/contextApi/UIContext";
import { useAuth } from "@/app/contextApi/AuthContext";
import Button from "@/app/components/Button";
import { notify } from "@/app/helpers/NotificationHelper";

const signInSchema = yup.object({
  [EMAIL]: yup.string().required("Email is Required").email(),
  [PASSWORD]: yup.string().required("Password is Required"),
});

function SignInForm() {
  const router = useRouter();
  const { startLoading, stopLoading } = useUI();
  const { setIsUserLoggedIn } = useAuth();
  const searchParams = useSearchParams();
  const paramNewUser = searchParams.get(NEW_USER);
  const paramEmail = searchParams.get(EMAIL);
  const paramPassword = searchParams.get(PASSWORD);
  const [error, setError] = useState("");
  let [isOpen, setIsOpen] = useState(paramNewUser === "1");
  const defaultValues = {
    [EMAIL]: paramEmail ?? "",
    [PASSWORD]: paramPassword ?? "",
  };

  console.log({ searchParams: searchParams.get(NEW_USER) });
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signInSchema),
    defaultValues,
  });

  const onSubmit: SubmitHandler<LoginInterface> = async (data) => {
    try {
      setError("");
      startLoading();
      const resp = await fetch("/api/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const jsonResp = await resp.json();

      if (resp.ok) {
        reset();
        setIsUserLoggedIn(true);
        router.push(PATH.dashboard_refactor);

        // Todo;
        // if (error?.name && error?.name === "UserNotConfirmedException") {
        //   notify({ type: "error", message: "Please verify email to continue" });
        //   setVerifyModalOpen(true);
        //   return;
        // }
      }
      if (resp.status === 400) {
        setError(jsonResp?.error);
        notify({
          type: "error",
          message: "something went wrong during sign in",
        });
      }
      stopLoading();
    } catch (error: any) {
      console.log("### login error ###", error);
      notify({ type: "error", message: "something went wrong during sign in" });
      stopLoading();
    }
  };

  const loginAction = async () => {
    try {
      startLoading();

      await login({ email: paramEmail || "", password: paramPassword || "" });
    } catch (error) {
      if (error) {
        setError(error.toString());
      }
    } finally {
      stopLoading();
    }
  };

  useEffect(() => {
    if (paramEmail && paramPassword) {
      loginAction();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError("");
      }, 8000);
    }
  }, [error]);

  return (
    <>
      {/* Modal */}
      <div className="relative">
        <Dialog
          className={"relative"}
          open={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <div
            className={`fixed inset-0 z-99999  flex items-center justify-center overflow-scroll   p-2  md:px-4 `}
          >
            <Dialog.Panel
              className={
                "flex max-w-2xl flex-col items-center justify-center rounded-md bg-black py-20 px-20 outline outline-primary"
              }
            >
              <Dialog.Title className={"mb-10 py-2 text-2xl"}>
                Email Verification
              </Dialog.Title>

              <p className="text-center opacity-50">
                Thanks for SignUp could you please check for email for further
                steps.
              </p>

              <Button
                label={"close"}
                styleWrapper="w-40 mt-10"
                onClick={() => setIsOpen(false)}
              />
            </Dialog.Panel>
          </div>
        </Dialog>
      </div>

      {/* end of Modal */}

      {/* <VipvPage handleClose={() => console.log("## close ###")} /> */}

      <form onSubmit={handleSubmit(onSubmit)}>
        {error && (
          <p className="mt-1 ml-1 mb-5 text-center text-xs font-medium text-[#b14040]">
            {error}
          </p>
        )}
        {Object.keys(defaultValues).map((key: string) => {
          // Asserting the type of `key` to be either "email" or "password"
          const specificKey = key as keyof typeof defaultValues;

          return (
            <div className="mb-8" key={specificKey}>
              <label
                htmlFor="first_name"
                className="mb-3 block text-sm font-medium text-white"
              >
                {SIGN_UP_FIELDS[specificKey].label}
              </label>
              <input
                type={SIGN_UP_FIELDS[specificKey].type}
                {...register(specificKey)}
                placeholder={SIGN_UP_FIELDS[specificKey].placeholder}
                className={`focus-visible:shadow-none w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary dark:bg-background dark:shadow-signUp ${
                  errors[specificKey]?.message && "focus:border-[#b14040]"
                }`}
              />
              <span className="mt-1 ml-1 text-xs font-medium text-primary">
                {errors[specificKey]?.message}
              </span>
            </div>
          );
        })}

        <div className="mb-8 flex flex-col justify-end sm:flex-row sm:items-center">
          {/* TODO: Implement in future */}
          {/* <div className="mb-4 sm:mb-0">
            <label
              htmlFor="checkboxLabel"
              className="flex cursor-pointer select-none items-center text-sm font-medium text-background"
            >
              <div className="relative">
                <input type="checkbox" id="checkboxLabel" className="sr-only" />
                <div className="box mr-4 flex h-5 w-5 items-center justify-center rounded border border-body-color border-opacity-20 dark:border-white dark:border-opacity-50">
                  <span className="opacity-0">
                    <svg
                      width="11"
                      height="8"
                      viewBox="0 0 11 8"
                      className="fill-current"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                        // fill="#3056D3"
                        // stroke="#3056D3"
                        className=""
                        strokeWidth="0.4"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              Keep me signed in
            </label>
          </div> */}

          <div>
            <Link
              href="/user/reset-password"
              className="text-sm font-medium text-background hover:underline"
            >
              Forgot Password?
            </Link>
          </div>
        </div>
        <div className="mb-6">
          <button className="flex w-full items-center justify-center rounded-md bg-primary py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
            Sign in
          </button>
        </div>
      </form>
    </>
  );
}

export default SignInForm;
