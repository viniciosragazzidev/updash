"use client";

import { ToastTypes } from "@/tools/types/AppTypes";
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
  showToast: ToastTypes;
  setShowToast: Dispatch<ToastTypes>;

  // Function

  activeToast: ({
    time,
    type,
    title,
    text,
  }: {
    time: number;
    type: string;
    title: string;
    text: string;
  }) => void;
}
export const AppContext = createContext<AppContextType>({
  modeLogin: true,
  setModeLogin: () => {},
  currentInputFocus: "",
  setCurrentInputFocus: () => {},
  showToast: {
    title: undefined,

    text: undefined,
    type: undefined,
    time: 4,
  },
  setShowToast: () => {},

  activeToast: () => {},
});

const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [modeLogin, setModeLogin] = useState<boolean>(true);
  const [currentInputFocus, setCurrentInputFocus] = useState<string>("");
  const [showToast, setShowToast] = useState<ToastTypes>({
    title: undefined,
    text: undefined,
    type: undefined,
    time: 4,
  });

  const activeToast = ({
    time,
    type,
    title,
    text,
  }: {
    time: number;
    type: string | undefined;
    title: string | undefined;
    text: string | undefined;
  }) => {
    setShowToast({ time, type, title, text });
    console.log(time, type, title, text);

    setTimeout(() => {
      setShowToast({
        title: undefined,
        text: undefined,
        type: undefined,
        time: 4,
      });
    }, time * 1000);
  };
  const contextValue = {
    modeLogin,
    setModeLogin,
    currentInputFocus,
    setCurrentInputFocus,
    showToast,
    setShowToast,
    activeToast,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
export default AppContextProvider;
