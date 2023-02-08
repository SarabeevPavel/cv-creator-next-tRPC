import { useState } from "react";
import type { UserType } from "../../../utils";
import { trpc } from "../../../utils";
import {
  AddButton,
  ButtonGenerate,
  DoneButton,
  EditButton,
  ErrorMessage,
  List,
  Loader,
} from "../../assets";
import { Input } from "../../fields";
import classNames from "classnames";
import { TechnologyEditor } from "./TechnologyEditor";

interface StackProps {
  user: UserType;
  onChange: (updatedUser: UserType) => void;
}

export const Stack: React.FC<StackProps> = ({ user, onChange }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-44 group container relative">
      <div className="flex">
        <h3 className="text-md mb-2 text-center font-semibold uppercase">
          Stack
        </h3>

        <ErrorMessage isError={isError} />
        <Loader isLoading={isLoading} />

        <EditButton
          items={user.technologies}
          isEditing={isEditing}
          onChange={() => {
            setIsEditing(true);
            setIsOpen(false);
          }}
          styles="hover:bg-black/20 "
        />

        <DoneButton
          isEditing={isEditing}
          onChange={() => setIsEditing(false)}
          styles="text-white"
        />

        <AddButton
          view={isEditing && user.technologies.length !== 0}
          disabled={user.technologies.length > 11}
          onChange={() => {
            setIsOpen(true);
          }}
          styles={"w-10 h-8 text-white/80 hover:bg-blue-600 hover:text-white"}
        />
      </div>

      <AddButton
        view={!user.technologies.length && !isEditing}
        disabled={
          user.technologies.length !== 0 && user.technologies.length > 11
        }
        onChange={() => {
          setIsEditing(true);
          setIsOpen(true);
        }}
        styles={`ml-auto mr-auto text-white mt-2 mb-0 block opacity-0 group-hover:opacity-100 disabled:hidden`}
      />

      <TechnologyEditor
        user={user}
        isEditing={isEditing}
        isOpen={isOpen}
        isError={isError}
        isLoading={isLoading}
        onChange={onChange}
        onClose={() => setIsOpen(false)}
      />

      <List
        buttonStyles="mr-1"
        items={user.technologies}
        isEditing={isEditing}
        onDelete={(i) =>
          onChange({
            ...user,
            technologies: user.technologies.filter((_, index) => index !== i),
          })
        }
        styles="grid grid-cols-3 place-items-start"
      />
    </div>
  );
};
