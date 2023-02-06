import { FiEdit } from "react-icons/fi";
import type { ProjectType } from "../../utils";
// import { MdEditNote } from "react-icons/md";

interface EditButtonProps {
  isEditing: boolean;
  onChange: () => void;
  styles?: string;
  items?: string[] | ProjectType[];
}

export const EditButton: React.FC<EditButtonProps> = ({
  isEditing,
  onChange,
  styles,
  items,
}) => {
  if (items && !items.length) {
    return null;
  }
  return (
    <button
      onClick={onChange}
      disabled={isEditing}
      className={`ml-1 grid h-7 w-7 place-items-center rounded-xl  opacity-0 duration-200 ease-in-out hover:bg-white/30 disabled:bg-white/20 disabled:opacity-100 group-hover:opacity-100 ${
        styles ? styles : ""
      } `}
    >
      <FiEdit size={15} />
    </button>
  );
};
