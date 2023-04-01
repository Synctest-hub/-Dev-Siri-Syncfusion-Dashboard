import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Suspense, lazy, useEffect } from "react";

import useStateContext from "../context/Context";
import avatar from "../data/avatar.jpg";

const AiOutlineMenu = lazy(() => import("../icons/AiOutlineMenu"));
const BsChat = lazy(() => import("../icons/BsChat"));
const FiShoppingCart = lazy(() => import("../icons/FiShoppingCart"));
const MdKeyboardArrowDown = lazy(() => import("../icons/MdKeyboardArrowDown"));
const RiNotification3Line = lazy(() => import("../icons/RiNotification3Line"));

const Notification = lazy(() => import("./Notification"));
const UserProfile = lazy(() => import("./UserProfile"));
const NavButton = lazy(() => import("./NavButton"));
const Cart = lazy(() => import("./Cart"));
const Chat = lazy(() => import("./Chat"));

const Navbar = () => {
  const { currentColor, activeMenu, setActiveMenu, handleClick, isClicked, setScreenSize, screenSize } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setActiveMenu(screenSize >= 900);
  }, [screenSize]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  return (
    <article className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
      <nav className="flex justify-between p-2 md:ml-6 md:mr-6 relative">
        <NavButton title="Menu" customFunc={handleActiveMenu} color={currentColor} icon={<AiOutlineMenu />} />
        <div className="flex">
          <NavButton title="Cart" customFunc={() => handleClick("cart")} color={currentColor} icon={<FiShoppingCart />} />
          <NavButton title="Chat" dotColor="#03C9D7" customFunc={() => handleClick("chat")} color={currentColor} icon={<BsChat />} />
          <NavButton
            title="Notification"
            dotColor="rgb(254, 201, 15)"
            customFunc={() => handleClick("notification")}
            color={currentColor}
            icon={<RiNotification3Line />}
          />
          <Suspense fallback={<p>Loading</p>}>
            <TooltipComponent content="Profile" position="BottomCenter">
              <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg" onClick={() => handleClick("userProfile")}>
                <img className="rounded-full w-8 h-8" src={avatar} alt="user-profile" />
                <p>
                  <span className="text-gray-400 text-14">Hi,</span> <span className="text-gray-400 font-bold ml-1 text-14">Michael</span>
                </p>
                <MdKeyboardArrowDown className="text-gray-400 text-14" />
              </div>
            </TooltipComponent>
            {isClicked.cart && <Cart />}
            {isClicked.chat && <Chat />}
            {isClicked.notification && <Notification />}
            {isClicked.userProfile && <UserProfile />}
          </Suspense>
        </div>
      </nav>
    </article>
  );
};

export default Navbar;
