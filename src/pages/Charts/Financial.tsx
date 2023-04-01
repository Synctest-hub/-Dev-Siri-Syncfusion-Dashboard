import {
  ChartComponent,
  Crosshair,
  DateTime,
  HiloSeries,
  Inject,
  Logarithmic,
  SeriesCollectionDirective,
  SeriesDirective,
  Tooltip,
  Zoom,
} from "@syncfusion/ej2-react-charts";
import { lazy, type FC } from "react";

import useStateContext from "../../context/Context";
import { financialChartData, FinancialPrimaryXAxis, FinancialPrimaryYAxis } from "../../data/dummy";

const Header = lazy(() => import("../../components/Header"));

const date1 = new Date("2017, 1, 1");

const filterValue = (value: any) => {
  if (value.x >= date1) return value.x, value.high, value.low;
};

const returnValue = financialChartData.filter(filterValue);

const Financial: FC = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Chart" title="APPLE Historical" />
      <div className="w-full">
        <ChartComponent
          id="charts"
          primaryXAxis={FinancialPrimaryXAxis}
          primaryYAxis={FinancialPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true, shared: true }}
          crosshair={{ enable: true, lineType: "Vertical", line: { width: 0 } }}
          background={currentMode === "Dark" ? "#33373E" : "#fff"}
        >
          <Inject services={[HiloSeries, Tooltip, DateTime, Logarithmic, Crosshair, Zoom]} />
          <SeriesCollectionDirective>
            <SeriesDirective dataSource={returnValue} xName="x" yName="low" name="Apple Inc" type="Hilo" low="low" high="high" />
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Financial;
