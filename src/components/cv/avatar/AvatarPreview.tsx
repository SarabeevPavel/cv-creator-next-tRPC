import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { BiCrop } from "react-icons/bi";
import { Crop } from "./Crop";
import Image from "next/image";

interface AvatarPreviewProps {
  avatar: string;
  onDelete: () => void;
  onCrop: (newAvatar: string) => void;
}

export const AvatarPreview: React.FC<AvatarPreviewProps> = ({
  avatar,
  onDelete,
  onCrop,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="group relative h-full w-full">
      <Image
        src={avatar === "default" ? "/default-avatar.jpg" : avatar}
        alt="avatar"
        className="h-full w-full object-cover"
        width={1000}
        height={1000}
      />
      <div className="absolute top-0 bottom-0 left-0 right-0 grid place-items-center opacity-0 duration-200 ease-in-out group-hover:bg-black/30 group-hover:opacity-100">
        <div className="flex w-full justify-evenly">
          <button
            className="mr-2 grid h-20 w-20 place-items-center rounded-full bg-white/40 text-white/75 hover:bg-red-600 hover:text-white"
            onClick={onDelete}
          >
            <FaTrashAlt size={25} />
          </button>
          <button
            className="grid h-20 w-20 place-items-center rounded-full bg-white/40 text-white/75 hover:bg-blue-500 hover:text-white"
            onClick={() => setIsOpen(true)}
          >
            <BiCrop size={25} />
          </button>
        </div>
      </div>

      <Crop
        open={isOpen}
        onClose={() => setIsOpen(false)}
        onCrop={onCrop}
        avatarUrl={avatar === "default" ? "/default-avatar.jpg" : avatar}
      />
    </div>
  );
};
