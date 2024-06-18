"use client";

import React, { FC, ButtonHTMLAttributes, ReactNode } from "react";
import classNames from "classnames";
import { Icon } from "@iconify/react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  styleWrapper?: string;
  loading?: boolean;
  children?: ReactNode;
}

const Button: FC<ButtonProps> = ({
  label,
  onClick,
  styleWrapper,
  loading,
  children,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      type="submit"
      {...props}
      className={classNames(
        `flex w-full cursor-pointer items-center justify-center rounded-md bg-primary py-4 px-9 text-base font-medium capitalize text-white transition duration-300 ease-in-out hover:text-secondaryBlack hover:shadow-signUp ${styleWrapper}`,
        {
          "py-1": loading,
        }
      )}
    >
      {children}
      {loading ? (
        <Icon className="h-10 w-10 " icon="line-md:loading-twotone-loop" />
      ) : (
        label
      )}
    </button>
  );
};

export default Button;
