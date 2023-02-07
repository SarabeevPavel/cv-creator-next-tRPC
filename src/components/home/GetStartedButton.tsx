import { motion } from "framer-motion";

interface GetStartedButtonProps {
  isView: boolean;
  onSelect: () => void;
}

export const GetStartedButton: React.FC<GetStartedButtonProps> = ({
  isView,
  onSelect,
}) => {
  //   if (!isView) return null;
  return (
    <motion.button
      initial={{
        x: -1000,
      }}
      animate={{ x: 0, scale: isView ? 1 : 0 }}
      transition={{
        duration: 0.5,
      }}
      onClick={onSelect}
      type="button"
      className="left absolute top-1/2 -translate-y-1/2 transform rounded-lg bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-purple-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-purple-300 dark:shadow-lg dark:shadow-purple-800/80 dark:focus:ring-purple-800"
    >
      Get Started
    </motion.button>
  );
};
