"use client";

import { Disclosure } from "@headlessui/react";
import { Icon } from "@iconify/react";
import { useCopyToClipboard } from "@uidotdev/usehooks";
import classNames from "classnames";
import { notify } from "../helpers/NotificationHelper";

type DisclosureType = {
  title: string;
  subTitle?: string;
  accuracy?: string;
  description?: string;
  titleWrapper?: string;
  wrapperStyle?: string;
  style?: object;
  subTitleStyle?: object;
  titleColor?: string;
  panelColor?: string;
  children?: React.ReactNode[];
  isAnswer?: boolean;
  isCopyIconShown?: boolean;
  iconClassName?: string;
  panelClassName?: string;
  accuracyClassName?: object;
  isDefaultOpen?: boolean;
  list?: any[];
  isQuestionList?: boolean;
  isEmailList?: boolean;
  hasContent?: boolean;
  index?: number | string;
};

export const ACCURACY_RANGES = [
  { min: 89, max: 100, label: "Excellent", colorClass: "#1B998B" },
  { min: 79, max: 89, label: "Very Good", colorClass: "#009DDC" },
  { min: 69, max: 79, label: "Good", colorClass: "orange" },
  { min: 59, max: 69, label: "Average", colorClass: "#E9C46A" },
  { min: 49, max: 59, label: "Weak", colorClass: "brown" },
  { min: 0, max: 49, label: "Unsatisfactory", colorClass: "#E84855" },
];

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
export default function DisclosureComponent({
  title,
  accuracy,
  description,
  titleWrapper,
  children,
  wrapperStyle,
  style,
  subTitle,
  titleColor,
  panelColor,
  iconClassName,
  isCopyIconShown = true,
  panelClassName,
  accuracyClassName,
  subTitleStyle,
  isAnswer = false,
  isDefaultOpen = false,
  list = [],
  isQuestionList = true,
  isEmailList = false,
  hasContent = true,
}: DisclosureType) {
  const [copiedText, copyToClipboard] = useCopyToClipboard();

  const { label, colorClass } = getAccuracyLabelAndColor(
    accuracy ? +accuracy : 0
  );

  if (!hasContent) {
    return null;
  }

  return (
    <div className="w-full">
      <div
        className={classNames(
          `w-full rounded-md bg-secondaryBlack p-2 ${wrapperStyle}`
        )}
        style={style}
      >
        <Disclosure defaultOpen={isDefaultOpen}>
          {({ open }) => (
            <>
              <Disclosure.Button className=" bg-purple-100 text-purple-900 hover:bg-purple-200 focus-visible:ring-purple-500 flex w-full  items-center justify-between rounded-lg p-2 py-2 text-left text-sm font-medium focus:outline-none focus-visible:ring focus-visible:ring-opacity-75">
                <h2
                  className={classNames(
                    `text-lg font-medium leading-7 text-${
                      titleColor ? titleColor : "secondary"
                    }  sm:tracking-tight ${titleWrapper}`,
                    {
                      "sm:truncate": !open,
                    }
                  )}
                >
                  {isAnswer && (
                    <span className=" font-semibold text-secondaryBlack">
                      Question:{" "}
                    </span>
                  )}
                  {title}
                </h2>
                <div className="flex items-center gap-2 ">
                  <div
                    className={classNames(
                      "ml-5 flex  items-center justify-between",
                      {
                        "!items-start": open,
                      }
                    )}
                  >
                    {isCopyIconShown && (
                      <Icon
                        icon={"iconoir:copy"}
                        onClick={() => {
                          copyToClipboard(title);
                          notify({
                            type: "success",
                            message: "Question Copied !",
                          });
                        }}
                        className="mr-2 h-5 w-5"
                      />
                    )}

                    {accuracy && (
                      <p className="flex items-center justify-end text-xs">
                        <span
                          style={{
                            ...accuracyClassName,
                            backgroundColor: colorClass,
                          }}
                          className={classNames(
                            " ml-2  w-24 rounded-md px-4 py-1 text-center text-vs font-medium text-white"
                          )}
                        >
                          {label}
                        </span>
                      </p>
                    )}
                  </div>

                  {subTitle && (
                    <p
                      style={subTitleStyle}
                      className="rounded-md bg-primary px-4 py-2 pb-2 text-white"
                    >
                      {subTitle}
                    </p>
                  )}
                  <Icon
                    icon={"fluent:chevron-down-12-filled"}
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } text-purple-500 h-5 w-5 ${iconClassName}`}
                  />
                </div>
              </Disclosure.Button>
              <Disclosure.Panel
                className={`p-2 text-sm text-${
                  panelColor ? panelColor : "secondary"
                } ${panelClassName}`}
              >
                {children?.[0]}

                {isAnswer && (
                  <span className=" font-semibold text-secondaryBlack">
                    Answer:{" "}
                  </span>
                )}

                {isQuestionList &&
                  !isEmailList &&
                  list?.map(({ question }, index) => {
                    return (
                      <div key={index} className="py-2">
                        <p className="text-white">
                          {index + 1}
                          {".) "}
                          {/* <span className="mx-2"> {question_type.label}</span> :{" "} */}
                          <span className="p-2"> {question}</span>
                        </p>
                      </div>
                    );
                  })}

                {isEmailList &&
                  list?.map((email, index) => {
                    return (
                      <div key={index} className="py-2">
                        <p className="text-white">
                          {index + 1}
                          {".) "}
                          <span className="p-2"> {email}</span>
                        </p>
                      </div>
                    );
                  })}
                {description}

                {children?.[1]}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
