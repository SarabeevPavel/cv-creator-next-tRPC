import type { NextPage } from "next";
import { useGlobalContext } from "../../hooks/useGlobalContext";

import {
  Viewer,
  MagicButton,
  ConfigButton,
  DownloadButton,
  HomeButton,
} from "../../components";
import type { UserType } from "../../utils";

const CV: NextPage = () => {
  const { user, setUser, theme, layout } = useGlobalContext();

  return (
    <div className="styled-scrollbar relative flex h-screen w-screen place-items-center items-end  justify-between bg-gray-900">
      <div className="flex h-full flex-col items-center justify-between">
        <div className="p-5">
          <HomeButton user={user} theme={theme} layout={layout} />
        </div>
        <div className="grid place-items-center p-5">
          <ConfigButton />
        </div>
      </div>
      <div className="flex h-full w-3/4 justify-center gap-5 overflow-hidden">
        <Viewer
          user={user}
          onChange={(updatedUser: UserType) => setUser(updatedUser)}
          theme={theme}
          layout={layout}
        />
      </div>
      <div className="flex h-full flex-col items-center justify-between">
        <div className="p-5">
          <DownloadButton
            rootElementId="cv-document"
            downloadFileName={
              user.name ? `${user.name}-cv` : `${Date.now()}-cv`
            }
          />
        </div>

        <div className=" p-5">
          <MagicButton
            user={user}
            onChange={(updatedUser: UserType) => setUser(updatedUser)}
          />
        </div>
      </div>
    </div>
  );
};

export default CV;
