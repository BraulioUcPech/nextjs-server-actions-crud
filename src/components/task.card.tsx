import React from "react";
import clsx from "clsx";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Task } from "@prisma/client";
import TaskButtonDelete from "./task-button-delete";
import { buttonVariants } from "./ui/button";

function Taskcard({ task }: { task: Task }) {
  return (
    <Card>
      <CardHeader className="flex flex-row justify-between">
        <CardTitle> {task.name}</CardTitle>
        <Badge
          className={clsx({
            "bg-green-500": task.priority === "low", // Verde para baja prioridad
            "bg-blue-500": task.priority === "minor", // Azul claro para prioridades menores
            "bg-teal-500": task.priority === "trivial", // Turquesa para lo trivial
            "bg-yellow-500": task.priority === "medium", // Amarillo para prioridad media
            "bg-orange-500": task.priority === "high", // Naranja para alta prioridad
            "bg-red-500": task.priority === "urgent", // Rojo para urgente
            "bg-red-700": task.priority === "critical", // Rojo oscuro para crítico
            "bg-purple-500": task.priority === "blocker", // Púrpura para bloqueadores
            "bg-gray-500": task.priority === "node", // Gris para nodos (si no es una prioridad, ajustar según necesidad)
          })}
        >
          {task.priority}
        </Badge>
      </CardHeader>
      <CardContent>
        <p>{task.description}</p>
        <span className="text-slate-600">
          {new Date(task.createdAt).toLocaleDateString()} -{" "}
        </span>
      </CardContent>
      <CardFooter className="flex gap-x-2 justify-end">
        <TaskButtonDelete taskId={task.id} />
        <Link
          href={`/tasks/${task.id}/edit`}
          className={buttonVariants({ variant: "secondary" })}
        >
          Editar
        </Link>
      </CardFooter>
    </Card>
  );
}

export default Taskcard;
