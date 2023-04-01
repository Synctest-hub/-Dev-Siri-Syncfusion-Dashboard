import type { FC } from "react";
import type { ButtonProps } from "../types";

import useStateContext from "../context/Context";

const Button: FC<ButtonProps> = ({ icon, color, bgColor, useThemeBgColor, bgHoverColor, width, text, borderRadius, size }) => {
  const { setIsClicked, initialState, currentColor } = useStateContext();

  return (
    <button
      type="button"
      onClick={() => setIsClicked(initialState)}
      style={{ backgroundColor: useThemeBgColor ? currentColor : bgColor, color, borderRadius }}
      className={`text-${size} w-${width} p-3 hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
    >
      {icon} {text}
    </button>
  );
};

export default Button;
