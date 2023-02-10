import { useState } from "react";
import { Input } from "../fields";
import type { UserType } from "../../utils";

interface ProfileProps {
  user: UserType;
  onChange: (updatedUser: UserType) => void;
}

export const Profile: React.FC<ProfileProps> = ({ user, onChange }) => {
  return (
    <div className="h-full w-full ">
      <Input
        placeholder="Name"
        onChange={(e: React.FormEvent<HTMLInputElement>) => {
          onChange({
            ...user,
            name: e.currentTarget.value,
          });
        }}
        value={user.name}
        styles={
          "text-center text-3xl rounded-xl hover:bg-gray-300 focus:bg-gray-300 font-bold"
        }
      />
      <Input
        placeholder="Position"
        onChange={(e: React.FormEvent<HTMLInputElement>) => {
          onChange({
            ...user,
            position: e.currentTarget.value,
          });
        }}
        value={user.position}
        styles={
          "text-center h-8 text-lg uppercase rounded-xl hover:bg-gray-300 focus:bg-gray-300 font-bold opacity-80"
        }
      />
    </div>
  );
};
