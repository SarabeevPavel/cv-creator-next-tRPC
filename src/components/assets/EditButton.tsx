import { FiEdit } from "react-icons/fi";
// import { MdEditNote } from "react-icons/md";

interface EditButtonProps {
  isEditing: boolean;
  onChange: () => void;
  styles?: string;
}

export const EditButton: React.FC<EditButtonProps> = ({
  isEditing,
  onChange,
  styles,
}) => {
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
