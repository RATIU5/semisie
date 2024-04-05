import type { Block } from "payload/types";

export const Hero1: Block = {
  slug: "hero1",
  fields: [
    {
      type: "text",
      name: "title",
      label: "Title",
      required: true,
    },
    {
      type: "textarea",
      name: "content",
      label: "Content",
    },
    {
      type: "text",
      name: "backgroundImage",
      label: "Background Image",
      required: true,
    },
    {
      type: "text",
      name: "cta",
      label: "Button Text",
    },
    {
      type: "text",
      name: "ctaLink",
      label: "Button Link",
    },
  ],
};
