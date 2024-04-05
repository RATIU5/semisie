import type { Block } from "payload/types";

export const Carousel1: Block = {
  slug: "carousel1",
  fields: [
    {
      type: "text",
      name: "title",
      label: "Title",
      required: true,
    },
    {
      type: "text",
      name: "subtitle",
      label: "Subtitle",
    },
    {
      type: "array",
      name: "slides",
      label: "Slides",
      fields: [
        {
          type: "text",
          name: "heading",
          label: "Heading",
        },
        {
          type: "textarea",
          name: "body",
          label: "Body",
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
        {
          type: "text",
          name: "image",
          label: "Image",
        },
        {
          type: "checkbox",
          admin: {
            position: "sidebar",
          },
          name: "hidden",
          label: "Hidden",
          defaultValue: false,
        },
      ],
    },
  ],
};
