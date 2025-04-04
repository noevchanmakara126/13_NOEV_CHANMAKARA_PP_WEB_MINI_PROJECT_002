"use server";

import { updateFavoriteStatusByIdService } from "@/service/workspace/updatefavworkspaceService";
import { updateWorkspaceByIdService } from "@/service/workspace/updateworkspaceservice";
import { revalidateTag } from "next/cache";

export const updateWorkspaceByIdAction = async ({
  workspaceId,
  workspaceName,
}) => {
  console.log(workspaceId, "workspaceId in action");
  console.log(workspaceName, "workspaceName in action");
  const data = await updateWorkspaceByIdService({
    workspaceId,
    workspaceName,
  });
  revalidateTag("workspaces");
  // return data;
};
