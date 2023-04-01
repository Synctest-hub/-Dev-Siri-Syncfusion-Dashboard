import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import type { FC } from "react";
import type { NavButtonProps } from "../types";

const NavButton: FC<NavButtonProps> = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button type="button" onClick={customFunc} style={{ color }} className="relative text-xl rounded-full p-3 hover:bg-light-gray">
      <span style={{ background: dotColor }} className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2" />
      {icon}
    </button>
  </TooltipComponent>
);

export default NavButton;
