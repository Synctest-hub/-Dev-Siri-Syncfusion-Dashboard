import { lazy, type FC } from "react";

const Header = lazy(() => import("../../components/Header"));
const LineChart = lazy(() => import("../../components/Charts/LineChart"));

const Line: FC = () => (
  <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <Header category="Chart" title="Inflation Rate" />
    <div className="w-full">
      <LineChart />
    </div>
  </div>
);

export default Line;
