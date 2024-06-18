"use client";

import { useUI } from "@/app/contextApi/UIContext";
import SVGLoader from "./SVGLoader";

export default function Loader() {
  const { isLoading } = useUI();

  return (
    <>
      {isLoading && (
        <div className=" absolute inset-0 z-999999 h-screen w-full bg-black bg-opacity-30 ">
          <SVGLoader
            showLoader={true}
            isFixed
            iconColor="#FFFFFF"
            textColor="!text-white"
            className=" !bg-black !bg-opacity-70  "
          />
        </div>
      )}
    </>
  );
}
