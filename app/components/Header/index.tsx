"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import AnchorLink from "react-anchor-link-smooth-scroll";

import { fetchAccessTokenFromCookie } from "@/app/serverActions/auth";

import menuData from "./menuData";
import classNames from "classnames";
import ActiveLink from "../ActiveLink";
import { useAuth } from "@/app/contextApi/AuthContext";

const Header = () => {
  const pathname = usePathname();
  const { setIsUserLoggedIn, isLoggedIn: isUserLoggedIn } = useAuth();
  // const isUserLoggedIn = useAppSelector((state) => state.authReducer.loggedIn);

  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 180) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  // const handleSubmenu = (index) => {
  //   if (openIndex === index) {
  //     setOpenIndex(-1);
  //   } else {
  //     setOpenIndex(index);
  //   }
  // };

  const logout = async () => {
    logout();
    // const resp = await logoutHandler();
    // console.log({ resp });
  };

  const getAccessToken = async () => {
    const cookie = await fetchAccessTokenFromCookie();
    if (cookie) {
      setIsUserLoggedIn(true);
    } else {
      setIsUserLoggedIn(false);
    }
  };

  useEffect(() => {
    getAccessToken();
  }, [pathname]);
  return (
    <>
      <header
        className={`header top-0 left-0 z-9999 flex h-20 w-full items-center bg-transparent ${
          sticky
            ? "!fixed !z-[9999]  !bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm !transition dark:!bg-white "
            : "absolute "
        }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex  ">
            <div className="flex w-full items-center justify-start  space-x-2 px-4 xl:mr-12">
              <Link
                href="/"
                className={`header-logo block ${
                  sticky ? "py-5 lg:py-2" : "py-10"
                } `}
              >
                <Image
                  src="/images/LegoSapienFull2.png"
                  alt="logo"
                  className={classNames("invert", {
                    "!invert-0": sticky,
                  })}
                  width={200}
                  height={70}
                />
              </Link>
            </div>
            <div className="flex w-full items-center justify-end  ">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span
                    className={classNames(
                      `relative my-1.5 block h-0.5 w-[30px] bg-white transition-all duration-300 ${
                        navbarOpen ? " top-[7px] rotate-45" : " "
                      }`,
                      {
                        "bg-dark": sticky,
                      }
                    )}
                  />
                  <span
                    className={classNames(
                      `relative my-1.5 block h-0.5 w-[30px]  bg-white transition-all duration-300 ${
                        navbarOpen ? "opacity-0 " : " "
                      }`,
                      {
                        "bg-dark": sticky,
                      }
                    )}
                  />
                  <span
                    className={classNames(
                      `relative my-1.5 block h-0.5 w-[30px] bg-white transition-all duration-300 ${
                        navbarOpen ? " top-[-8px] -rotate-45" : " "
                      }`,
                      {
                        "bg-dark": sticky,
                      }
                    )}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar z-30  absolute right-10 w-[250px] rounded border-[.5px] border-body-color/50 bg-white py-4 px-6 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible  lg:absolute lg:top-5 lg:w-auto lg:border-none lg:!bg-transparent lg:bg-white lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible opacity-0"
                  } ${sticky ? "lg:-top-1" : "lg:top-7"}`}
                >
                  <ul className="block lg:flex lg:space-x-12">
                    {menuData.map((menuItem) => (
                      <li key={menuItem.id} className="group relative">
                        {menuItem.path ? (
                          pathname !== "/" ? (
                            <ActiveLink
                              // activeClassName={"!text-primary2"}
                              href={"/" + menuItem.path}
                              isSticky={sticky}
                              isNavbarOpen={navbarOpen}
                            >
                              {menuItem.title}
                            </ActiveLink>
                          ) : (
                            <AnchorLink
                              href={menuItem.path}
                              className={classNames(
                                `flex py-2 text-base font-medium text-white group-hover:opacity-70  lg:mr-0 lg:inline-flex lg:py-6 lg:px-0`,
                                {
                                  " font-bold dark:text-white": !sticky,
                                  "!text-white": navbarOpen,

                                  "!text-primary2": pathname === menuItem.path,
                                  "!text-black": pathname !== "/",
                                }
                              )}
                            >
                              {menuItem.title}
                            </AnchorLink>
                          )
                        ) : null}
                      </li>
                    ))}

                    {/* dashboard link */}
                    {isUserLoggedIn && (
                      <li key={"header-dashboard"} className="group relative">
                        <ActiveLink
                          // activeClassName={"!text-primary2"}
                          href={"/dashboard-refactor"}
                          isSticky={sticky}
                          isNavbarOpen={navbarOpen}
                        >
                          Dashboard
                        </ActiveLink>
                      </li>
                    )}
                    {/* end menu data link */}

                    {isUserLoggedIn ? (
                      <li className="group relative mt-2 flex items-start lg:mt-0 lg:items-center lg:justify-center">
                        <button
                          onClick={logout}
                          className={classNames(
                            `ease-in-up  w-36 rounded-[30px] bg-primary2  py-3 text-base  text-white transition duration-300 hover:bg-white hover:bg-opacity-90 hover:text-primary2 hover:shadow-signUp md:block md:px-4 lg:px-4 xl:px-6`,
                            {
                              "bg-secondary": sticky,
                            }
                          )}
                        >
                          Logout
                        </button>
                      </li>
                    ) : (
                      <>
                        <li className="group relative">
                          <ActiveLink
                            // activeClassName={"!text-primary2"}
                            href={"/signin"}
                            isSticky={sticky}
                            isNavbarOpen={navbarOpen}
                          >
                            sign in
                          </ActiveLink>
                        </li>
                        {/* TODO: show in future currently hide the signup btn */}
                        <li className="group relative hidden">
                          <ActiveLink
                            href={"/signup"}
                            isSticky={sticky}
                            isNavbarOpen={navbarOpen}
                          >
                            sign up
                          </ActiveLink>
                        </li>
                      </>
                    )}
                  </ul>
                </nav>
              </div>
              {/* <div className="mt-2 flex items-center justify-end pr-16 lg:pr-0"> */}

              {/* <div>
                  <ThemeToggler />
                </div> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
