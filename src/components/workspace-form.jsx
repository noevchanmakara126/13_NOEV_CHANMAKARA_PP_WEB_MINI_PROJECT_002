"use client";
import { createWorkspaceAction } from "@/action/workspace/createWorkspaceAction";
import { updateWorkspaceByIdAction } from "@/action/workspace/updateWorkspaceByIdAction";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function WorkspaceForm({ workspace }) {
  const id = workspace?.workspaceId || null;
  const [workspaceName, setWorkspaceName] = useState(
    workspace?.workspaceName || ""
  );

  const handleWorkspace = (event) => {
    event.preventDefault();

    if (workspace.workspaceId) {
      console.log(workspace.workspaceId);
      const data = updateWorkspaceByIdAction({
        workspaceId: id,
        workspaceName: workspaceName,
      });
    } else {
      const data = createWorkspaceAction({ workspaceName });
      console.log(data);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">+</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create New Workspace</DialogTitle>
          <DialogDescription>Create Workspace</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="grid grid-cols-1 items-center gap-4">
            <input
              name="workspaceName"
              id="workspaceName"
              className="col-span-3"
              placeholder="Workspace Name"
              onChange={(event) => setWorkspaceName(event.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <button type="button" onClick={handleWorkspace}>
            {workspace ? "Update" : "Create"}
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
