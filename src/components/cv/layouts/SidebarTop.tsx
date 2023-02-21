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
          <div
            role="avatar"
            className="grid h-full w-1/3 place-items-center overflow-hidden"
          >
            <div className="h-4/5 w-4/5 overflow-hidden rounded-2xl">
              {avatar}
            </div>
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
              backgroundColor: theme.additionalColor,
            }}
          >
            <div
              className="h-full w-full rounded-tl-xl"
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
        </div>
      </div>
    </div>
  );
};
