export interface ImageType {
  url: string;
}

export interface ContactsType {
  tel: string;
  email: string;
  location: string;
}

export interface ProjectType {
  title: string;
  description: string;
  repositoryUrl: string;
}

export interface UserType {
  position: string;
  avatar: string;
  name: string;
  summary: string;
  contacts: ContactsType;
  technologies: string[] | [];
  languages: string[] | [];
  projects: ProjectType[] | [];
}

export interface ThemeType {
  mainColor: string;
  additionalColor: string;
}

export type userContextType = {
  user: UserType | null;
  setUser: React.Dispatch<React.SetStateAction<UserType | null>>;
  theme: ThemeType;
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
};
