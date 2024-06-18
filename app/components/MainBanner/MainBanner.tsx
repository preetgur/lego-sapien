"use client";
import React from "react";
import styles from "./MainBanner.module.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import classNames from "classnames";

const MainBanner = () => {
  return (
    <div
      id="home"
      className={`${styles.mainBanner} ${styles.itemByOne} h-screen`}
    >
      <div className="container h-screen w-screen">
        <div className="flex h-screen items-center justify-center">
          <div className=" relative text-center lg:mt-40">
            <h4 className="text-2xl font-extralight tracking-wider text-white">
              Your Interview Assistant
            </h4>
            <h1 className="mt-4 mb-7 text-[55px] font-extralight tracking-[2px] text-white">
              The Best{" "}
              <span className=" font-semibold text-primary2">Humanoid</span>{" "}
              Interviewer
            </h1>
            <p className=" m-auto mb-8 max-w-4xl text-white">
              Introducing LegoSapien, a groundbreaking solution designed to
              revolutionize the hiring process and transform the way
              organizations build their dream teams. Say goodbye to traditional
              hiring challenges and welcome a new Humanoid era of Interactive,
              Intelligent, Near Real world, Accurate 1st of a kind Interview
              System.
            </p>

            <div className="flex items-center justify-center space-x-2">
              <AnchorLink
                href={"#welcome"}
                className={classNames(
                  `flex h-10 w-36 items-center justify-center rounded-[30px] bg-primary2 py-2 text-base font-medium text-white  hover:bg-white group-hover:opacity-70 lg:mr-0 lg:inline-flex lg:py-6 lg:px-0`
                )}
              >
                Get Started
              </AnchorLink>

              {/* <Button
                styleWrapper="w-36 rounded-[30px] !py-2 !px-4 !bg-transparent border hover:text-primary2 "
                label="View Work"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
