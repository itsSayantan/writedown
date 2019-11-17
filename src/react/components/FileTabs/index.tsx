import React from "react";
import { Props } from "./model";
import "./style.scss";
import { AppContext } from "@Shared/context";
import { actions } from "@Components/App/actions";
export const FileTabs = (props: Props) => {
  const contextValues = React.useContext(AppContext);
  const { dispatch } = props;

  React.useEffect(() => {
    const tabs = document.querySelectorAll(".filetabs-wrapper > div");
    const lastTab = tabs.item(tabs.length - 1);
    if (lastTab) {
      lastTab.scrollIntoView({
        behavior: "smooth",
        inline: "nearest",
        block: "nearest"
      });
    }
  }, [contextValues.openFiles.length]);

  const closeHandler = (ev: React.MouseEvent, index: number) => {
    ev.stopPropagation();
    dispatch({
      type: actions.ON_CLOSE_FILE,
      payload: index
    });
  };
  const {
    theme: { FileTabs },
    currentFile
  } = contextValues;
  const tabClickHandler = (filename: string) => {
    dispatch({
      type: actions.ON_UPDATE_SELECTED_FILE,
      payload: filename
    });
  };
  return (
    <div className="filetabs-wrapper">
      {contextValues.openFiles.map((file, index) => {
        return (
          <div
            className={`ellipsis pointer flex-vertical-center ${
              file.name === currentFile ? "active" : ""
            }`}
            key={index}
            onClick={() => tabClickHandler(file.name)}
            style={{
              backgroundColor:
                currentFile !== file.name
                  ? FileTabs.tabBackgroundColor
                  : FileTabs.tabActiveBackgroundColor,
              color: FileTabs.tabTextColor,
              borderRight: `1px solid ${FileTabs.tabSeparatorColor ||
                "#59595A"}`
            }}
          >
            <div
              className="unsaved"
              style={{ backgroundColor: FileTabs.tabUnsavedIndicatorColor }}
            ></div>
            <div className="name">{file.name}</div>
            <div
              className="close flex-absolute-center"
              onClick={ev => closeHandler(ev, index)}
              style={{
                color: FileTabs.tabCloseIconColor
              }}
            >
              &times;
            </div>
          </div>
        );
      })}
    </div>
  );
};
