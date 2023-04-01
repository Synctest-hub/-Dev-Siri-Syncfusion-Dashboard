import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Suspense, lazy, useEffect, type FC } from "react";
import { Route, Routes } from "react-router-dom";

const Navbar = lazy(() => import("./components/Navbar"));
const Footer = lazy(() => import("./components/Footer"));
const Sidebar = lazy(() => import("./components/Sidebar"));
const ThemeSettings = lazy(() => import("./components/ThemeSettings"));

const ColorPicker = lazy(() => import("./pages/ColorPicker"));
const Ecommerce = lazy(() => import("./pages/Ecommerce"));
const Employees = lazy(() => import("./pages/Employees"));
const Customers = lazy(() => import("./pages/Customers"));
const Calendar = lazy(() => import("./pages/Calendar"));
const Orders = lazy(() => import("./pages/Orders"));
const Kanban = lazy(() => import("./pages/Kanban"));
const Editor = lazy(() => import("./pages/Editor"));

const ColorMapping = lazy(() => import("./pages/Charts/ColorMapping"));
const Financial = lazy(() => import("./pages/Charts/Financial"));
const Pyramid = lazy(() => import("./pages/Charts/Pyramid"));
const Stacked = lazy(() => import("./pages/Charts/Stacked"));
const Line = lazy(() => import("./pages/Charts/Line"));
const Area = lazy(() => import("./pages/Charts/Area"));
const Bar = lazy(() => import("./pages/Charts/Bar"));
const Pie = lazy(() => import("./pages/Charts/Pie"));

const FiSettings = lazy(() => import("./icons/FiSettings"));

import useStateContext from "./context/Context";

const App: FC = () => {
  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");

    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  return (
    <article className={`flex relative dark:bg-main-dark-bg ${currentMode.toLowerCase()}`}>
      <section className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
        <TooltipComponent content="Settings" position="BottomRight">
          <button
            type="button"
            onClick={() => setThemeSettings(true)}
            style={{ background: currentColor, borderRadius: "50%" }}
            className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
          >
            <FiSettings />
          </button>
        </TooltipComponent>
      </section>
      <Sidebar />
      <section
        className={
          activeMenu
            ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
            : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
        }
      >
        <Navbar />
        <main>
          <Suspense fallback={<div aria-busy />}>{themeSettings && <ThemeSettings />}</Suspense>

          <Suspense fallback={<div aria-busy />}>
            <Routes>
              {/* dashboard  */}
              <Route path="/" element={<Ecommerce />} />
              <Route path="/ecommerce" element={<Ecommerce />} />

              {/* pages  */}
              <Route path="/orders" element={<Orders />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/customers" element={<Customers />} />

              {/* apps  */}
              <Route path="/kanban" element={<Kanban />} />
              <Route path="/editor" element={<Editor />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/color-picker" element={<ColorPicker />} />

              {/* charts  */}
              <Route path="/line" element={<Line />} />
              <Route path="/area" element={<Area />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/financial" element={<Financial />} />
              <Route path="/color-mapping" element={<ColorMapping />} />
              <Route path="/pyramid" element={<Pyramid />} />
              <Route path="/stacked" element={<Stacked />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </section>
    </article>
  );
};

export default App;
