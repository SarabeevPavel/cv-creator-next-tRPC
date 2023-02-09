import { motion } from "framer-motion";

interface ChoiceProps {
  isView: boolean;
  isSave: boolean;
  onSelect: (value: string) => void;
}

export const Choice: React.FC<ChoiceProps> = ({ isView, isSave, onSelect }) => {
  return (
    <motion.div
      initial={{
        x: -1000,
        scale: 0,
        opacity: 0,
      }}
      animate={{ x: 0, scale: isView ? 1 : 0, opacity: isView ? 1 : 0 }}
      transition={{
        duration: 0.5,
      }}
      className="absolute"
    >
      <h3 className="mb-10 text-center text-lg text-white">
        What are you want to continue?
      </h3>
      <div className="flex items-center justify-center">
        <button
          onClick={() => onSelect("about")}
          type="button"
          className="mr-6 h-24 w-44 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500  text-center text-sm font-medium text-white hover:bg-gradient-to-l focus:outline-none focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800"
        >
          <span className="relative rounded-md  text-base font-semibold transition-all duration-75 ease-in group-hover:bg-opacity-0 ">
            Tell us briefly about yourself
          </span>
        </button>
        <button
          onClick={() => onSelect("skip")}
          type="button"
          className="h-24 w-44 rounded-lg bg-gradient-to-br from-pink-500 to-orange-400  text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800"
        >
          <span className="relative rounded-md  text-base font-semibold transition-all duration-75 ease-in group-hover:bg-opacity-0 ">
            Create a clean CV
          </span>
        </button>
        {isSave && (
          <button
            onClick={() => onSelect("continue")}
            type="button"
            className=" ml-6 h-24 w-44 rounded-lg bg-gradient-to-br from-pink-500 to-orange-400  text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800"
          >
            <span className="relative rounded-md  text-base font-semibold transition-all duration-75 ease-in group-hover:bg-opacity-0 ">
              Continue editing
            </span>
          </button>
        )}
      </div>
    </motion.div>
  );
};
