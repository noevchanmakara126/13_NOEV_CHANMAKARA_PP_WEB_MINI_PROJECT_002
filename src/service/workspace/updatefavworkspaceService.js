import { auth } from "@/auth";
import headerToken from "@/lib/headerToken";

export const updateFavoriteStatusByIdService = async ({
  workspaceId,
  favorite,
}) => {
  try {
    const session = await auth();
    const headers = await headerToken();
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/workspace/${workspaceId}/favorite?favorite=${favorite}`,
      {
        method: "PATCH",
        headers,
        next: { tags: ["workspace"] },
      }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to update favorite status: ${response.statusText}`
      );
    }

    const data = await response.json();
    return data.payload;
  } catch (error) {
    console.error("Error updating favorite status:", error);
    throw error;
  }
};
