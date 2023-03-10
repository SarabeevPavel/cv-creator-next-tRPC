import { useState } from "react";
import type { ThemeType, UserType } from "../../../utils";
import { AddButton, DoneButton, EditButton, List } from "../../assets";
import { ProjectEditor } from "./ProjectEditor";
import classNames from "classnames";

interface ProjectsProps {
  user: UserType;
  onChange: (updatedUser: UserType) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ user, onChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  return (
    <div className="group container relative ">
      <div className="jc flex">
        <h3 className="text-md mb-2 text-center font-semibold uppercase">
          Projects
        </h3>
        <EditButton
          isEditing={isEditing}
          onChange={() => setIsEditing(true)}
          styles={classNames(
            !user.projects.length ? "hidden" : "block",
            "hover:bg-black/20`"
          )}
        />
        <DoneButton
          isEditing={isEditing}
          onChange={() => {
            setIsEditing(false);
            setIsOpen(false);
          }}
          styles="text-white"
        />
      </div>

      <ProjectEditor
        user={user}
        isEditing={isEditing}
        isOpen={isOpen}
        isError={isError}
        isLoading={isLoading}
        onChange={onChange}
        onClose={() => setIsOpen(false)}
      />

      <List
        buttonStyles="absolute -top-2 -right-2"
        isEditing={isEditing}
        items={user.projects}
        onDelete={(i) =>
          onChange({
            ...user,
            projects: user.projects.filter((p, index) => index !== i),
          })
        }
      />

      <AddButton
        view={(!user.projects.length && !isOpen) || isEditing}
        onChange={() => {
          setIsEditing(true);
          setIsOpen(true);
        }}
        styles={`ml-auto mr-auto text-white block opacity-0 ${
          (user.projects.length === 0 && isEditing) ||
          (user.projects.length && !isEditing)
            ? "group-hover:opacity-100"
            : ""
        }group-hover:opacity-100 disabled:hidden mt-4`}
      />
    </div>
  );
};
