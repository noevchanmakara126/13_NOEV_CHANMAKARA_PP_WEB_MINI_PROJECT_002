import headerToken from "@/lib/headerToken";

export const getWorkspaces = async () => {
  const headers = await headerToken();
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/workspaces`,
    {
      headers,
      next: { tags: ["workspaces"] },
    }
  );

  const workspaces = await res.json();

  console.log(workspaces);
  return workspaces;
};
