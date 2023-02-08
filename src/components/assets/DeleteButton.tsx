import classNames from "classnames";
import { AiOutlinePlus } from "react-icons/ai";
import { useGlobalContext } from "../../hooks";

interface DeleteButtonProps {
  onDelete: (index: number) => void;
  index: number;
  styles?: string;
}

export const DeleteButton: React.FC<DeleteButtonProps> = ({
  onDelete,
  index,
  styles,
}) => {
  const { theme } = useGlobalContext();
  return (
    <button
      className={classNames(
        styles,
        `text-[${theme.mainColor}] group-hover:text-[${theme.mainColor}]`,
        "grid h-6 w-6 place-items-center rounded-full  bg-black/30 text-red-300 opacity-0 duration-150 ease-in-out hover:bg-black/60 hover:text-red-500 group-hover:opacity-100"
      )}
      onClick={(e) => {
        e.preventDefault();
        onDelete(index);
      }}
    >
      <AiOutlinePlus size={15} className="rotate-45" />
    </button>
  );
};
