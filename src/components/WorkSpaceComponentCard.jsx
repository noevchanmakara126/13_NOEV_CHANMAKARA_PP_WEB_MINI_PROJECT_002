import React from "react";
import Link from "next/link";
import WorkspaceForm from "./workspace-form";

export default function WorkSpaceComponentCard({ workspaces }) {
  return (
    <div>
      <div className="flex justify-between w-[15rem]">
        <h1>Workspace</h1>
        <WorkspaceForm workspaceId="" />
      </div>
      <div className="w-full justify-between flex ">
        <div className="flex flex-col items-center space-x-2 w-full mt-10 gap-5">
          {workspaces.map((item) => (
            <Link
              href={`/todo/${item.workspaceId}`}
              key={item.workspaceId}
              className="flex justify-between w-full"
            >
              <h1>{item.workspaceName}</h1>
              <div>
                <WorkspaceForm workspace={item} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
