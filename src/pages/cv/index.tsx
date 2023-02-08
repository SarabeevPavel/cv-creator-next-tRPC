import type { NextPage } from "next";
import { useGlobalContext } from "../../hooks/useGlobalContext";

import { Viewer, MagicButton, ConfigButton } from "../../components";
import type { ThemeType, UserType } from "../../utils";

const CV: NextPage = () => {
  const { user, setUser, theme, setTheme } = useGlobalContext();

  return (
    <div className="styled-scrollbar relative flex h-screen w-screen place-items-center items-end  justify-between bg-gray-900">
      <div className="grid place-items-center p-5">
        <ConfigButton
          user={user}
          theme={theme}
          onChange={(updatedTheme: ThemeType) => setTheme(updatedTheme)}
        />
      </div>
      <div className="flex h-full w-3/4 justify-center gap-5 overflow-hidden">
        <Viewer
          user={user}
          onChange={(updatedUser: UserType) => setUser(updatedUser)}
          theme={theme}
        />
      </div>
      {/* absolute right-5 bottom-10 */}
      <div className=" grid place-items-center p-5">
        <MagicButton
          user={user}
          onChange={(updatedUser: UserType) => setUser(updatedUser)}
        />
      </div>
    </div>
  );
};

export default CV;
