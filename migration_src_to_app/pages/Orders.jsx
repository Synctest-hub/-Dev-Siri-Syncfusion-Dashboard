import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Sort,
  Resize,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  Edit,
  PdfExport,
  Inject,
} from "@syncfusion/ej2-react-grids";

import { Header } from "../components";
import { ordersData, ordersGrid } from "../data/dummy";

const Orders = () => (
  <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
    <Header title="Orders" category="Page" />
    <GridComponent id="gridcomp" dataSource={ordersData} allowPaging allowSorting>
      <ColumnsDirective>
        {ordersGrid.map((item, index) => (
          <ColumnDirective key={index} {...item} />
        ))}
      </ColumnsDirective>
      <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
    </GridComponent>
  </div>
);

export default Orders;
