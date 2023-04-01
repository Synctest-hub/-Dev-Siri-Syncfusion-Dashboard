import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from "@syncfusion/ej2-react-richtexteditor";
import { lazy, type FC } from "react";

import { EditorData } from "../data/dummy";

const Header = lazy(() => import("../components/Header"));

const Editor: FC = () => (
  <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
    <Header category="App" title="Editor" />
    <RichTextEditorComponent>
      <EditorData />
      <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
    </RichTextEditorComponent>
  </div>
);

export default Editor;
