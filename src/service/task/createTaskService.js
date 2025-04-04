import headerToken from "@/lib/headerToken";
export const createTaskService = async ({ workspaceId, body }) => {
  const headers = await headerToken();
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/task/workspace${workspaceId}`,
    {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    }
  );

  const data = await response.json();
  return data.payload;
};
