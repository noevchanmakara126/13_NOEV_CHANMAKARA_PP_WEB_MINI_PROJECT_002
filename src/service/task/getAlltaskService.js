import headerToken from "@/lib/headerToken";
// import { getWorkspaceByIdService } from "../workspace/getworkspaceById";
export const getAllTaskService = async ({ workspaceId }) => {
  console.log(workspaceId);
  const headers = await headerToken();
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/tasks/workspace/${workspaceId}`,
    {
      headers,
    }
  );
  const data = await response.json();
  console.log("this is data", data);
  return data;
};
