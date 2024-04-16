import { WidgetConfig, WidgetProps } from "@/lib/cms/types";

export const widgetConfig = {
  greeting: {
    type: "string",
    label: "Greeting",
    value: "Hello",
  },
  showTitle: {
    type: "boolean",
    label: "Show Title",
    value: true,
  },
} satisfies WidgetConfig;

export default function Example(props: WidgetProps<typeof widgetConfig>) {
  return props.showTitle && <h1>{props.greeting} from example</h1>;
}
