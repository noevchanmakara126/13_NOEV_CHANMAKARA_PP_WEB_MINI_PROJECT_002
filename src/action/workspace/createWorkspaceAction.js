"use server";
import { createWorkspaceService } from "@/service/workspace/createnewworkspace";

import { revalidateTag } from "next/cache";

export const createWorkspaceAction = async ({ workspaceName }) => {
  console.log(workspaceName, "workspaceName in action");

  const data = await createWorkspaceService(workspaceName);
  revalidateTag("workspaces");
  return data;
};
