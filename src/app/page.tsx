"use client";
import { DndContext, type DragEndEvent } from "@dnd-kit/core";
import { useState } from "react";
import { Column } from "~/components/Column";
import { Columns } from "~/components/Columns";
import { InitialTasks } from "~/components/InitialTasks";
import { type initialState as Task, type initialState } from "~/types";
export default function HomePage() {
  const [tasks, setTasks] = useState<initialState[]>(InitialTasks);

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (!over) return;

    const taskId = active.id as string;
    const newStatus = over.id as Task["status"];

    setTasks(() =>
      tasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              status: newStatus,
            }
          : task,
      ),
    );
  }

  return (
    <div className="flex h-screen justify-center bg-black p-4">
      <div className="flex gap-8">
        <DndContext onDragEnd={handleDragEnd}>
          {Columns.map((column) => {
            return (
              <Column
                key={column.id}
                column={column}
                tasks={tasks.filter((task) => task.status === column.id)}
              />
            );
          })}
        </DndContext>
      </div>
    </div>
  );
}
