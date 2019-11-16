import React from "react";
import { ContextProps } from "./model";
import { getDefaultContextValues } from "./factory";

export const AppContext = React.createContext<ContextProps>(
  getDefaultContextValues()
);
