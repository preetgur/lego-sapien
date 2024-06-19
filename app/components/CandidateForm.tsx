"use client";
import { Control, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useParams, useRouter } from "next/navigation";
import { ChangeEvent, useRef, useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

import {
  CANDIDATE_FIELDS,
  CANDIDATE_LANGUAGE,
  CANDIDATE_LEVEL,
  CANDIDATE_LEVEL_TYPES,
  EMAIL,
  EXPERIENCE,
  EXPERIENCE_RANGE_TYPES,
  FIRST_NAME,
  IMAGE,
  LANGUAGE_LIST,
  LAST_NAME,
  MOBILE_NUMBER,
  PDF,
} from "@/app/lib/constants";
import { FormCandidateInterface } from "@/types/auth";

import { CANDIDATE_SCHEMA } from "@/app/lib/schema";

import { notify } from "../helpers/NotificationHelper";
import InputField from "./InputField";
import SelectField from "./SelectField";
import { useUI } from "../contextApi/UIContext";
import { addCandidate } from "../serverActions/job";

const defaultValues = {
  [FIRST_NAME]: "",
  [LAST_NAME]: "",
  // [PROFILE]: "",
  // [EXPERIENCE]: "",
  [EMAIL]: "",
  [MOBILE_NUMBER]: "",
};
const fileDefaultValues = {
  [IMAGE]: null,
  [PDF]: null,
};
const DropdownDefaultValues = {
  [EXPERIENCE]: null,
  [CANDIDATE_LEVEL]: {
    value: "UNKNOWN",
    label: "Unknown",
  },
  [CANDIDATE_LANGUAGE]: {
    value: "en",
    label: "English",
  },
};

// [SELECTION_STATUS]: yup.object(),

interface ResumeFileDetail {
  name: string;
  base64: string | null;
}

export default function CandidateForm() {
  const inputRef = useRef<any>(null);
  const resumeRef = useRef<any>(null);
  const { startLoading, stopLoading } = useUI();
  const [resumeFileDetail, setResumeFileDetail] =
    useState<ResumeFileDetail | null>(null);

  const { back } = useRouter();
  const { id } = useParams();

  const [imagePreview, setImagePreview] = useState<any>(null);
  const [pdfPreview, setPdfPreview] = useState<any>(null);
  const {
    handleSubmit,
    reset,
    getValues,
    control,
    register,
    setError,
    clearErrors,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(CANDIDATE_SCHEMA),
    defaultValues: {
      ...defaultValues,
      ...DropdownDefaultValues,
      ...fileDefaultValues,
    },
  });

  console.log({ getValues: getValues() });
  const onSubmit: SubmitHandler<any> = async (data) => {
    try {
      // Filter out non-truthy values from newData
      const filteredData: any = Object.fromEntries(
        Object.entries(data).filter(([_, value]) => value)
      );

      startLoading();

      const response = await addCandidate({ ...filteredData, jobId: +id });
      console.log({ addCandidate: response });
      // await dispatch(
      //   thunkCreateCandidateWithJobIdHandler({ ...filteredData, jobId: +id })
      // );
      notify({ type: "success", message: "Candidate added successfully" });
      reset();
      // back();
    } catch (error: any) {
      notify({ type: "error", message: error + "" });
      console.log("#### create candiate  error ####", error + "");
    } finally {
      stopLoading();
    }
  };

  const onFileChange = (
    e: ChangeEvent<HTMLInputElement>,
    type: keyof typeof fileDefaultValues
  ) => {
    const file = e.target.files?.[0];

    if (
      file &&
      type === "resume_pdf_base64" &&
      file.type === "application/pdf"
    ) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const resultString = reader.result as string; // Explicitly cast to string

        // TODO : pending remove in future
        // const prefix = "data:application/pdf;base64,";
        // const base64Data = resultString.split(prefix)[1];
        clearErrors("resume_pdf_base64");
        setPdfPreview(resultString);
        setValue("resume_pdf_base64", resultString);
        setResumeFileDetail({
          name: file.name,
          base64: reader.result as string,
        });
        // }
      };
      reader.readAsDataURL(file);
    } else {
      if (type === "resume_pdf_base64") {
        setError("resume_pdf_base64", {
          type: "validate",
          message: "** Please Select PDF file **",
        });
        notify({ type: "error", message: "Please select PDF file." });
      }
    }
  };

  const hasError = Object.keys(errors).length ? true : false;
  return (
    <>
      <div className=" flex w-full flex-wrap items-center justify-center rounded-md   md:w-2/3 ">
        <div className="w-full px-2">
          <div className="mx-auto max-w-[900px] rounded-md bg-secondaryWhite py-10 px-2 sm:-mt-5 sm:px-10 sm:pt-0">
            <h1 className="mb-2 pt-4 text-center text-2xl font-semibold text-black dark:text-secondaryBlack sm:text-4xl">
              Candidate Form
            </h1>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="-mx-4 flex flex-wrap ">
                <div className="my-2 flex w-full flex-col items-center justify-center">
                  <div
                    onClick={() => inputRef?.current?.click()}
                    className="group relative h-40 w-40 overflow-hidden rounded-full   transition delay-150 duration-300 ease-linear hover:bg-black hover:ease-linear"
                  >
                    <div className="absolute inset-0 flex h-40 w-40 -translate-x-20 items-center justify-center transition duration-300 ease-linear group-hover:translate-x-0 group-hover:bg-black">
                      <Icon
                        icon="mdi:camera"
                        className="hidden h-10 w-10 group-hover:block"
                        color="#2A3E95"
                      />
                    </div>
                    {imagePreview ? (
                      <Image
                        width={40}
                        height={40}
                        src={imagePreview}
                        alt="Uploaded"
                        className="h-full w-full object-cover group-hover:bg-black"
                      />
                    ) : (
                      <div className="flex h-full  w-full items-center justify-center  bg-body-color">
                        <Icon
                          icon="et:profile-male"
                          className=" h-20 w-20 group-hover:hidden "
                          color="#ffffff"
                        />
                      </div>
                    )}
                  </div>

                  <input
                    {...register(IMAGE)}
                    accept="image/*"
                    ref={inputRef}
                    className="hidden"
                    type="file"
                    onChange={(e) => onFileChange(e, IMAGE)}
                  />
                  <div className="mt-5">
                    <span className="mt-10 text-xs text-error">
                      {errors[IMAGE]?.message}
                    </span>
                  </div>
                </div>

                {Object.keys(defaultValues).map((key: string) => {
                  const specificKey = key as keyof typeof defaultValues;

                  return (
                    <InputField
                      key={key}
                      className={`mb-4 w-full px-4  ${
                        key === "email" ? "md:w-1/2" : "md:w-1/2"
                      } `}
                      name={key}
                      type={CANDIDATE_FIELDS[specificKey].type}
                      label={CANDIDATE_FIELDS[specificKey].label}
                      placeholder={CANDIDATE_FIELDS[specificKey].placeholder}
                      register={register as any}
                      error={errors[specificKey]?.message}
                      isRequiredField
                    />
                  );
                })}

                <div className="mb-4 w-full px-4 md:w-1/2">
                  <SelectField
                    wrapperClassName="flex w-full"
                    name={CANDIDATE_LEVEL}
                    control={control as any}
                    label="Candidate Level"
                    options={CANDIDATE_LEVEL_TYPES}
                    placeholder="Select Candidate Level"
                    closeMenuOnSelect={true}
                    isMulti={false}
                    error={errors?.candidate_level?.message}
                  />
                </div>

                <div className="mb-4 w-full px-4 md:w-1/2">
                  <SelectField
                    wrapperClassName="flex w-full"
                    name={EXPERIENCE}
                    control={control as any}
                    label="Experience"
                    options={EXPERIENCE_RANGE_TYPES}
                    placeholder="Select Experience"
                    closeMenuOnSelect={true}
                    isMulti={false}
                    error={errors?.experience?.message}
                  />
                </div>

                <div className="w-full px-4 md:w-1/2">
                  <SelectField
                    name={CANDIDATE_LANGUAGE}
                    control={control as any}
                    label="Candidate Language"
                    options={LANGUAGE_LIST}
                    placeholder="Select Language"
                    closeMenuOnSelect={true}
                    isMulti={false}
                    isCreateableSelect={false}
                    wrapperClassName="flex w-full "
                  />
                </div>
                <div className={`w-full px-4 md:w-1/2 `}>
                  <label
                    htmlFor="upload-resume"
                    className="mb-3 block text-sm font-semibold text-secondaryBlack"
                  >
                    Upload Resume{" "}
                    <span className=" text-vs text-primary"> (PDF Only)</span>
                  </label>
                  <label htmlFor="resume-upload">
                    <div
                      className={`focus-visible:shadow-none flex w-full cursor-pointer items-center justify-center gap-2 rounded-md border border-transparent bg-background py-3 px-6 text-base text-body-color placeholder-body-color shadow-signUp  outline-none hover:border-primary ${
                        errors[PDF]?.message && "focus:border-[#b14040]"
                      }`}
                      onClick={() => {
                        resumeRef?.current?.click();
                      }}
                    >
                      <span className=" w-7">
                        <Icon
                          icon="bxs:file-pdf"
                          className=" h-5 w-5 group-hover:hidden "
                          color="#FB607F"
                        />
                      </span>

                      <span className="line-clamp-1 ">
                        {pdfPreview ? resumeFileDetail?.name : "Choose file "}
                      </span>

                      {/* Chose File */}
                    </div>
                  </label>

                  <input
                    type="file"
                    id="resume-upload"
                    // ref={resumeRef}
                    {...register(PDF)}
                    className="hidden"
                    accept=".pdf"
                    onChange={(e) => onFileChange(e, PDF)}
                  />

                  <div className="mt-1">
                    <span className="mt-10 text-xs text-error">
                      {errors[PDF]?.message}
                    </span>
                  </div>
                </div>
              </div>
              <div className="mx-auto my-6 flex  w-full max-w-xs items-center justify-center">
                <button
                  disabled={hasError}
                  type="submit"
                  className={`flex min-w-42.5 items-center justify-center rounded-md bg-primary py-3 px-8 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp ${
                    hasError && "opacity-50"
                  }`}
                >
                  Add Candidate
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
