import type { ComponentProps } from "react";
import { useDraggable, useDroppable } from "@dnd-kit/core";

import { cn } from "~/utils/cn";

import styles from "./draggable.module.css";

type DraggableProps = ComponentProps<"div"> & {
  id: string;
};

export const Draggable = ({ id, className, ...props }: DraggableProps) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <div
      className={cn(styles.draggable, className)}
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      {...props}
    />
  );
};

type DroppableProps = ComponentProps<"div"> & {
  id: string;
};

export const Droppable = ({ id, ...props }: DroppableProps) => {
  const { isOver, setNodeRef } = useDroppable({ id });

  return (
    <div
      data-over={isOver}
      ref={setNodeRef}
      {...props}
    />
  );
};
