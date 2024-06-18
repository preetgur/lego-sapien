"use client";

import { Icon } from "@iconify/react";
import classNames from "classnames";
import React from "react";

type IconComponent = {
  icon: string;
  style?: string;
  color?: string;
  width?: number;
  height?: number;
};

function IconComponent({ icon, style, ...props }: IconComponent) {
  return (
    <Icon
      icon={icon}
      className={classNames("h-8 w-8 text-primary ", style)}
      {...props}
    />
  );
}

export default IconComponent;
