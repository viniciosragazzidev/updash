"use client";

import {
  Dispatch,
  FocusEvent,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

export interface AppContextType {
  modeLogin: boolean;
  setModeLogin: Dispatch<SetStateAction<boolean>>;
  currentInputFocus?: string | undefined;
  setCurrentInputFocus?: Dispatch<SetStateAction<string>>;
}
export const AppContext = createContext<AppContextType>({
  modeLogin: true,
  setModeLogin: () => {},
  currentInputFocus: "",
  setCurrentInputFocus: () => {},
});

const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [modeLogin, setModeLogin] = useState<boolean>(true);
  const [currentInputFocus, setCurrentInputFocus] = useState<string>("");
  const contextValue = {
    modeLogin,
    setModeLogin,
    currentInputFocus,
    setCurrentInputFocus,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
export default AppContextProvider;
