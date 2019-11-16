import React from "react";
import "./style.scss";
import "@Shared/styles/commons.scss";
import { ContentArea } from "@Components/ContentArea";
import { reducer } from "./reducer";
import { getDefaultContextValues } from "@Shared/context/factory";
import { AppContext } from "@Shared/context";
import { FileTabs } from "@Components/FileTabs";

export const App = () => {
  const [context, dispatch] = React.useReducer(
    reducer,
    getDefaultContextValues()
  );
  return (
    <div className="application-wrapper">
      <AppContext.Provider value={context}>
        <FileTabs dispatch={dispatch} />
        <ContentArea dispatch={dispatch} />
      </AppContext.Provider>
    </div>
  );
};
