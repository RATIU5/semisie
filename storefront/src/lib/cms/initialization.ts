import path from "path";
import * as fs from "fs";
import { Component, Widget } from "./types";

/**
 * Initializes all components in the `build/components` directory
 * @returns A promise that resolves to an array of objects containing the component and widget
 */
export async function initializeComponents(): Promise<
  {
    name: string;
    description: string | undefined;
    component: Component<Widget>;
    widget: Widget[];
  }[]
> {
  const componentsDir = path.join(process.cwd(), "build/components");

  if (fs.existsSync(componentsDir)) {
    const files = fs.readdirSync(componentsDir);

    const components = await Promise.all(
      files
        .filter((file) => file.endsWith(".js"))
        .map(async (file) => {
          try {
            const mod = await import(`../../../build/components/${file}`);
            return {
              name: (mod.name ?? file.split(".")[0]) as string,
              description: mod.description as string | undefined,
              component: mod.default as Component<Widget>,
              widget: mod.widget as Widget[],
            };
          } catch (error) {
            console.error(`Error importing file: ${file}`);
            console.error(error);
            return null;
          }
        })
    );

    // Filter out any null components from the try/catch step
    return components.filter((component) => component !== null) as {
      name: string;
      description: string | undefined;
      component: Component<Widget>;
      widget: Widget[];
    }[];
  } else {
    console.error(
      `error: cannot find "${componentsDir}"; have you run 'pnpm build:components' yet?`
    );
    return [];
  }
}
