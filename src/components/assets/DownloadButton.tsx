import classNames from "classnames";
import { TbFileDownload } from "react-icons/tb";
import { handleSavePDF, handleSavePNG } from "../../utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { VscTriangleUp } from "react-icons/vsc";

interface DownloadButtonProps {
  rootElementId: string;
  downloadFileName: string;
  ref: React.RefObject<HTMLDivElement>;
}

export const DownloadButton: React.FC<DownloadButtonProps> = ({
  rootElementId,
  downloadFileName,
  ref,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ scale: 0.1, y: 0, x: -30 }}
            animate={{ scale: 1, y: 92, x: -105 }}
            exit={{ scale: 0.1, y: 0, x: -30 }}
            transition={{ type: "linear", duration: 0.2 }}
            className="absolute z-20 grid w-44 place-items-center rounded-xl bg-gray-800 p-2 text-white/80"
          >
            <h3 className="text-center">Download</h3>
            <span className="mb-2 text-sm text-white/50">
              Choose the format
            </span>
            <motion.div className="flex gap-5">
              <button
                className="mb-1 text-center hover:text-green-400"
                onClick={() => {
                  handleSavePNG(rootElementId, downloadFileName);
                  setIsOpen(false);
                }}
              >
                .PNG
              </button>

              <button
                // disabled={true}
                className="mb-1 text-center text-white hover:text-green-400 disabled:text-white/40 disabled:hover:text-red-400"
                onClick={() => {
                  handleSavePDF(rootElementId, downloadFileName, ref);
                  setIsOpen(false);
                }}
              >
                {/* <s>.PDF</s> */}
                .PDF
              </button>

              <VscTriangleUp
                className="absolute right-4 top-0 -translate-y-5 transform text-gray-800"
                size={30}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        // disabled={isLoading}
        className={classNames(
          isOpen ? "bg-gray-800 text-blue-500" : "bg-black/50 text-white",
          "group relative grid h-20 w-20 place-items-center overflow-hidden  rounded-full transition-all duration-200  ease-in-out hover:bg-gray-800  hover:text-blue-500 disabled:opacity-70"
        )}
      >
        <TbFileDownload size={25} />
      </button>
    </div>
  );
};
