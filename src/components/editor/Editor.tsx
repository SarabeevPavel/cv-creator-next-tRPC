import { motion } from "framer-motion";
import { VscTriangleUp } from "react-icons/vsc";
import type { ThemeType } from "../../utils";
import { initialThemes } from "../../utils";
import classNames from "classnames";

interface EditorProps {
  isOpen: boolean;
  onClose: () => void;
  currentTheme: ThemeType;
  onChange: (updatedTheme: ThemeType) => void;
}

export const Editor: React.FC<EditorProps> = ({
  isOpen,
  onClose,
  onChange,
  currentTheme,
}) => {
  const themes = initialThemes;

  return (
    <motion.div
      initial={{ scale: 0.1, y: 0, x: -130 }}
      animate={{ scale: 1, y: -63, x: 5 }}
      exit={{ scale: 0.1, y: 100, x: -130 }}
      transition={{ type: "linear", duration: 0.2 }}
      className="absolute bottom-7 left-3 z-20 grid w-72 -translate-y-full transform place-items-center rounded-xl bg-gray-800 py-4 text-white/80"
    >
      <h3 className="mb-2 text-center">Select theme</h3>
      <motion.div>
        <ul className="grid grid-cols-2 gap-5">
          {Object.entries(themes).map(([name, value], index) => (
            <button
              key={index}
              className="text-center"
              onClick={() => onChange(value)}
            >
              <div
                className={classNames(
                  currentTheme === value ? "rgb-background" : "bg-transparent",
                  "grid h-24 w-24 place-items-center rounded-lg bg-gray-700"
                )}
              >
                <div
                  className={classNames(
                    value === currentTheme && "ring-2",
                    "relative h-20 w-20 overflow-hidden "
                  )}
                  style={{ backgroundColor: value.mainColor }}
                >
                  <div
                    className="absolute top-0 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rotate-45 transform"
                    style={{ backgroundColor: value.additionalColor }}
                  ></div>
                </div>
              </div>
              <p className="text-center first-letter:uppercase">
                {name.split("_").join(" ")}
              </p>
            </button>
          ))}
        </ul>
        <VscTriangleUp
          className="absolute left-2 bottom-0 translate-y-5 rotate-180 transform text-gray-800"
          size={30}
        />
      </motion.div>
    </motion.div>
  );
};
