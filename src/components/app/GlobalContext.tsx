import type { ReactNode } from "react";
import React, { useState } from "react";
import type { UserType } from "../../utils";
import { initialUser } from "../../utils";

interface IGlobalContextProps {
  user: UserType;
  loading: boolean;
  setUser: (user: UserType) => void;
  setLoading: (loading: boolean) => void;
}

export const GlobalContext = React.createContext<IGlobalContextProps>({
  user: initialUser,
  loading: true,
  setUser: () => void {},
  setLoading: () => void {},
});

interface GlobalContextProviderProps {
  children: ReactNode;
}

export const GlobalContextProvider = ({
  children,
}: GlobalContextProviderProps) => {
  const [currentUser, setCurrentUser] = useState<UserType>(initialUser);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <GlobalContext.Provider
      value={{
        user: currentUser,
        loading: isLoading,
        setUser: setCurrentUser,
        setLoading: setIsLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
