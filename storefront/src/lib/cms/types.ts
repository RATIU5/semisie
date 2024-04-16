import React from "react";

type WidgetType =
  | "text"
  | "boolean"
  | "number"
  | "select"
  | "array"
  | "date"
  | "radio"
  | "checkbox"
  | "textarea";

interface WidgetBase {
  type: WidgetType;
  name: string;
  label?: string;
  required?: boolean;
}

interface TextWidget extends WidgetBase {
  type: "text";
  defaultValue?: string;
  placeholder?: string;
}

interface BooleanWidget extends WidgetBase {
  type: "boolean";
  defaultValue?: boolean;
}

interface NumberWidget extends WidgetBase {
  type: "number";
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
}

interface SelectWidget extends WidgetBase {
  type: "select";
  options: string[];
  defaultValue?: string;
}

interface ArrayWidget extends WidgetBase {
  type: "array";
  items: WidgetList[];
  defaultValue?: WidgetValueType<WidgetList>[];
}

interface DateWidget extends WidgetBase {
  type: "date";
  defaultValue?: string;
}

interface RadioWidget extends WidgetBase {
  type: "radio";
  options: string[];
  defaultValue?: string;
}

interface CheckboxWidget extends WidgetBase {
  type: "checkbox";
  options: string[];
  defaultValue?: string[];
}

interface TextareaWidget extends WidgetBase {
  type: "textarea";
  defaultValue?: string;
  placeholder?: string;
  rows?: number;
}

type WidgetValueType<T extends WidgetList> = T extends TextWidget
  ? string
  : T extends BooleanWidget
  ? boolean
  : T extends NumberWidget
  ? number
  : T extends SelectWidget
  ? string
  : T extends ArrayWidget
  ? Array<WidgetValueType<T["items"][number]>>
  : T extends DateWidget
  ? string
  : T extends RadioWidget
  ? string
  : T extends CheckboxWidget
  ? string
  : T extends TextareaWidget
  ? string
  : never;

type WidgetList =
  | TextWidget
  | BooleanWidget
  | NumberWidget
  | SelectWidget
  | ArrayWidget
  | DateWidget
  | RadioWidget
  | CheckboxWidget
  | TextareaWidget;

export type Widget = {
  [key: string]: WidgetList;
};

export type WidgetProps<T extends Widget> = {
  [K in keyof T]: WidgetValueType<T[K]>;
};

export type Component<T extends Widget> = (
  props: WidgetProps<T>
) => React.JSX.Element;
