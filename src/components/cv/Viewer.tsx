import Image from "next/image";
import type { UserType } from "../../utils";
import { Contacts } from "./Contacts";

interface ViewerProps {
  user: UserType;
  onChange: (updatedUser: UserType) => void;
}

export const Viewer: React.FC<ViewerProps> = ({ user, onChange }) => {
  const testImageSrc = "/test-avatar.jpeg";
  return (
    <div className="styled-scrollbar h-full overflow-auto px-4 py-5">
      <div className="flex h-[1000px] w-[700px] bg-zinc-100">
        <div role="user-photo-info" className="flex w-2/5 flex-col bg-blue-800">
          <div role="avatar" className=" h-1/2 w-full">
            <Image
              src={testImageSrc}
              alt="user-avatar"
              className="h-full w-full object-cover"
              width={1000}
              height={1000}
            />
          </div>
          <div role="contacts" className="px-2 py-4 text-white/90">
            <Contacts user={user} onChange={onChange} />
          </div>
          <div role="languages"></div>
        </div>
        <div role="user-about-stack" className="w-3/5">
          <div role="name,position"></div>
          <div role="summary"></div>
          <div role="stack"></div>
          <div role="projects"></div>
        </div>
      </div>
    </div>
  );
};
