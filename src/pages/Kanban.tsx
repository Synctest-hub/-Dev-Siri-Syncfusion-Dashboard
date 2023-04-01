import { ColumnDirective, ColumnsDirective, KanbanComponent } from "@syncfusion/ej2-react-kanban";
import { lazy, type FC } from "react";

import { kanbanData, kanbanGrid } from "../data/dummy";

const Header = lazy(() => import("../components/Header"));

const Kanban: FC = () => (
  <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
    <Header category="App" title="Kanban" />
    <KanbanComponent id="kanban" dataSource={kanbanData as any} cardSettings={{ contentField: "Summary", headerField: "Id" }} keyField="Status">
      <ColumnsDirective>
        {kanbanGrid.map((item, index) => (
          <ColumnDirective key={index} {...item} />
        ))}
      </ColumnsDirective>
    </KanbanComponent>
  </div>
);

export default Kanban;
