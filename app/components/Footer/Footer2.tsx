import Link from "next/link";
import React from "react";

const Footer2 = () => {
  return (
    <footer className="footer-area bg-mainBlack">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <h4>
              <Link href="/">
                {/* <span className="upper" style={{ textTransform: "uppercase" }}>
                  Lego
                </span> */}
                Lego Sapien
              </Link>
            </h4>
            <p>
              Copyright <i className="fa fa-copyright"></i> 2024 All Rights
              Reserved.
            </p>
          </div>
        </div>
        <div>
          <p className="text-xs">
            {" "}
            <span className="px-2"> Privacy Policy </span> |{" "}
            <span className="px-2">Terms of service </span>
          </p>{" "}
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
