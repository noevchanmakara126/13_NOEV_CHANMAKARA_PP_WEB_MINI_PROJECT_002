"use server";

import { signIn } from "@/auth";

export const loginAction = async (formdata) => {
  await signIn("credentials", {
    email: formdata.get("email"),
    password: formdata.get("password"),
    redirectTo: "/todo",
  });
};
