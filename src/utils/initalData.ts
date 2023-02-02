import type { ProjectType } from "./../utils/types";
export const initialUser = {
  position: "",
  avatar: "",
  name: "",
  summary: "",
  contacts: {
    tel: "",
    email: "",
    location: "",
  },
  technologies: [] as string[],
  languages: [] as string[],
  projects: [] as ProjectType[],
};

export const initialProject = {
  title: "",
  description: "",
  repositoryUrl: "",
};
