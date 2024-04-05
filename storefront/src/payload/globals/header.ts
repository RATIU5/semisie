import { GlobalConfig } from "payload/types";
import { anyone } from "../access";

const Header: GlobalConfig = {
  access: {
    read: anyone,
  },
  fields: [
    {
      name: "navItems",
      type: "array",
      fields: [
        {
          type: "group",
          name: "link",
          admin: {
            hideGutter: true,
          },
          fields: [
            {
              type: "row",
              fields: [
                {
                  name: "type",
                  type: "radio",
                  options: [
                    {
                      label: "Page Link",
                      value: "int",
                    },
                    {
                      label: "Custom Link",
                      value: "cus",
                    },
                  ],
                  defaultValue: "cus",
                },
              ],
            },
          ],
        },
      ],
      maxRows: 6,
    },
  ],
  slug: "header",
};

export default Header;
