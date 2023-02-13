import type { ReactNode } from "react";
import React, { useState } from "react";
import type { ThemeType, UserType } from "../../utils";
import { initialUser, initialThemes } from "../../utils";

interface IGlobalContextProps {
  user: UserType;
  theme: ThemeType;
  loading: boolean;
  setUser: (user: UserType) => void;
  setTheme: (theme: ThemeType) => void;
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

// console.log(JSON.parse(storageUser), storageTheme);

export const GlobalContext = React.createContext<IGlobalContextProps>({
  user: storageUser,
  loading: true,
  theme: storageTheme,
  setUser: () => void {},
  setTheme: () => void {},
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
  const [isLoading, setIsLoading] = useState(true);

  return (
    <GlobalContext.Provider
      value={{
        user: currentUser,
        theme: currentTheme,
        loading: isLoading,
        setUser: setCurrentUser,
        setTheme: setCurrentTheme,
        setLoading: setIsLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
