import { componentsList } from "./component-list";
import { Component, Widget, WidgetProps } from "./types";

export function registerComponent<T extends Widget[]>(
  component: Component<WidgetProps<T>>,
  widget: T,
  name: string
): void {
  componentsList.push({
    name,
    widget,
    component: component as Component<WidgetProps<Widget[]>>,
  });
}
