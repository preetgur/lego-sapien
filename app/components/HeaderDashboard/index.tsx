import Link from "next/link";
import { Icon } from "@iconify/react";
import Image from "next/image";

import DropdownUser from "./DropdownUser";
import BackBtn from "../BackBtn";

const HeaderDashboard = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}) => {
  return (
    <header className="dark:drop-shadow-none sticky top-0 z-99999 flex w-full bg-secondaryBlack">
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2  sm:gap-4 lg:hidden">
          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              props.setSidebarOpen(!props.sidebarOpen);
            }}
            className="border-stroke shadow-sm z-99999  block rounded-sm bg-boxdark p-1.5 dark:border-strokedark   dark:bg-transparent lg:hidden "
          >
            <Icon
              icon="pajamas:hamburger"
              className="h-8 w-8 "
              color="#FFFFFF"
            />
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}

          <Link
            className=" block flex-shrink-0 max-xs:hidden lg:hidden"
            href="/"
          >
            <Image width={60} height={60} src="/images/logo.svg" alt="Logo" />
          </Link>
        </div>

        <div className="hidden lg:flex">
          <BackBtn />
        </div>

        <div className="flex items-center gap-3 self-end   2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">
            {/* <!-- Dark Mode Toggler --> */}
            {/* <ThemeToggler /> */}
            {/* <!-- Dark Mode Toggler --> */}
          </ul>

          {/* <!-- User Area --> */}
          <DropdownUser />
          {/* <!-- User Area --> */}
        </div>
      </div>
    </header>
  );
};

export default HeaderDashboard;
