import React from "react";
import "./style.scss";
import "@Shared/styles/commons.scss";
import { ContentArea } from "@Components/ContentArea";
import { reducer } from "./reducer";
import { getDefaultContextValues } from "@Shared/context/factory";
import { AppContext } from "@Shared/context";
import { FileTabs } from "@Components/FileTabs";
import { ApplicationFooter } from "@Components/ApplicationFooter";
import { ipcRenderer } from "electron";
import { actions } from "./actions";
import * as fs from "fs";
export const App = () => {
  const [context, dispatch] = React.useReducer(
    reducer,
    getDefaultContextValues()
  );
  React.useEffect(() => {
    ipcRenderer.once("NEW_SIGNAL_FROM_APPLICATION_MENU", () => {
      dispatch({
        type: actions.ON_NEW_FILE,
        payload: "Untitled-" + (context.totalOpenedFiles + 1)
      });
      dispatch({
        type: actions.ON_FILE_SELECT,
        payload: "Untitled-" + (context.totalOpenedFiles + 1)
      });
    });
  }, [context.totalOpenedFiles]);

  React.useEffect(() => {
    ipcRenderer.on(
      "SAVE_SIGNAL_FROM_APPLICATION_MENU",
      (event, path: string) => {
        fs.writeFileSync(
          path,
          (document.querySelector(".content-area-wrapper") as HTMLDivElement)
            .innerText
        );

        dispatch({
          type: actions.ON_SAVE_FILE,
          payload: context.currentFile
        });

        dispatch({
          type: actions.ON_RENAME_FILE,
          payload: path.substring(path.lastIndexOf("/") + 1)
        });
      }
    );
  }, []);

  return (
    <div className="application-wrapper">
      <AppContext.Provider value={context}>
        <div className="body-wrapper">
          <div className="left-pane-wrapper"></div>
          <div className="right-pane-wrapper">
            <FileTabs dispatch={dispatch} />
            <ContentArea dispatch={dispatch} />
          </div>
        </div>
        <ApplicationFooter
          render={[
            { component: () => <div>Gitlens</div>, align: "left" },
            { component: () => <div>Live Share</div>, align: "left" },
            { component: () => <div>Notification</div>, align: "right" },
            { component: () => <div>Prettier</div>, align: "right" },
            { component: () => <div>Line 40 Col 50</div>, align: "right" }
          ]}
        />
      </AppContext.Provider>
    </div>
  );
};
