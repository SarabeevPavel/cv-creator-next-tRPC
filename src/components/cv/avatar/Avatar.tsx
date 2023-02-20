import { useState } from "react";
import type { UserType } from "../../../utils";
import { AvatarPreview } from "./AvatarPreview";
import { Uploader } from "./Uploader";

interface AvatarProps {
  user: UserType;
  onChange: (newUser: UserType) => void;
}

export const Avatar: React.FC<AvatarProps> = ({ user, onChange }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      {user.avatar ? (
        <AvatarPreview
          avatar={user.avatar}
          onDelete={() => onChange({ ...user, avatar: "" })}
          onCrop={(newAvatar: string) => {
            onChange({ ...user, avatar: newAvatar });
          }}
        />
      ) : (
        <Uploader
          onUpload={(imageUrl) => onChange({ ...user, avatar: imageUrl })}
          position={user.position}
          isLoading={isLoading}
        />
      )}
    </div>
  );
};
