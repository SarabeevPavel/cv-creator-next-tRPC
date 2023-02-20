import type { ReactNode } from "react";
import type { ThemeType } from "../../../utils";

interface SidebarTopProps {
  theme: ThemeType;
  avatar: ReactNode;
  contacts: ReactNode;
  languages: ReactNode;
  profile: ReactNode;
  summary: ReactNode;
  stack: ReactNode;
  projects: ReactNode;
}

export const SidebarTop: React.FC<SidebarTopProps> = ({
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
    <div>
      <div
        id="cv-document"
        className="flex h-[1000px] w-[700px] flex-col overflow-hidden"
      >
        <div
          role="user-photo-info"
          className="max-h-1/3 flex h-1/3 w-full"
          style={{
            backgroundColor: theme.additionalColor,
            color: theme.mainColor,
          }}
        >
          <div role="avatar" className="h-full w-1/3 overflow-hidden">
            {avatar}
          </div>
          <div className="w-2/3">
            <div role="name,position" className="h-1/8 container">
              {profile}
            </div>
            <div role="summary" className="container w-full">
              {summary}
            </div>
          </div>
        </div>
        <div className="flex h-full">
          <div
            role="contacts-languages-stack"
            className="w-1/3"
            style={{
              backgroundColor: theme.additionalColor,
              color: theme.mainColor,
            }}
          >
            <div role="contacts" className="container ">
              {contacts}
            </div>

            <div role="languages" className="container ">
              {languages}
            </div>
          </div>

          <div
            role="projects"
            className="w-2/3"
            style={{
              backgroundColor: theme.mainColor,
              color: theme.additionalColor,
            }}
          >
            <div role="stack" className="container grid grid-cols-1">
              {stack}
            </div>
            <div role="projects" className="container">
              {projects}
            </div>
          </div>
        </div>

        {/* <div
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
        </div> */}
      </div>
    </div>
  );
};
