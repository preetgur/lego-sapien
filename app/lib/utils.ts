import moment from "moment";
import { ACCURACY_RANGES, FLOW_TYPE_LIST, LANGUAGE_LIST } from "./constants";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface EmailItem {
  label: string;
  value: string;
  __isNew__?: boolean;
}

export const delayTimeout = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export function isValueValid(value: any) {
  return value !== undefined && value !== null;
}

export function extractLabels(array: EmailItem[]) {
  return array?.map((item) => item.label);
}

export function isSkipBtnEnabled(): boolean {
  return process.env.NEXT_PUBLIC_SHOW_SKIP_BUTTON === "true";
}

export function formatNumber(
  input: string | number | null | undefined
): number {
  let number = typeof input === "string" ? parseFloat(input) : input;

  // Handle null and undefined values
  if (number == null) {
    return 0; // Or any other default value you prefer
  }

  // Check if the input is a number and is an integer (no decimal part)
  if (Number.isInteger(number)) {
    return number;
  } else if (typeof number === "number") {
    // If it has a decimal part, round it to 2 decimal places
    return Number(number.toFixed(2));
  } else {
    // Return 0 if the input is not a valid number
    return 0;
  }
}

export function getAccuracyLabelAndColor(accuracy: number | undefined) {
  let label = "--";
  let colorClass = "#212227";

  if (typeof accuracy === "number") {
    const range = ACCURACY_RANGES.find(
      (range) => accuracy >= range.min && accuracy <= range.max
    );
    if (range) {
      label = range.label;
      colorClass = range.colorClass;
    }
  }

  return { label, colorClass };
}

export async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function formatDate(postingDate: string | undefined | Date): string {
  if (!postingDate) {
    return "";
  }
  return moment(postingDate).format("MMMM D, YYYY [at] H:mm");
}

export function hasContent(value: any): boolean {
  // Check if value is undefined or null
  if (value === undefined || value === null) {
    return false;
  }

  // If value is a string, check if it's not empty
  if (typeof value === "string") {
    return value.trim().length > 0;
  }

  // If value is an array, check if it's not empty
  if (Array.isArray(value)) {
    return value.length > 0;
  }

  // If value is an object, check if it has any enumerable properties
  if (typeof value === "object") {
    return Object.keys(value).length > 0;
  }

  // For other types (number, boolean, etc.), consider them non-empty
  return true;
}

// utils/getBrowser.ts

type Browser =
  | "Chrome"
  | "Firefox"
  | "Safari"
  | "Edge"
  | "Opera"
  | "Internet Explorer"
  | "Other";

const getBrowser = (userAgent: string): Browser => {
  if (userAgent.indexOf("Chrome") > -1) {
    return "Chrome";
  } else if (userAgent.indexOf("Firefox") > -1) {
    return "Firefox";
  } else if (userAgent.indexOf("Safari") > -1) {
    return "Safari";
  } else if (userAgent.indexOf("Edge") > -1) {
    return "Edge";
  } else if (userAgent.indexOf("Opera") > -1) {
    return "Opera";
  } else if (userAgent.indexOf("MSIE") > -1) {
    return "Internet Explorer";
  } else {
    return "Other";
  }
};

export default getBrowser;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getLanguageByCode = (language_code: string) => {
  const language = LANGUAGE_LIST.find((item) => item.value === language_code);
  return language || null;
};

export const getFlowType = (flow_type: string) => {
  const flowType = FLOW_TYPE_LIST.find((item) => item.value === flow_type);
  return flowType || null;
};
