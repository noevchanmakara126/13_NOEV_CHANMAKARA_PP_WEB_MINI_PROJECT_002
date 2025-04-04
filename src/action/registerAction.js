"use server";
import { registerService } from "@/lib/registerService";
import { AuthError } from "next-auth";

export const registerAction = async (formData) => {
  try {
    const credential = {
      username: formData.get("username")?.toString(),
      email: formData.get("email")?.toString(),
      password: formData.get("password")?.toString(),
    };

    const data = await registerService({ credential });
  } catch (error) {
    console.log(error);
  }
};
