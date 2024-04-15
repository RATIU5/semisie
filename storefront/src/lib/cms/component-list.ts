import { Component, Widget, WidgetProps } from "./types";

export const componentsList = [] as {
  name: string;
  widget: Widget[];
  component: Component<WidgetProps<Widget[]>>;
}[];
