import path from "path";
import * as fs from "fs";
import { Widget } from "./types";

/**
 * Initializes all components in the `build/components` directory
 * @returns A promise that resolves to an array of objects containing the component and widget
 */
export async function initializeWidgets(): Promise<
  {
    name: string;
    description: string | undefined;
    widget: Widget[];
  }[]
> {
  "use server";
  const widgetsDir = path.join(process.cwd(), "src/widgets");

  if (fs.existsSync(widgetsDir)) {
    const files = fs.readdirSync(widgetsDir);

    const widgets = await Promise.all(
      files
        .filter((file) => file.endsWith(".tsx"))
        .map(async (file) => {
          try {
            const mod = await import(`../../../src/widgets/${file}`);
            return {
              name: (mod.name ?? file.split(".")[0]) as string,
              description: mod.description as string | undefined,
              widget: mod.widget as Widget[],
            };
          } catch (error) {
            console.error(`Error importing file: ${file}`);
            console.error(error);
            return null;
          }
        })
    );

    // Filter out any null widgets from the try/catch step
    return widgets.filter((widget) => widget !== null) as {
      name: string;
      description: string | undefined;
      widget: Widget[];
    }[];
  } else {
    console.error(
      `error: cannot find "${widgetsDir}"; create the following directory structure if it doesn't exist: "src/widgets"?`
    );
    return [];
  }
}
