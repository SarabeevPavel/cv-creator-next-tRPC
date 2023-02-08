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

export const initialThemes = {
  navi: {
    mainColor: "#F5FFFA",
    additionalColor: "#000080", //blue
  },
  maroon: {
    mainColor: "#FFF5EE",
    additionalColor: "#800000", //red
  },
  rebeca_purpure: {
    mainColor: "#F5FFFA",
    additionalColor: "#663399", //purpure
  },
  sea_green: {
    mainColor: "#008080",
    additionalColor: "#3CB371", //sea green
  },
  indigo_salmon: {
    mainColor: "#FFA07A", // salmon
    additionalColor: "#4B0082", //indigo
  },
  honey_dew: {
    mainColor: "#F0FFF0", // honey_dew
    additionalColor: "#BC8F8F", //rosy_brown
  },
};
1;
