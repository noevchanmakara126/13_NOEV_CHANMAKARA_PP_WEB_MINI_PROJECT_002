import headerToken from "@/lib/headerToken";

export const updateWorkspaceByIdService = async ({
  workspaceId,
  workspaceName,
}) => {
  try {
    console.log(workspaceId, "workspaceId in service");
    console.log(workspaceName, "workspaceName in service");

    const headers = await headerToken();
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/workspace/${workspaceId}`,
      {
        method: "PUT",
        headers,
        body: JSON.stringify({ workspaceName }),
      }
    );

    const data = await response.json();
    console.log(data, "data in service");
    return data.payload;
  } catch (error) {
    console.log(error);
  }
};
