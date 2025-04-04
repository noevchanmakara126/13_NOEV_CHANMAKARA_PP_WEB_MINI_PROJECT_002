import headerToken from "@/lib/headerToken";

export const getUserProfile = async () => {
  const headers = await headerToken();
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/user`,
    {
      headers,
    }
  );
  const pfUser = await response.json();
  console.log("this is Profile User :", pfUser);
  return response;
};
