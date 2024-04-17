"use client";

import { DndContext, DragEndEvent } from "@dnd-kit/core";
import React from "react";

export default function Context(
  props: Readonly<{
    children: React.JSX.Element | React.JSX.Element[];
  }>
) {
  return <DndContext>{props.children}</DndContext>;
}
