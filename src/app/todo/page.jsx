import React from "react";
import { getWorkspaces } from "@/service/workspace/workSpaceService";
import CardComponent from "@/components/CardComponent";
import { getAllTaskService } from "@/service/task/getAlltaskService";

export default async function Todo() {
  // const workspace = await getWorkspaces();
  // console.log("Workspace", workspace);

  return (
    <div className="w-full m-auto ">
      <h1>todo</h1>
    </div>
  );
}
