import WorkSpaceComponentCard from "./WorkSpaceComponentCard";
import { getWorkspaces } from "@/service/workspace/workSpaceService";
import { getAllTaskService } from "@/service/task/getAlltaskService";

export async function AppSidebar() {
  const workspaces = await getWorkspaces();

  return (
    <div className="flex flex-col w-[350px] items-center justify-center space-x-2 bg-amber-300">
      <div className="flex flex-col items-center space-x-2">
        {/* <h1>{item?.workspaceName}</h1> */}
        {/* <p>{item?.isFavorite}</p> */}
      </div>
      <div className="flex flex-col items-center space-x-2">
        {/* <h1>this is sidebar</h1> */}
        {/* <p>this is sidebar</p> */}
      </div>
      <div className="flex flex-col  items-center space-x-2">
        <h1>All Work Space</h1>
        <WorkSpaceComponentCard workspaces={workspaces?.payload} />
      </div>
      <div className="flex flex-col items-center space-x-2">
        {/* <h1>{task?.payload}</h1> */}
      </div>
    </div>
  );
}
