"use client";

import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps, FC } from "react";

type ActiveLocalizedLinkProps = ComponentProps<typeof Link> & {
  activeClassName?: string;
  allowSubPath?: boolean;
  isNavbarOpen?: boolean;
  isSticky?: boolean;
};

const ActiveLink: FC<ActiveLocalizedLinkProps> = ({
  children,
  activeClassName = "!text-primary2",
  allowSubPath = false,
  className,
  href = "",
  isNavbarOpen = false,
  isSticky = false,
  ...props
}) => {
  const pathname = usePathname();

  const baseClasNames = `flex py-2 text-base font-medium capitalize text-black group-hover:opacity-70  lg:mr-0 lg:inline-flex lg:py-6 lg:px-0`;
  const finalClassName = classNames(baseClasNames + className, {
    "!text-white": !isSticky || isNavbarOpen,
    "!text-white lg:!text-black": isSticky && href.toString() !== pathname,

    [activeClassName]: allowSubPath
      ? // When using allowSubPath we want only to check if
        // the current pathname starts with the utmost upper level
        // of an href (e.g. /docs/...)
        pathname.startsWith(`/${href.toString().split("/")[1]}`)
      : href.toString() === pathname,
  });

  // console.log({ pathname, href: href.toString(), isSticky, isNavbarOpen });
  return (
    <Link className={finalClassName} href={href} {...props}>
      {children}
    </Link>
  );
};

export default ActiveLink;
