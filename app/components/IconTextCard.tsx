import React from "react";
import IconComponent from "./IconComponent";

type IconTextCard = {
  icon: string;
  iconStyleWrapper?: string;
  label: string;
};

function IconTextCard({ icon, label, iconStyleWrapper }: IconTextCard) {
  return (
    <div className="flex items-center justify-center">
      <IconComponent style={iconStyleWrapper} icon={icon} />
      <span className="ml-1 mt-1 text-sm font-bold text-secondaryBlack">
        {label}
      </span>
    </div>
  );
}

export default IconTextCard;
