import Image from "next/image";

interface AvatarProps {
  avatar: string;
}

export const Avatar: React.FC<AvatarProps> = ({ avatar }) => (
  <div className="group relative h-full w-full">
    <Image
      src={!avatar || avatar === "default" ? "/default-avatar.jpg" : avatar}
      alt="avatar"
      className="h-full w-full object-cover"
      width={1000}
      height={1000}
    />
  </div>
);
