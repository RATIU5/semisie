import path from "path";
import * as fs from "fs";
import { Component, Widget, WidgetConfig } from "./types";

export async function initializeComponents() {
  const componentsDir = path.join(process.cwd(), "src", "components");
  const filenames = fs.readdirSync(componentsDir);
  const components = await Promise.all(
    filenames
      .filter((file) => file.endsWith(".tsx"))
      .map(async (file) => {
        const filePath = path.join(componentsDir, file);
        const mod = await import(filePath);
        return {
          component: mod.default as Component<WidgetConfig>,
          widget: mod.widget as Widget[],
        };
      })
  );
  return components;
}
