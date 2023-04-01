import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";
import { lazy, type FC } from "react";

const Header = lazy(() => import("../components/Header"));

const change = (args: { currentValue: { hex: string } }) => {
  const previewElement = document.getElementById("preview");

  if (previewElement) previewElement.style.backgroundColor = args.currentValue.hex;
};

const ColorPicker: FC = () => (
  <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
    <Header category="App" title="Color Picker" />
    <div className="text-center">
      <div id="preview" />
      <article className="flex justify-center items-center gap-20 flex-wrap">
        <section>
          <p className="text-2xl font-semibold mt-2 mb-4">Inline Pallete</p>
          <ColorPickerComponent id="inline-pallete" mode="Palette" modeSwitcher={false} inline showButtons={false} change={change} />
        </section>
        <section>
          <p className="text-2xl font-semibold mt-2 mb-4">Inline Picker</p>
          <ColorPickerComponent id="inline-pallete" mode="Picker" modeSwitcher={false} inline showButtons={false} change={change} />
        </section>
      </article>
    </div>
  </div>
);

export default ColorPicker;
