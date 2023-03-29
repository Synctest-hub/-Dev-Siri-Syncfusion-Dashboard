import "@/styles/globals.css";
import lazy from "next/dynamic";
import { Open_Sans } from "next/font/google";

import type { LayoutComponent } from "@/types";
import type { Metadata } from "next";

import { FiSettings } from "@react-icons/all-files/fi/FiSettings";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { useStateContext } from "@/context/ContextProvider";
import Sidebar from "@/components/Sidebar";

const ContextProvider = lazy(() => import("@/context/ContextProvider"));
const ThemeProvider = lazy(() => import("@/components/ThemeProvider"));
const ThemeSettings = lazy(() => import("@/components/ThemeSettings"));
const Navbar = lazy(() => import("@/components/Navbar"));

const openSans = Open_Sans({
  display: "swap",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Shoppy Dashboard",
  description: "Dashboard to monitor sales for shoppy.com",
  icons: {
    shortcut: "/favicon.ico",
  },
};

const RootLayout: LayoutComponent = ({ children }) => {
  const { activeMenu, themeSettings, setThemeSettings, currentColor } = useStateContext();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={openSans.className}>
        <ThemeProvider attribute="class">
          <ContextProvider>
            <div className="flex relative dark:bg-main-dark-bg">
              <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
                <TooltipComponent content="Settings" /* position="" */>
                  <button
                    type="button"
                    className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                    style={{ backgroundColor: currentColor, borderRadius: "50%" }}
                    onClick={() => setThemeSettings(true)}
                  >
                    <FiSettings />
                  </button>
                </TooltipComponent>
              </div>
              {activeMenu ? (
                <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
                  <Sidebar />
                </div>
              ) : (
                <div className="w-0 dark:bg-secondary-dark-bg">
                  <Sidebar />
                </div>
              )}
              <div className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${activeMenu ? "md:ml-72" : "flex-2"}`}>
                <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
                  <Navbar />
                </div>
                <div>{themeSettings && <ThemeSettings />}</div>
                {children}
              </div>
            </div>
          </ContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
