import { Select } from "@radix-ui/react-select";
import React from "react";
import SelectOptionComponent from "./SelectOptionComponent";

export default function ContenetCardComponent() {
  return (
    <div className="w-[360px] h-[250px] bg-white rounded-lg shadow-md p-4 m-auto">
      <h1>Slack Integration</h1>
      <p>
        Add a field in the portal to let the user connect their Slack account.
      </p>
      <div className="flex justify-between">
        <p className="bg-purple-300/50 ">Web Deverlopment</p>
        <div className="rounded-full bg-amber-400"></div>
      </div>
      <br />
      <div className="flex justify-between ">
        <SelectOptionComponent />
        <p>dd/mm/yyyy</p>
      </div>
    </div>
  );
}
