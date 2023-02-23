import { useEffect } from "react";
import { useGlobalContext } from "../../hooks";
import type { ThemeType, UserType } from "../../utils";
import { SidebarLeft } from "../cv";
import { Avatar } from "./Avatar";
import { Contacts } from "./Contacts";
import { Languages } from "./Languages";
import { Profile } from "./Profile";
import { Projects } from "./Projects";
import { Stack } from "./Stack";
import { Summary } from "./Summary";

interface PageProps {
  user: UserType;
  theme: ThemeType;
  layout: string;
}

export const Page: React.FC<PageProps> = ({ user, theme, layout }) => {
  console.log(user);
  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div className="page h-[1132px] w-[803px]">
      <SidebarLeft
        theme={theme}
        avatar={<Avatar avatar={user.avatar} />}
        contacts={<Contacts contacts={user.contacts} theme={theme} />}
        languages={<Languages items={user.languages} theme={theme} />}
        profile={
          <Profile name={user.name} position={user.position} theme={theme} />
        }
        summary={<Summary text={user.summary} theme={theme} />}
        stack={<Stack items={user.technologies} theme={theme} />}
        projects={<Projects items={user.projects} theme={theme} />}
      />
    </div>
  );
};
