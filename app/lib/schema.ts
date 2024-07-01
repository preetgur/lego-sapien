import * as yup from "yup";
import {
  ACCESS_TO,
  CANDIDATE_LANGUAGE,
  CANDIDATE_LEVEL,
  CATEGORY,
  CITY,
  COUNTRY,
  COUNTRY_CODE,
  CTC_MAX,
  CTC_MIN,
  CURRENCY,
  DEFAULT_QUESTIONS,
  DEPARTMENT,
  EMAIL,
  EMAIL_BODY,
  EMAIL_SUBJECT,
  EXPERIENCE,
  EXPERIENCE_RANGE,
  FIRST_NAME,
  FITMENT_QUESTIONS,
  FLOW_TYPE,
  IMAGE,
  INTRO_MESSAGE,
  JOB_DESCRIPTION,
  JOB_PRIMARY_TECHNOLOGIES,
  JOB_SECONDARY_TECHNOLOGIES,
  JOB_TITLE,
  JOB_TYPE,
  LANGUAGE,
  LAST_NAME,
  MOBILE_NUMBER,
  NOTICE_PERIOD,
  N_FOLLOWUP_QUESTIONS,
  N_QUESTIONS,
  PDF,
  QB_FILE_BASE64,
  RESUMES_ZIP_FILE,
  ROLE_DESCRIPTION,
  SECTOR_NAME,
  SHOULD_ASK_DEFAULT_QUESTIONS,
  SHOULD_ASK_FITMENT_QUESTIONS,
  SHOULD_ASK_FOLLOWUP,
  SHOULD_RECORD_VIDEO,
  SHOULD_VIRTUAL_INTERVIEWER_CALL,
  STATE,
} from "./constants";

export const JOB_POSTING_SCHEMA = yup.object({
  [JOB_TITLE]: yup
    .string()
    .min(3, ({ min }) => `Job Title must be at least ${min} characters`)
    .required("Job Title is Required"),
  [DEPARTMENT]: yup.string(),
  [ROLE_DESCRIPTION]: yup.string(),
  [EMAIL_SUBJECT]: yup.string(),
  [EMAIL_BODY]: yup.string(),
  [INTRO_MESSAGE]: yup.string(),
  [JOB_DESCRIPTION]: yup
    .string()
    .min(20, ({ min }) => `Job Description must be at least ${min} characters`)
    .required("Job Description is Required"),
  [N_QUESTIONS]: yup
    .number()
    .min(
      2,
      ({ min }) => `No of Questions should be greater than or equal to ${min} `
    )
    .max(
      50,
      ({ max }) => `No of Questions should be less than or equal to  ${max} `
    ),
  // [N_FOLLOWUP_QUESTIONS]: yup.number().required().positive().integer(),
  [N_FOLLOWUP_QUESTIONS]: yup
    .number()
    .required()
    .integer()
    .min(
      0,
      ({ min }) =>
        `FollowUp Questions should be greater than or equal to ${min} `
    )
    .max(
      5,
      ({ max }) => `FollowUp Questions should be less than or equal to  ${max} `
    ),
  [NOTICE_PERIOD]: yup
    .number()
    .required()
    .integer()
    .min(
      0,
      ({ min }) => `Notice Period should be greater than or equal to ${min} `
    )
    .max(
      200,
      ({ max }) => `Notice Period should be less than or equal to ${max} `
    ),
  [JOB_PRIMARY_TECHNOLOGIES]: yup
    .array()
    .min(1, "At least one skill is required")
    .required("Required"),
  [JOB_SECONDARY_TECHNOLOGIES]: yup
    .array()
    .min(1, "At least one skill is required")
    .required("Required"),
  [SHOULD_ASK_FOLLOWUP]: yup.boolean(),
  [SHOULD_RECORD_VIDEO]: yup.boolean(),
  [SHOULD_VIRTUAL_INTERVIEWER_CALL]: yup.boolean(),
  [SHOULD_ASK_DEFAULT_QUESTIONS]: yup.boolean(),
  [SHOULD_ASK_FITMENT_QUESTIONS]: yup.boolean(),
  [JOB_TYPE]: yup.object().notRequired(),

  [EXPERIENCE_RANGE]: yup.object().notRequired(),
  [SECTOR_NAME]: yup.object().notRequired(),
  [LANGUAGE]: yup.object().notRequired(),
  [FLOW_TYPE]: yup.object().notRequired(),
  [COUNTRY]: yup.array().notRequired(),
  [STATE]: yup.array().notRequired(),
  [CITY]: yup.array().notRequired(),
  [CTC_MIN]: yup
    .number()
    .notRequired()
    .integer()
    .min(
      0,
      ({ min }) => `minimum ctc should be greater than or equal to ${min} `
    )
    .transform((value, originalValue) => {
      // If the original value is an empty string, return null instead of NaN
      if (originalValue === "") {
        return null;
      }
      // Otherwise, return the original value
      return value;
    }),
  [CTC_MAX]: yup
    .number()
    .nullable()
    .notRequired()
    .integer()
    .min(0, ({ min }) => `should be greater than  ${min} `)
    .when(CTC_MIN, (ctcMinArray, schema) => {
      // Assuming ctcMinArray is an array and you want to use the first element as a number
      const ctcMin = ctcMinArray[0];
      if (typeof ctcMin === "number") {
        return schema.min(ctcMin + 1, `should be greater than minimum ctc`);
      }
      return schema;
    })
    .transform((value, originalValue) => {
      if (originalValue === "") {
        return null;
      }

      return value;
    }),
  [CURRENCY]: yup.object().nullable().notRequired(),

  // Add the new ACCESS_TO field validation
  [ACCESS_TO]: yup
    .array()
    .of(
      yup.object().shape({
        label: yup.string().required("Label is required"),
        value: yup
          .string()
          .email("Must be a valid email address")
          .required("Email is required"),
      })
    )
    .nullable()
    .notRequired(),

  [DEFAULT_QUESTIONS]: yup.array().of(
    yup.object({
      question: yup.string(),
      ideal_answer: yup.string(),
      question_type: yup.object().test({
        test: (value, context) => {
          const question = context.parent.question;
          console.log("QQQ ----QQQQ", { question, value });
          return !value || (question && question.trim().length > 0);
        },
        message: "Question type is required when question is specified",
      }),
    })
  ),
  ["job_location"]: yup.array().of(
    yup.object({
      city: yup.object().notRequired(),
      state: yup.object().notRequired(),
      country: yup.object().notRequired(),
      addressLabel: yup.string().notRequired(),
    })
  ),
  [FITMENT_QUESTIONS]: yup.array().of(
    yup.object({
      question: yup.string(),
      tag: yup.string(),
      question_type: yup.object(),
      will_terminate: yup.boolean(),
      isEditable: yup.boolean(),
      name: yup.string(),
      type: yup.string(),
      id: yup.string(),
    })
  ),
});

const MOBILE_NUMBER_REGEX = /^[\d\s()-]*$/;

export const CANDIDATE_SCHEMA = yup.object({
  [FIRST_NAME]: yup
    .string()
    .min(3, ({ min }) => `FirstName must be at least ${min} characters`)
    .required("FirstName is Required"),
  [LAST_NAME]: yup
    .string()
    .min(3, ({ min }) => `LastName must be at least ${min} characters`)
    .required("LastName is Required"),
  [MOBILE_NUMBER]: yup
    .string()
    .required("Mobile Number is Required")
    .matches(
      MOBILE_NUMBER_REGEX,
      "Invalid mobile number format. Use 9814198141 format."
    )
    .min(10, "Mobile Number should have at least 10 digits.")
    .max(15, "Mobile Number should not exceed 15 digits."),
  [EMAIL]: yup.string().required("Email is Required").email(),
  // [PROFILE]: yup.string(),
  [EXPERIENCE]: yup.object().notRequired(),
  [CANDIDATE_LEVEL]: yup.object().notRequired(),
  [IMAGE]: yup.mixed().notRequired(),
  [PDF]: yup.mixed().notRequired(),
  [CANDIDATE_LANGUAGE]: yup.object().notRequired(),
  [COUNTRY_CODE]: yup.object().notRequired(),
});

export const QUESTION_BANK_SCHEMA = yup.object({
  [CATEGORY]: yup
    .string()
    .min(3, ({ min }) => `Category must be at least ${min} characters`)
    .required("Category is Required"),
  [QB_FILE_BASE64]: yup
    .mixed<{ type: string; base64: string; name: string }>()
    .test("fileType", "File must be an Excel file (.xls or .xlsx)", (value) => {
      console.log({ value });
      if (!value) return false; // allow empty value for required validation
      const fileType = value.type;

      if (
        fileType === "application/vnd.ms-excel" ||
        fileType ===
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      ) {
        value.base64 = `data:application/xlsx;base64,${
          value.base64.split(",")[1]
        }`;
      }

      return (
        fileType === "application/vnd.ms-excel" ||
        fileType ===
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      );
    })
    .required("File is Required"),
});

export const BULK_RESUME_SCHEMA = yup.object({
  // [RESUMES_ZIP_FILE]: yup.mixed().required(VALIDATION_ERROR),
  [RESUMES_ZIP_FILE]: yup
    .mixed<{ type: string; base64: string; name: string }>()
    .test("fileType", "Please Select .zip file", (value) => {
      console.log({ value });
      if (!value) return false; // allow empty value for required validation
      const fileType = value.type;

      if (fileType === "application/zip") {
        value.base64 = `data:application/zip;base64,${
          value.base64.split(",")[1]
        }`;
      }

      return fileType === "application/zip";
    })
    .required("File is Required"),
});
