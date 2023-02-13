/* eslint-disable */
import React, { useState } from "react";
import { Textarea } from "../fields";
import { UserType, trpc } from "../../utils";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

interface SummaryProps {
  user: UserType;
  onChange: (updatedUser: UserType) => void;
}

export const Summary: React.FC<SummaryProps> = ({ user, onChange }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

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
        styles="rounded-xl hover:bg-gray-300 focus:bg-gray-300 px-2 py-3 h-48"
        isLoading={isLoading}
      />
    </div>
  );
};
