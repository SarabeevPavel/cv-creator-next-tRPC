import { useState } from "react";
import type { UserType } from "../../../utils";
import { AddButton } from "../../assets";
import { Input } from "../../fields";
import classNames from "classnames";

interface TechnologyEditorProps {
  user: UserType;
  isEditing: boolean;
  isLoading: boolean;
  isError: boolean;
  isOpen: boolean;
  onChange: (updatedUser: UserType) => void;
  onClose: () => void;
}

export const TechnologyEditor: React.FC<TechnologyEditorProps> = ({
  user,
  isEditing,
  isLoading,
  isError,
  isOpen,
  onChange,
  onClose,
}) => {
  const [value, setValue] = useState("");

  if (!isEditing || !isOpen || user.technologies.length === 12) {
    return null;
  }

  return (
    <div
      className={classNames(
        isEditing ? "opacity-100" : "opacity-0",
        "absolute left-1/2 z-10 mx-auto mt-2 flex w-1/2 -translate-x-1/2 flex-col items-center justify-center rounded-xl bg-black/50 p-2 transition-opacity duration-200 ease-in-out"
      )}
    >
      <Input
        maxLength={12}
        placeholder="Next.js"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.currentTarget.value)
        }
        styles="bg-black/10 rounded-lg text-white/80"
      />
      <AddButton
        view={isOpen}
        disabled={!value.trim().length || value.length === 13}
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
  );
};
// const editor = {
//     hidden: { opacity: 0, transition: { duration: 0.5 } },
//     show: { opacity: 1, transition: { duration: 0.5 } },
//   };

//   if (!isEditing && !isOpen && user.projects.length < 5) {
//     return null;
//   }

//   return (
//     <motion.div
//       variants={editor}
//       initial="hidden"
//       animate="show"
//       exit="hidden"
//       className={classNames(
//         "absolute left-1/2 z-10 mx-auto mt-2 flex w-1/2 -translate-x-1/2 flex-col items-center justify-center rounded-xl bg-black/50 p-2 duration-200 ease-in-out"
//       )}
//     ></motion.div>
