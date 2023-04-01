import { lazy, type FC } from "react";

import { pieChartData } from "../../data/dummy";

const Header = lazy(() => import("../../components/Header"));
const PieChart = lazy(() => import("../../components/Charts/Pie"));

const Pie: FC = () => (
  <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <Header category="Chart" title="Project Cost Breakdown" />
    <div className="w-full">
      <PieChart id="chart-pie" data={pieChartData} legendVisiblity height="full" />
    </div>
  </div>
);

export default Pie;
