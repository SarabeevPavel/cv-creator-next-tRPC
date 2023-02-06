import { useState } from "react";
import type { ProjectType, UserType } from "../../utils";
import { initialProject } from "../../utils";
import { AddButton, DoneButton, EditButton, List } from "../assets";
import { Input, Textarea } from "../fields";

interface ProjectsProps {
  user: UserType;
  onChange: (updatedUser: UserType) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ user, onChange }) => {
  const [newProject, setNewProject] = useState<ProjectType>(initialProject);
  const [editing, setEditing] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="group container relative">
      <div className="jc flex">
        <h3 className="text-md mb-2 text-center font-semibold">Projects</h3>
        <EditButton
          isEditing={editing}
          onChange={() => setEditing(true)}
          styles={`${
            !user.projects.length ? "hidden" : "block"
          } text-blue-600 group-hover:text-blue-600 hover:bg-black/20`}
        />
        <DoneButton
          isEditing={editing}
          onChange={() => {
            setEditing(false);
            setIsOpen(false);
          }}
          styles="text-white"
        />
      </div>
      {editing && isOpen && user.projects.length < 5 && (
        <div
          className={`${
            editing
              ? "opacity-100 transition-opacity duration-200"
              : "opacity-0 transition-opacity duration-200"
          }    absolute left-1/2 z-10 mx-auto mt-2 flex w-1/2 -translate-x-1/2 flex-col items-center justify-center rounded-xl bg-black/50 p-2 duration-200 ease-in-out`}
        >
          <Input
            value={newProject.title}
            placeholder="Project title"
            onChange={(e) =>
              setNewProject({
                ...newProject,
                title: e.currentTarget.value,
              })
            }
            styles="bg-gray-200 hover:bg-gray-200 focus:bg-gray-200 rounded-lg"
          />

          <Textarea
            value={newProject.description}
            placeholder="Project description"
            onChange={(e) =>
              setNewProject({
                ...newProject,
                description: e.currentTarget.value,
              })
            }
            maxLength={60}
            styles="rounded-xl bg-gray-200 hover:bg-gray-200 focus:bg-gray-200 mb-2 px-2 py-3 h-20 hide-scrollbar"

            //   onContinue={async (startText: string) => {
            //     toggleLoading(true)
            //     let newValue
            //     await toast.promise(
            //       handleContinueProjectDescription(user, startText).then(
            //         (res) => (newValue = res)
            //       ),
            //       {
            //         pending: "Creating text 🤖📝",
            //         success: "Text is created 🟢",
            //         error: "Error 🔴",
            //       }
            //     )
            //     toggleLoading(false)
            //     if (newValue) newProject.description = newValue
            //   }}
          />

          <Input
            value={newProject.repositoryUrl}
            placeholder="Url of repository"
            onChange={(e) =>
              setNewProject({
                ...newProject,
                repositoryUrl: e.currentTarget.value,
              })
            }
            styles="bg-gray-200 hover:bg-gray-200 focus:bg-gray-200 rounded-lg  "
          />

          <AddButton
            view={isOpen && editing}
            disabled={
              !newProject.title.trim().length ||
              !newProject.description.trim().length ||
              !newProject.repositoryUrl.trim().length
            }
            onChange={() => {
              onChange({
                ...user,
                projects: [...user.projects, newProject],
              });
              setNewProject(initialProject);
              setIsOpen(false);
            }}
            styles="w-full mt-1 ml-0 text-white"
          />
        </div>
      )}
      <List
        buttonStyles="absolute -top-2 -right-2"
        isEditing={editing}
        items={user.projects}
        onDelete={(i) =>
          onChange({
            ...user,
            projects: user.projects.filter((p, index) => index !== i),
          })
        }
      />

      <AddButton
        view={(!user.projects.length && !isOpen) || editing}
        disabled={user.projects.length !== 0 && user.projects.length > 3}
        onChange={() => {
          setEditing(true);
          setIsOpen(true);
        }}
        styles={`ml-auto mr-auto text-white block opacity-0 ${
          (user.projects.length === 0 && editing) ||
          (user.projects.length && !editing)
            ? "group-hover:opacity-100"
            : ""
        }group-hover:opacity-100 disabled:hidden`}
      />
    </div>
  );
};
