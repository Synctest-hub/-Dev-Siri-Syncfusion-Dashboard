"use client";
import { ColumnDirective, ColumnsDirective, Edit, Filter, GridComponent, Inject, Page, Selection, Sort, Toolbar } from "@syncfusion/ej2-react-grids";
import { lazy, type FC } from "react";

import { customersData, customersGrid } from "../data/dummy";

const Header = lazy(() => import("../components/Header"));

const Customers: FC = () => (
  <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
    <Header title="Customers" category="Page" />
    <GridComponent
      dataSource={customersData}
      allowPaging
      allowSorting
      toolbar={["Delete"]}
      editSettings={{ allowDeleting: true, allowEditing: true }}
      width="auto"
    >
      <ColumnsDirective>
        {customersGrid.map((item, index) => (
          <ColumnDirective key={index} {...item} />
        ))}
      </ColumnsDirective>
      <Inject services={[Page, Toolbar, Selection, Edit, Sort, Filter]} />
    </GridComponent>
  </div>
);

export default Customers;
