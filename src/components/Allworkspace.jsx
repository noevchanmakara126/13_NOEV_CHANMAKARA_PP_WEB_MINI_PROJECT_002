import React from "react";
import { getWorkspaces } from "@/service/workspace/workSpaceService";
import { AppSidebar } from "./AppsidebarComponent";
export default async function Allworkspace() {
  const workspacce = await getWorkspaces();
  console.log("this in all work", workspacce);
  return <div>{/* <AppSidebar workspacce={workspacce?.payload} /> */}</div>;
}
