import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import Example from "./components/example";
import { Menu, MenuItem } from "./components/menu";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "a7ojowDFtGCzATsP5DjE5L",
      token:
        "D3FxsMcsiKICibcUJ3mOsjQL66ouAmonl8W20aKpKfyPUKORPycU9ECl6ZAnwT63a8Qfse3deu2FoVOul6rg",
    },
  ],

  // By default Plasmic will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: process.env.NODE_ENV !== "production",
});

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

// PLASMIC.registerComponent(...);
PLASMIC.registerComponent(Example, {
  name: "Example",
  props: {
    title: "string",
  },
});

PLASMIC.registerComponent(MenuItem, {
  name: "MenuItem",
  props: {
    key: "string",
    children: "string",
    href: "string",
    disabled: "boolean",
  },
});

PLASMIC.registerComponent(Menu, {
  name: "Menu",
  props: {
    children: {
      type: "slot",
      allowedComponents: ["MenuItem"],
      defaultValue: [
        {
          type: "component",
          name: "MenuItem",
          props: {
            key: "Item1",
            href: "/",
            disabled: false,
            children: "Home",
          },
        },
        {
          type: "component",
          name: "MenuItem",
          props: {
            key: "Item2",
            href: "/about",
            disabled: false,
            children: "About",
          },
        },
      ],
    },
  },
});
