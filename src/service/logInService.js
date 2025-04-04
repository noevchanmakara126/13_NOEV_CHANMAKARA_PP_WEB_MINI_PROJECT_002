export const loginService = async (user) => {
  // log("Lo
  // gin Service Called", user);
  console.log(user);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/auth/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }
  );

  if (!res.ok) {
    throw new Error("Invalid credentials");
  }

  const loginUser = await res.json();
  return loginUser?.payload;
};
