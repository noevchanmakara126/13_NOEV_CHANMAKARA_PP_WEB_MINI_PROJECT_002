"use server";
import { createWorkspaceService } from "@/service/workspace/createnewworkspace";

import { revalidateTag } from "next/cache";

export const createTaskAction = async (formData, workspaceId) => {
  console.log(formData, "formData in action");
  console.log(workspaceId, "formData in action");
};
