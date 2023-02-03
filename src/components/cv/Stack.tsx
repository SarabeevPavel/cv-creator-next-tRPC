import { useState } from "react";
import type { UserType } from "../../utils";
import { AddButton, DoneButton, EditButton, List } from "../assets";
import { Input } from "../fields";

interface StackProps {
  user: UserType;
  onChange: (updatedUser: UserType) => void;
}

export const Stack: React.FC<StackProps> = ({ user, onChange }) => {
  const [value, setValue] = useState("");
  const [editing, setEditing] = useState(false);

  return (
    <div className="group container">
      <div className="flex">
        <h3 className="text-md mb-2 text-center font-semibold">
          Stack of technologies
        </h3>
        <EditButton
          isEditing={editing}
          onChange={() => setEditing(true)}
          styles="text-blue-600 group-hover:text-blue-600 hover:bg-black/20"
        />
        <DoneButton
          isEditing={editing}
          onChange={() => setEditing(false)}
          styles="text-white"
        />
      </div>
      {editing && (
        <div className="mt-2 flex w-full items-center justify-center duration-200 ease-in-out">
          <Input
            placeholder="Next.js"
            value={value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setValue(e.currentTarget.value)
            }
            styles="bg-black/10 rounded-lg"
          />
          <AddButton
            disabled={!value.trim().length || value.length === 15}
            onChange={() => {
              onChange({
                ...user,
                technologies: [...user.technologies, value],
              });
              setValue("");
            }}
            styles="text-white"
          />
        </div>
      )}
      <List
        items={user.technologies}
        isEditing={editing}
        onDelete={(i) =>
          onChange({
            ...user,
            technologies: user.technologies.filter((_, index) => index !== i),
          })
        }
        styles="grid grid-cols-3"
      />
    </div>
  );
};
