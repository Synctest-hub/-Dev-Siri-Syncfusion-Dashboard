"use client";
import lazy from "next/dynamic";
import { useEffect, type FC } from "react";

import type { NavButtonProps } from "@/types";

import { useStateContext } from "@/context/ContextProvider";
import avatar from "@/data/avatar.jpg";

import { AiOutlineMenu } from "@react-icons/all-files/ai/AiOutlineMenu";
import { FiShoppingCart } from "@react-icons/all-files/fi/FiShoppingCart";
import { BsChat } from "@react-icons/all-files/bs/BsChat";
import { RiNotification3Line } from "@react-icons/all-files/ri/RiNotification3Line";
import { MdKeyboardArrowDown } from "@react-icons/all-files/md/MdKeyboardArrowDown";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import Cart from "@/components/Cart";
import Chat from "@/components/Chat";
import Notification from "@/components/Notification";
import UserProfile from "@/components/UserProfile";
const Image = lazy(() => import("next/image"));

const NavButton: FC<NavButtonProps> = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button type="button" onClick={customFunc} style={{ color }} className="relative text-xl rounded-full p-3 hover:bg-light-gray">
      <span style={{ background: dotColor }} className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2" />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const { setActiveMenu, isClicked, handleClick, setScreenSize, currentColor }: any = useStateContext();

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [setScreenSize]);

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton
        title="Menu"
        customFunc={() => {
          setActiveMenu((prevActiveMenu: boolean) => !prevActiveMenu);
        }}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />

      <div className="flex">
        <NavButton title="Cart" customFunc={() => handleClick("cart")} color={currentColor} icon={<FiShoppingCart />} />
        <NavButton title="Chat" dotColor="#03C9D7" customFunc={() => handleClick("chat")} color={currentColor} icon={<BsChat />} />
        <NavButton
          title="Notifications"
          dotColor="#03C9D7"
          customFunc={() => handleClick("notification")}
          color={currentColor}
          icon={<RiNotification3Line />}
        />
        <TooltipComponent container="Profile" position="BottomCenter">
          <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg" onClick={() => handleClick("profile")}>
            <Image src={avatar} alt="Profile" height={32} width={32} className="rounded-full" />
            <p>
              <span className="text-gray-400 text-14">Hi, </span> <span className="text-gray-400 font-bold text-14 ml-1">Micheal</span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>

        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default Navbar;
