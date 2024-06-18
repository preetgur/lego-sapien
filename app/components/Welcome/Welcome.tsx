"use client";
import classNames from "classnames";
import Link from "next/link";
import React from "react";

import { Icon } from "@iconify/react";

export const Welcome = () => {
  return (
    <section id="welcome" className="welcome-area bg-mainBlack  py-20">
      <div className="container">
        <div className="section-title">
          <h4>
            Unlock Your <span>Team&apos;s</span> Potential: Seamless Hiring,
            Smarter Future
          </h4>
          <h2>
            Welcome to <span>LegoSapien</span>
          </h2>
          <p>
            Join the future of hiring . Elevate your recruitment experience,
            transform your workforce, and stay ahead in the competitive business
            landscape. The future of talent acquisition is here, and it starts
            with Lego Sapien.
          </p>
        </div>

        <div className="flex">
          <div className="single-box flex flex-col items-center">
            <Icon icon="fa-solid:edit" className="h-10 w-10 text-primary2" />

            <h3>Human touch interview</h3>
            <p>
              First of its kind to have an Avatar based real time video
              interviewing which provides the virtual platform an almost
              seamless real life like experience.
            </p>
            {/* <Link to="#" title="Read More" className="link-btn">
                <i className="fa fa-arrow-right"></i>
              </Link> */}

            <Link
              href={"#"}
              className={classNames(
                "block rounded py-2.5 text-sm text-dark hover:opacity-70 dark:text-white lg:px-3",
                {}
              )}
            >
              <Icon icon="mingcute:arrow-right-fill" className="h-8 w-6 " />
            </Link>
          </div>

          <div className="single-box flex flex-col items-center bg-opacity-50">
            <Icon
              icon="material-symbols:computer-outline"
              className="h-10 w-10 text-primary2"
            />
            <h3>Domains-Coverage</h3>
            <p>
              This product is already an expert with all technologies in the IT
              space,as well can be potentially used for BFSI (Banking and
              Finance sector) and Healthcare domains.
            </p>
            {/* <Link to="#" title="Read More" className="link-btn">
                <i className="fa fa-arrow-right"></i>
              </Link> */}

            <Link
              href={"#"}
              className={classNames(
                "block rounded py-2.5 text-sm text-dark hover:opacity-70 dark:text-white lg:px-3",
                {}
              )}
            >
              <Icon icon="mingcute:arrow-right-fill" className="h-8 w-6 " />
            </Link>
          </div>

          <div className="single-box flex flex-col items-center ">
            <Icon icon="fa:support" className="h-10 w-10 text-primary2" />
            <h3>Tailor made and customizable</h3>
            <p>
              Our product offering is spread across small,medium as well as
              large scale organizations.Anyone wishing to use for hiring can do
              so with minimal and hassle free customizations.
            </p>
            {/* <Link to="#" title="Read More" className="link-btn">
                <i className="fa fa-arrow-right"></i>
              </Link> */}
            <Link
              href={"#"}
              className={classNames(
                "block rounded py-2.5 text-sm text-dark hover:opacity-70 dark:text-white lg:px-3",
                {}
              )}
            >
              <Icon icon="mingcute:arrow-right-fill" className="h-8 w-6 " />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
