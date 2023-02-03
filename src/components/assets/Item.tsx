import { AiOutlinePlus } from "react-icons/ai";
import type { ProjectType } from "../../utils";

interface ItemProps {
  item: string | ProjectType;
  index: number;
  isEditing?: boolean;
  onDelete: (index: number) => void;
}

export const Item: React.FC<ItemProps> = ({
  item,
  onDelete,
  index,
  isEditing,
}) => {
  return (
    <li className="group: relative flex items-center text-sm">
      {isEditing && (
        <button
          className="absolute -top-2 -right-2 grid h-6 w-6 place-items-center rounded-full  bg-black/30 text-red-300 opacity-0 duration-150 ease-in-out hover:bg-black/60 hover:text-red-500 group-hover:opacity-100"
          onClick={(e) => {
            e.preventDefault();
            onDelete(index);
          }}
        >
          <AiOutlinePlus size={15} className="rotate-45" />
        </button>
      )}
      {typeof item === "string" && <span>{item}</span>}
      {typeof item === "object" && (
        <div
          key={index}
          className="w-full rounded-xl bg-blue-400 px-4 py-2 text-white"
        >
          <h5 className="text-md">{item.title}</h5>
          <p className="text-sm">{item.description}</p>
          <a className={`text-xs underline`} href={item.repositoryUrl}>
            {item.repositoryUrl}
          </a>
        </div>
      )}
    </li>
  );
};
