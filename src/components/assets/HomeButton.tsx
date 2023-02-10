import classNames from "classnames";
import { AiFillHome } from "react-icons/ai";
import type { ThemeType, UserType } from "../../utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { VscTriangleUp } from "react-icons/vsc";
import Link from "next/link";

interface HomeButtonProps {
  user: UserType;
  theme: ThemeType;
}

export const HomeButton: React.FC<HomeButtonProps> = ({ user, theme }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ scale: 0.1, y: 0, x: -30 }}
            animate={{ scale: 1, y: 90, x: 10 }}
            exit={{ scale: 0.1, y: 0, x: -30 }}
            transition={{ type: "linear", duration: 0.2 }}
            className="absolute z-20 grid w-44 place-items-center rounded-xl bg-gray-800 p-2 text-white/80"
          >
            <h3 className="mb-2 text-center">Save before exit?</h3>
            <motion.div className="flex flex-col ">
              <Link
                href="/"
                className="mb-1 text-center hover:text-green-400"
                onClick={() => {
                  setIsOpen(false);
                  localStorage.setItem("user", JSON.stringify(user));
                  localStorage.setItem("theme", JSON.stringify(theme));
                }}
              >
                Save and exit
              </Link>
              <Link
                href="/"
                className="mb-1 text-center hover:text-blue-400"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                Exit without save
              </Link>
              <Link
                href="/"
                className="mb-1 text-center hover:text-red-500"
                onClick={() => {
                  setIsOpen(false);
                  localStorage.clear();
                }}
              >
                Exit and remove saves
              </Link>
              <button
                className="mb-1 text-center hover:text-orange-400"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
              <VscTriangleUp
                className="absolute left-4 top-0 -translate-y-5 transform text-gray-800"
                size={30}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={classNames(
          isOpen ? "bg-gray-800 text-blue-500" : "bg-black/50 text-white",
          "group relative grid h-20 w-20 place-items-center overflow-hidden  rounded-full transition-all duration-200  ease-in-out hover:bg-gray-800  hover:text-blue-500 disabled:opacity-70"
        )}
      >
        <AiFillHome size={20} />
      </button>
    </div>
  );
};
