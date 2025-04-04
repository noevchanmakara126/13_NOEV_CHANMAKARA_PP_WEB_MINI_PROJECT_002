"use server";
import { getWorkspaceByIdService } from "@/service/workspace/getWorkspaceByIdService";
import { revalidateTag } from "next/cache";

export const getWorkspaceByIdAction = async ({ workspaceId }) => {
  const data = await getWorkspaceByIdService({ workspaceId });
  console.log("this is workspace", data);
  return data;
};
