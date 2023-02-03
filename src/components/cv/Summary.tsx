import React from "react";
import { Textarea } from "../fields";
import type { UserType } from "../../utils";

interface SummaryProps {
  user: UserType;
  onChange: (updatedUser: UserType) => void;
}

export const Summary: React.FC<SummaryProps> = ({ user, onChange }) => {
  return (
    <div className="h-full w-full">
      <Textarea
        label="Summary"
        placeholder="Greeting! I'm beginner Full-Stack developer currently looking for my first job as a React/Node.js developer..."
        value={user.summary}
        onChange={(e: React.FormEvent<HTMLTextAreaElement>) => {
          onChange({
            ...user,
            summary: e.currentTarget.value,
          });
        }}
        styles="rounded-xl hover:bg-gray-300 focus:bg-gray-300 px-2 py-3 h-40"
      />
    </div>
  );
};
