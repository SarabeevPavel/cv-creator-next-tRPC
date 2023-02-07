import { motion } from "framer-motion";
import classNames from "classnames";
import { Loader } from "../assets";

interface AboutProps {
  isView: boolean;
  isLoading: boolean;
  value: string;
  onChange: (value: string) => void;
  onGenerate: () => void;
  onBack: () => void;
}

export const About: React.FC<AboutProps> = ({
  isView,
  isLoading,
  value,
  onChange,
  onGenerate,
  onBack,
}) => {
  //   if (!isView) return null;

  return (
    <motion.div
      initial={{
        scale: 0,
      }}
      animate={{ x: 0, scale: isView ? 1 : 0 }}
      transition={{
        duration: 0.5,
      }}
      className="absolute"
    >
      <textarea
        value={value}
        disabled={isLoading}
        className="hide-scrollbar h-32 w-80 resize-none rounded-lg bg-black/30 px-3 py-2 text-white/95 placeholder:text-white/20 disabled:bg-gray-400"
        onChange={(e) => onChange(e.currentTarget.value)}
        placeholder="e.g. Hello, I'm Mike and now i look at first job as back-end developer. I know JavaScript, TypeScript, Node.js and Express.js. Worked with MongoDB. I'm from Odessa."
      />

      <div className="flex">
        <button
          type="button"
          disabled={value.length < 10 || isLoading}
          className={classNames(
            value.length >= 10 &&
              "bg-gradient-to-r from-green-400 via-green-500 to-green-600",
            "default-button  mx-auto my-2 mr-2 mb-2 w-2/5 rounded-lg  px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-br disabled:bg-gray-600"
          )}
          onClick={onGenerate}
        >
          <Loader isLoading={isLoading} color="white" size={30} />
          {!isLoading && <span>Continue</span>}
        </button>
        <button
          type="button"
          disabled={isLoading}
          className="default-button mx-auto my-2 mr-2 mb-2 w-2/5 rounded-lg bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-br"
          onClick={onBack}
        >
          Back
        </button>
      </div>
    </motion.div>
  );
};
