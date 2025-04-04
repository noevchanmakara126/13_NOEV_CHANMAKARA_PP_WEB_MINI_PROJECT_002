import headerToken from "./headerToken";

export async function registerService({ credential }) {
  const headers = await headerToken();

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/auth/register`,
      {
        method: "POST",
        headers,
        body: JSON.stringify(credential),
      }
    );

    if (!response.ok) {
      throw new Error("Registration failed");
    }
    const data = await response.json();
    console.log("this is data in register :", data);
    return data.payload;
  } catch (error) {
    console.error("Error during registration:", error);
    throw error;
  }
}
