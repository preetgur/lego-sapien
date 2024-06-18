"use client";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";

function BackBtn() {
  const { back } = useRouter();

  return (
    <Icon
      onClick={() => back()}
      icon={"eva:arrow-back-outline"}
      className={`h-8 w-8 text-primary`}
    />
  );
}

export default BackBtn;
