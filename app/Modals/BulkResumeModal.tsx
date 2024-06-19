import React, { ChangeEvent, useRef, useState } from "react";
import { useParams } from "next/navigation";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";

import Modal from "./Modal";

import { ModalPropsInterface } from "@/types/job";

import { Icon } from "@iconify/react";
import { RESUMES_ZIP_FILE } from "@/app/lib/constants";

import { uploadBulkResumes } from "@/app/serverActions/candidate";
import { delayTimeout } from "@/app/lib/utils";
import { notify } from "../helpers/NotificationHelper";
import Button from "../components/Button";
import { useUI } from "../contextApi/UIContext";
import { BULK_RESUME_SCHEMA } from "../lib/schema";

const VALIDATION_ERROR = "Please Select .zip file";

// export interface BulkInterface {
//   [RESUMES_ZIP_FILE]: string;
// }
export interface BulkInterface {
  resumes_zip_base64?: {
    type: string;
    base64: string;
    name: string;
  };
}
const defaultValues = {
  [RESUMES_ZIP_FILE]: undefined,
};

function BulkResumeModal({ isOpen, onClose }: ModalPropsInterface) {
  const { id } = useParams();
  const { startLoading, stopLoading } = useUI();

  const bulkResumeRef = useRef<any>(null);
  // const [bulkFileDetail, setBulkFileDetail] = useState({
  //   name: null,
  //   base64: null,
  // });

  const {
    handleSubmit,
    reset,
    setError,
    clearErrors,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(BULK_RESUME_SCHEMA),
    defaultValues: {
      ...defaultValues,
    },
  });

  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const MAX_SIZE = 25 * 1024 * 1024; //  25 MB in bytes

      if (file.size > MAX_SIZE) {
        setError(RESUMES_ZIP_FILE, {
          type: "validate",
          message: `** File size must not exceed 25MB **`,
        });
        notify({ type: "error", message: "File size must not exceed 25MB" });

        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        const resultString = reader.result as string; // Explicitly cast to string
        clearErrors("resumes_zip_base64");
        setValue("resumes_zip_base64", {
          type: file.type,
          base64: resultString,
          name: file.name,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit: SubmitHandler<BulkInterface> = async (data) => {
    try {
      console.log({ data });
      startLoading();

      // TODO:implement if required formData
      // await delayTimeout(2000);
      // const formData = new FormData();
      // formData.append(RESUMES_ZIP_FILE, data[RESUMES_ZIP_FILE]);

      const resp = await uploadBulkResumes(data, id as string);

      console.log({ uploadedBulk: resp });
      notify({
        type: "success",
        message: "Zip file is uploaded, the candidates will be added shortly",
      });
      reset();
      onClose();
    } catch (error: any) {
      console.log("#### create candiate  error ####", error);
      notify({
        type: "error",
        message:
          "something went wrong during resume upload, please try again later",
      });
    } finally {
      stopLoading();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={onClose}
      title="Bulk Resume Upload"
      panelStyle={{
        width: "50%",
      }}
    >
      <div className="flex w-full items-center justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="my-10 flex w-full flex-col items-center gap-5"
        >
          <div className="my-2 flex w-3/4  flex-col  px-20  ">
            <p className="text-center text-black">
              Upload Candidate Resumes in Bulk
              <span className=" font-medium text-primary"> (ZIP File)</span>.
            </p>
          </div>

          <div className={` w-full   md:w-1/2`}>
            <label htmlFor="bulk-resume-upload">
              <div
                className={`focus-visible:shadow-none flex w-full cursor-pointer items-center justify-center gap-2 rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none hover:border-primary  dark:bg-background dark:shadow-signUp ${
                  true && "focus:border-[#b14040]"
                }`}
                onClick={() => {
                  bulkResumeRef?.current?.click();
                }}
              >
                <Icon
                  icon="formkit:zip"
                  className=" h-5 w-5 group-hover:hidden "
                  color="#FB607F"
                />
                <span className="line-clamp-1 ">
                  {getValues("resumes_zip_base64.name")
                    ? getValues("resumes_zip_base64.name")
                    : "chooose file"}
                </span>
                {/* {bulkFileDetail.name ? bulkFileDetail.name : "Choose file"} */}
              </div>
            </label>

            <input
              type="file"
              ref={bulkResumeRef}
              className="hidden"
              accept=".zip"
              onChange={onFileChange}
            />

            <div className="mt-1">
              <span className="mt-10 text-xs text-error">
                {errors[RESUMES_ZIP_FILE]?.message}
              </span>
            </div>
          </div>

          {/* {bulkFileDetail.base64 && ( */}
          {getValues("resumes_zip_base64.base64") && (
            <Button label="Upload" styleWrapper="h-12 md:w-1/2 " />
          )}
        </form>
      </div>
    </Modal>
  );
}

export default BulkResumeModal;
