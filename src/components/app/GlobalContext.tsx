import type { ReactNode } from "react";
import React, { useState } from "react";
import type { ThemeType, UserType } from "../../utils";
import { initialUser, initialThemes } from "../../utils";

interface IGlobalContextProps {
  user: UserType;
  theme: ThemeType;
  layout: string;
  loading: boolean;
  setUser: (user: UserType) => void;
  setTheme: (theme: ThemeType) => void;
  setLayout: (layout: string) => void;
  setLoading: (loading: boolean) => void;
}

const storageUser =
  typeof window !== "undefined"
    ? (JSON.parse(JSON.stringify(localStorage.getItem("user"))) as UserType)
    : initialUser;
const storageTheme =
  typeof window !== "undefined"
    ? (JSON.parse(JSON.stringify(localStorage.getItem("theme"))) as ThemeType)
    : initialThemes["navi"];
const storageLayout =
  typeof window !== "undefined"
    ? (localStorage.getItem("layout") as string)
    : "sidebar-left";

export const GlobalContext = React.createContext<IGlobalContextProps>({
  user: storageUser,
  loading: true,
  layout: storageLayout,
  theme: storageTheme,
  setUser: () => void {},
  setTheme: () => void {},
  setLayout: () => void {},
  setLoading: () => void {},
});

interface GlobalContextProviderProps {
  children: ReactNode;
}

export const GlobalContextProvider = ({
  children,
}: GlobalContextProviderProps) => {
  const [currentUser, setCurrentUser] = useState<UserType>(initialUser);
  const [currentTheme, setCurrentTheme] = useState<ThemeType>(
    initialThemes["navi"]
  );
  const [currentLayout, setCurrentLayout] = useState<string>("sidebar-left");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <GlobalContext.Provider
      value={{
        user: currentUser,
        theme: currentTheme,
        layout: currentLayout,
        loading: isLoading,
        setUser: setCurrentUser,
        setTheme: setCurrentTheme,
        setLayout: setCurrentLayout,
        setLoading: setIsLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
