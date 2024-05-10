import prisma from "@/lib/prisma";
import Taskcard from "@/components/task.card";

async function HomepageTitle() {
  const task = await prisma.task.findMany();
  console.log(task);
  return (
    <div className="grid grid-cols-3 gap-4">
      {task.map((task) => (
        <Taskcard task={task} key={task.id} />
      ))}
    </div>
  );
}
export default HomepageTitle;
