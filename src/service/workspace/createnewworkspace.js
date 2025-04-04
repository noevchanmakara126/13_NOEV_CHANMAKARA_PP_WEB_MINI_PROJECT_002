import headerToken from "@/lib/headerToken";
export const createWorkspaceService = async (workspaceName) => {
  console.log(workspaceName, "workspaceName in service");

  const headers = await headerToken();
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/workspace`,
    {
      method: "POST",
      headers,
      body: JSON.stringify(workspaceName),
    }
  );

  const data = await response.json();
  return data.payload;
};
