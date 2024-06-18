import React, { FC } from "react";
import classNames from "classnames";

import Link from "next/link";

type LinkButton = {
  href: string;
  styleWrapper?: string;
  title: string;
};

const LinkButton: FC<LinkButton> = ({ href, title, styleWrapper }) => {
  return (
    <Link
      href={href}
      className={classNames(
        `flex cursor-pointer items-center justify-center rounded-md bg-primary py-4 px-9 text-base font-medium capitalize text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp ${styleWrapper}`
      )}
    >
      {title}
    </Link>
  );
};

export default LinkButton;
