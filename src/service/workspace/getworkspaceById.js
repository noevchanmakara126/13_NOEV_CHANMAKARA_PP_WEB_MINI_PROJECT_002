import { auth } from "@/auth";
import headerToken from "@/lib/headerToken";
const { NEXT_PUBLIC_AUTH_BASE_URL } = process.env;

export const getWorkspaceByIdService = async ({ workspaceId }) => {
  const headers = await headerToken();
  const response = await fetch(
    `${NEXT_PUBLIC_AUTH_BASE_URL}/workspace/${workspaceId}`,
    {
      headers,
    }
  );

  const data = await response.json();
  console.log("this is getserver", data.payload);
  return data.payload;
};
