import { useState } from "react";
import type { UserType } from "../../utils";
import { Input } from "../fields";
import { DoneButton, EditButton, AddButton, List } from "../assets";

interface LanguagesProps {
  user: UserType;
  onChange: (updatedUser: UserType) => void;
}

export const Languages: React.FC<LanguagesProps> = ({ user, onChange }) => {
  const [value, setValue] = useState("");
  const [editing, setEditing] = useState(false);

  return (
    <div className="group text-white/90">
      <div className="flex">
        <h3 className="text-md mb-2 text-left font-semibold">Languages</h3>
        <EditButton isEditing={editing} onChange={() => setEditing(true)} />
        <DoneButton isEditing={editing} onChange={() => setEditing(false)} />
      </div>
      {editing && (
        <div className="mt-2 flex w-full items-center justify-center duration-200 ease-in-out">
          <Input
            placeholder="English"
            value={value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setValue(e.currentTarget.value)
            }
            styles="bg-white/10 rounded-lg"
          />
          <AddButton
            disabled={!value.trim().length || value.length === 15}
            onChange={() => {
              onChange({ ...user, languages: [...user.languages, value] });
              setValue("");
            }}
          />
        </div>
      )}
      <List
        items={user.languages}
        isEditing={editing}
        onDelete={(i) =>
          onChange({
            ...user,
            languages: user.languages.filter((_, index) => index !== i),
          })
        }
      />
    </div>
  );
};
