export type WidgetType =
  | "array"
  | "boolean"
  | "code"
  | "date"
  | "number"
  | "select"
  | "string"
  | "text"
  | "upload";

interface BaseWidget {
  name: string;
  label?: string;
  description?: string;
  required?: boolean;
}

interface ArrayWidget extends BaseWidget {
  type: "array";
  fields: (
    | BooleanWidget
    | CodeWidget
    | DateWidget
    | NumberWidget
    | SelectWidget
    | TextWidget
    | UploadWidget
  )[];
  defaultCount: number;
}

interface BooleanWidget extends BaseWidget {
  type: "boolean";
  defaultValue: boolean;
}

interface CodeWidget extends BaseWidget {
  type: "code";
  defaultValue?: string;
  language: string;
}

interface DateWidget extends BaseWidget {
  type: "date";
  defaultValue?: string;
}

interface NumberWidget extends BaseWidget {
  type: "number";
  defaultValue?: number;
  min?: number;
  max?: number;
}

interface SelectWidget extends BaseWidget {
  type: "select";
  options: { value: string; label: string }[];
  defaultValue?: string;
}

interface TextWidget extends BaseWidget {
  type: "text" | "string";
  defaultValue?: string;
  minLength?: number;
  maxLength?: number;
}

interface UploadWidget extends BaseWidget {
  type: "upload";
}

export type Widget =
  | ArrayWidget
  | BooleanWidget
  | CodeWidget
  | DateWidget
  | NumberWidget
  | SelectWidget
  | TextWidget
  | UploadWidget;

export type WidgetProps<T extends Widget[]> = {
  [K in T[number] as K["name"]]: K extends ArrayWidget
    ? Array<{ [P in K["fields"][number] as P["name"]]: WidgetValueType<P> }>
    : K extends { defaultValue: infer V }
    ? V
    : never;
};

// Utility type to infer the value type based on the widget type
export type WidgetValueType<T extends Widget> = T extends { type: "array" }
  ? Array<{ [P in T["fields"][number] as P["name"]]: WidgetValueType<P> }>
  : T extends { type: "boolean"; defaultValue: infer V }
  ? V
  : T extends {
      type: "code" | "date" | "select" | "text" | "string";
      defaultValue: infer V;
    }
  ? V
  : T extends { type: "number"; defaultValue: infer V }
  ? V
  : never;
