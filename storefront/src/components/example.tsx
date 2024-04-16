import React from "react";
import type { WidgetProps, Widget } from "@/lib/cms/types";

export const name = "Example";
export const description = "An example component";

export const widget = {
  name: { type: "text", name: "fullName", defaultValue: "John Doe" },
  age: { type: "number", name: "age", defaultValue: 25 },
  isStudent: { type: "boolean", name: "student", defaultValue: true },
  gender: {
    type: "select",
    name: "gender",
    options: ["Male", "Female", "Other"],
  },
  hobbies: {
    type: "array",
    name: "hobbies",
    items: [
      { type: "text", name: "hobby1" },
      { type: "text", name: "hobby2" },
    ],
    defaultValue: ["Reading", "Sports"],
  },
  skills: {
    type: "array",
    name: "skills",
    items: [
      { type: "text", name: "skill1" },
      { type: "number", name: "experienceYears" },
    ],
    defaultValue: ["JavaScript", 5],
  },
} satisfies Widget;

export default function Example(props: WidgetProps<typeof widget>) {
  return (
    props.isStudent && <h1 className="text-2xl">{props.name} from example</h1>
  );
}
