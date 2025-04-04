import { createTaskAction } from "@/action/task/createTaskAction";
import CardComponent from "@/components/CardComponent";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { getAllTaskService } from "@/service/task/getAlltaskService";
const TodoPage = async ({ params }) => {
  const { todoId } = await params;
  console.log("TODOID", todoId);
  const task = await getAllTaskService({ workspaceId: todoId });
  console.log("this is task", task);

  return (
    <div>
      <h1>All task</h1>
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <form
              action={async () => {
                "use server";
                await createTaskAction(formData, todoId);
              }}
            >
              <Label>Title</Label>
              <Input name="title" />
              <Label>Detail</Label>
              <Input name="detail" />
              <Label>Tag</Label>
              <Input name="tag" />
              <Label>End Date</Label>
              <Input name="endDate" />
              <Button>Submit</Button>
            </form>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      {task?.payload?.map((item) => {
        return (
          <CardComponent key={item.taskId} task={item} />
          // <div key={item.taskId}>
          //   <h1>{item?.taskTitle}</h1>
          //   <h1>{item?.taskDetails}</h1>
          //   <h1>{item?.tag}</h1>
          //   <h1>{item?.status}</h1>
          //   <p>{item?.startDate}</p>
          //   <p>{item?.endDate}</p>
          //   <TaskComponent task={item} />
          // </div>
        );
      })}
    </div>
  );
};

export default TodoPage;
