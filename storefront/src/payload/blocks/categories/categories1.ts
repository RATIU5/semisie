import type { Block } from "payload/types";

export const CTA1: Block = {
  slug: "cta1",
  fields: [
    {
      type: "text",
      name: "heading",
      label: "Heading",
      required: true,
    },
    {
      type: "text",
      name: "paragraph",
      label: "Paragraph",
    },
    {
      type: "row",
      fields: [
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
    },
  ],
};
