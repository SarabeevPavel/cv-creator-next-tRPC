import { useState } from "react";
import type { ProjectType, UserType } from "../../../utils";
import { initialProject } from "../../../utils";
import { Input, Textarea } from "../../fields";
import { AddButton } from "../../assets";
import classNames from "classnames";
import { motion } from "framer-motion";

interface ProjectEditorProps {
  user: UserType;
  isEditing: boolean;
  isLoading: boolean;
  isError: boolean;
  isOpen: boolean;
  onChange: (updatedUser: UserType) => void;
  onClose: () => void;
}

// isEditing
//   ? "opacity-100 transition-opacity duration-200"
//   : "opacity-0 transition-opacity duration-200"

export const ProjectEditor: React.FC<ProjectEditorProps> = ({
  user,
  isEditing,
  isOpen,
  isError,
  isLoading,
  onChange,
  onClose,
}) => {
  const [newProject, setNewProject] = useState<ProjectType>(initialProject);

  const editor = {
    hidden: { opacity: 0, transition: { duration: 0.5 } },
    show: { opacity: 1, transition: { duration: 0.5 } },
  };

  if (!isEditing && !isOpen && user.projects.length < 5) {
    return null;
  }

  return (
    <motion.div
      variants={editor}
      initial="hidden"
      animate="show"
      exit="hidden"
      className={classNames(
        "absolute left-1/2 z-10 mx-auto mt-2 flex w-1/2 -translate-x-1/2 flex-col items-center justify-center rounded-xl bg-black/50 p-2 duration-200 ease-in-out"
      )}
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
        isError={isError}
        isLoading={isLoading}
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
        view={isOpen && isEditing}
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
          onClose();
        }}
        styles="w-full mt-1 ml-0 text-white"
      />
    </motion.div>
  );
};
