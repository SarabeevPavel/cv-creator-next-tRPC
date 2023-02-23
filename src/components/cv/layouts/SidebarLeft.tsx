import type { ReactNode } from "react";
import type { ThemeType } from "../../../utils";

interface SidebarLeftProps {
  theme: ThemeType;
  avatar: ReactNode;
  contacts: ReactNode;
  languages: ReactNode;
  profile: ReactNode;
  summary: ReactNode;
  stack: ReactNode;
  projects: ReactNode;
}

export const SidebarLeft: React.FC<SidebarLeftProps> = ({
  theme,
  avatar,
  contacts,
  languages,
  profile,
  summary,
  stack,
  projects,
}) => {
  return (
    <div id="cv-document" className="flex h-full w-full overflow-hidden">
      <div
        role="user-photo-info"
        className="flex w-2/5 flex-col"
        style={{
          backgroundColor: theme.additionalColor,
          color: theme.mainColor,
        }}
      >
        <div role="avatar" className=" h-1/2 w-full">
          {avatar}
        </div>
        <div role="contacts" className="container ">
          {contacts}
        </div>
        <div role="languages" className="container ">
          {languages}
        </div>
      </div>

      <div
        role="user-about-stack"
        className="w-3/5"
        style={{
          backgroundColor: theme.mainColor,
          color: theme.additionalColor,
        }}
      >
        <div role="name,position" className="h-1/8 container">
          {profile}
        </div>
        <div role="summary" className="container">
          {summary}
        </div>

        <div role="stack" className="container">
          {stack}
        </div>
        <div role="projects" className="container">
          {projects}
        </div>
      </div>
    </div>
  );
};
