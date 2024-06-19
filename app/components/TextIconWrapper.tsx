import { isValueValid } from "@/app/lib/utils";

import classNames from "classnames";
import React from "react";
import IconComponent from "./IconComponent";

type TextIconWrapperType = {
  label: string;
  iconSubText?: string;
  isIcon?: boolean;
  iconName?: string;
  value: boolean | number | string;
  isDivider?: boolean;
  wrapperClassName?: string;
  textWrapperClassName?: string;
  IconWrapperClassName?: string;
};

function TextIconWrapper({
  label,
  iconSubText,
  isIcon,
  iconName,
  value,
  isDivider,
  wrapperClassName,
  textWrapperClassName,
  IconWrapperClassName,
}: TextIconWrapperType) {
  return (
    <>
      <div
        className={classNames(
          "flex cursor-pointer flex-wrap ",
          wrapperClassName
        )}
      >
        <p
          key={`textIconWrapper-${label}`}
          className={classNames(
            "flex items-center justify-center text-sm text-secondaryBlack",
            textWrapperClassName
          )}
        >
          <span className="font-semibold">{label}</span>

          {isIcon ? (
            <span className={classNames("pl-2", IconWrapperClassName)}>
              {isValueValid(value) ? (
                <>
                  <IconComponent
                    icon={
                      iconName
                        ? iconName
                        : value
                        ? "mingcute:check-2-fill"
                        : "ep:close-bold"
                    }
                    color={value ? "green" : "red"}
                    style=" h-6 w-6"
                  />
                  <span>{iconSubText && iconSubText} </span>
                </>
              ) : (
                <span className="rounded-md bg-black p-1 px-4 pb-2 font-bold text-white">
                  Pending
                </span>
              )}
            </span>
          ) : (
            <span
              className={classNames(
                " mx-2 min-w-[30px] rounded-md  bg-gray px-2 py-1 pl-2 text-center font-bold text-primary opacity-90 shadow-8",
                IconWrapperClassName
              )}
            >
              {value ?? "--"}
            </span>
          )}
        </p>
      </div>
      <div
        className={classNames(`my-1 hidden border-t border-gray `, {
          "!block": isDivider,
        })}
      />
    </>
  );
}

export default TextIconWrapper;
