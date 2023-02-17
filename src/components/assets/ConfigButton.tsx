import { useState } from "react";
import type { ThemeType, UserType } from "../../utils";
import classNames from "classnames";
import { AnimatePresence } from "framer-motion";
import { Editor } from "../editor";
import { FaPaintRoller } from "react-icons/fa";
import { useGlobalContext } from "../../hooks";

export const ConfigButton: React.FC = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  return (
    <div className="relative">
      <AnimatePresence>
        {isOpen && <Editor isOpen={isOpen} onClose={() => setIsOpen(false)} />}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        disabled={isLoading}
        className={classNames(
          isOpen ? "bg-gray-800 text-blue-500" : "bg-black/50 text-white",
          "group relative grid h-20 w-20 place-items-center overflow-hidden  rounded-full transition-all duration-200  ease-in-out hover:bg-gray-800  hover:text-blue-500 disabled:opacity-70"
        )}
      >
        <FaPaintRoller />
      </button>
    </div>
  );
};
