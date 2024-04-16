import React from "react";

export type WidgetType =
  | "boolean"
  | "code"
  | "date"
  | "number"
  | "select"
  | "string"
  | "text";

interface BaseWidget<T> {
  type: WidgetType;
  label?: string;
  description?: string;
  required?: boolean;
  value: T;
}

export interface BooleanWidget<T> extends BaseWidget<T> {
  type: "boolean";
}

export interface CodeWidget<T> extends BaseWidget<T> {
  type: "code";
  language: string;
}

export interface DateWidget<T> extends BaseWidget<T> {
  type: "date";
}

export interface NumberWidget<T> extends BaseWidget<T> {
  type: "number";
  min?: number;
  max?: number;
}

export interface SelectWidget<T> extends BaseWidget<T> {
  type: "select";
  options: { value: string; label: string }[];
}

export interface TextWidget<T> extends BaseWidget<T> {
  type: "string" | "text";
  minLength?: number;
  maxLength?: number;
}

export type Widget =
  | BooleanWidget<boolean>
  | CodeWidget<string>
  | DateWidget<string>
  | NumberWidget<number>
  | SelectWidget<string>
  | TextWidget<string>;

export type WidgetConfig = Record<string, Widget>;

// Prevent Widget props from inferring as specific true/false values
type WidenBoolean<T> = T extends boolean ? boolean : T;

export type WidgetProps<T extends WidgetConfig> = {
  [K in keyof T]: WidenBoolean<T[K]["value"]>;
};

export type Component<T extends WidgetConfig> = (
  props: WidgetProps<T>
) => React.JSX.Element;
