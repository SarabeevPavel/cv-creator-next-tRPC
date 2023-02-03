import Image from "next/image";
import type { UserType } from "../../utils";
import { Contacts } from "./Contacts";
import { Languages } from "./Languages";
import { Profile } from "./Profile";
import { Summary } from "./Summary";
import { Stack } from "./Stack";
import { Projects } from "./Projects";

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
          <div role="contacts" className="container text-white/90">
            <Contacts user={user} onChange={onChange} />
          </div>
          <div role="languages" className="container text-white/90">
            <Languages user={user} onChange={onChange} />
          </div>
        </div>
        <div role="user-about-stack" className="w-3/5 text-blue-600">
          <div role="name,position" className="h-1/8 container">
            <Profile user={user} onChange={onChange} />
          </div>
          <div role="summary" className="container">
            <Summary user={user} onChange={onChange} />
          </div>

          <div role="stack" className="container">
            <Stack user={user} onChange={onChange} />
          </div>
          <div role="projects" className="container">
            <Projects user={user} onChange={onChange} />
          </div>
        </div>
      </div>
    </div>
  );
};
