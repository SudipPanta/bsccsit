import { HomeIcon, MenuIcon } from "@/icons";
import React from "react";

export const AppFooter = () => {
  return (
    <div>
      <div className="h-16 w-16">
        <HomeIcon />
      </div>
      <div className="h-16 w-16">{MenuIcon}</div>
    </div>
  );
};