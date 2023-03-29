"use client";
import { createContext, useContext, useState, type FC } from "react";

import { useTheme } from "next-themes";

import type { ContextProviderProps } from "@/types";

const StateContext = createContext<any>({});

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

const ContextProvider: FC<ContextProviderProps> = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [themeSettings, setThemeSettings] = useState(false);

  const { setTheme } = useTheme();

  const handleClick = (clicked: "chat" | "cart" | "userProfile" | "notification") => setIsClicked({ ...initialState, [clicked]: true });
  const setColor = (color: string) => {
    setCurrentColor(color);

    localStorage.setItem("themeMode", color);
    setThemeSettings(false);
  };
  const setMode = (e: any) => {
    setTheme(e.target.value);

    setThemeSettings(false);
  };

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        currentColor,
        themeSettings,
        setThemeSettings,
        setColor,
        setMode,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);

export default ContextProvider;
