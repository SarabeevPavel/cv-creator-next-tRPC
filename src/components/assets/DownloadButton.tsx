import classNames from "classnames";
import { TbFileDownload } from "react-icons/tb";
import { handleSave } from "../../utils";
import { Viewer } from "../cv";

interface DownloadButtonProps {
  rootElementId: string;
  downloadFileName: string;
}

export const DownloadButton: React.FC<DownloadButtonProps> = ({
  rootElementId,
  downloadFileName,
}) => {
  return (
    <div>
      <button
        onClick={() => handleSave(rootElementId, downloadFileName)}
        className={classNames(
          "  group relative  grid h-20 w-20 place-items-center overflow-hidden  rounded-full bg-green-800 text-white/80 transition-all duration-200  ease-in-out hover:bg-green-600 hover:text-white  disabled:opacity-70"
        )}
      >
        <TbFileDownload size={25} />
      </button>
    </div>
  );
};
