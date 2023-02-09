import { useState } from "react";
import type { UserType } from "../../utils";
import { Input } from "../fields";
import { DoneButton, EditButton, AddButton, List } from "../assets";
import classNames from "classnames";

interface LanguagesProps {
  user: UserType;
  onChange: (updatedUser: UserType) => void;
}

export const Languages: React.FC<LanguagesProps> = ({ user, onChange }) => {
  const [value, setValue] = useState("");
  const [editing, setEditing] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="group relative">
      <div className="flex">
        <h3 className="text-md mb-2 text-left font-semibold uppercase">
          Languages
        </h3>
        <EditButton
          items={user.languages}
          isEditing={editing}
          onChange={() => {
            setEditing(true);
            setIsOpen(false);
          }}
        />
        <DoneButton
          isEditing={editing}
          onChange={() => setEditing(false)}
          styles="text-white"
        />
        <AddButton
          view={editing && user.languages.length !== 0}
          disabled={
            (user.languages.length !== 0 && user.languages.length > 8) || isOpen
          }
          onChange={() => {
            setEditing(true);
            setIsOpen(true);
          }}
          styles={"w-10 h-8 text-white/80 hover:bg-blue-600 hover:text-white"}
        />
      </div>
      <AddButton
        view={!user.languages.length && !editing}
        disabled={user.languages.length !== 0 && user.languages.length > 8}
        onChange={() => {
          setEditing(true);
          setIsOpen(true);
        }}
        styles={`ml-auto mr-auto text-white mt-2 mb-0 block opacity-0 group-hover:opacity-100 disabled:hidden `}
      />
      {editing && isOpen && user.languages.length < 8 && (
        <div
          className={classNames(
            editing
              ? "opacity-100 transition-opacity duration-200"
              : "opacity-0 transition-opacity duration-200",
            "absolute left-1/2 z-10 mx-auto mt-2 flex w-2/3 -translate-x-1/2 items-center justify-center rounded-xl bg-black/50 p-2 duration-200 ease-in-out"
          )}
        >
          <Input
            placeholder="English"
            value={value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setValue(e.currentTarget.value)
            }
            styles="bg-white/60 rounded-lg placeholder:text-black/50 text-black"
          />
          <AddButton
            view={isOpen}
            disabled={!value.trim().length || value.length === 15}
            onChange={() => {
              onChange({ ...user, languages: [...user.languages, value] });
              setValue("");
            }}
          />
        </div>
      )}
      <List
        buttonStyles="mr-1"
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
