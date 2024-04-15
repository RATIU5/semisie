import { Widget, WidgetProps } from "@/lib/cms/types";

const Example: React.FC<WidgetProps<typeof widget>> = (props) => {
  return <h1>{props.greeting} from example</h1>;
};
export const widget: Widget[] = [
  {
    type: "text",
    name: "greeting",
    label: "Greeting",
    defaultValue: "Hello",
  },
  {
    type: "boolean",
    name: "showTitle",
    label: "Show Title",
    defaultValue: true,
  },
  {
    type: "array",
    name: "items",
    fields: [
      {
        type: "text",
        name: "link",
        label: "Link",
        defaultValue: "Item 1",
      },
    ],
    defaultCount: 2,
  },
];

export default Example;
