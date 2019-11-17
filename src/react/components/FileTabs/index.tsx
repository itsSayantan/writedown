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
      type: actions.ON_FILE_SELECT,
      payload: filename
    });
  };
  return (
    <div className="filetabs-wrapper">
      {contextValues.openFiles.map((file, index) => {
        return (
          <div
            className={`pointer flex-vertical-center ${
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
            {file.unsaved ? (
              <div
                className="unsaved"
                style={{ backgroundColor: FileTabs.tabUnsavedIndicatorColor }}
              ></div>
            ) : null}
            <div className="name ellipsis">{file.name}</div>
            <div
              className="close flex-absolute-center"
              onClick={ev => closeHandler(ev, index)}
            >
              <svg
                fill={FileTabs.tabCloseIconColor || "#fff"}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16px"
                height="16px"
              >
                <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z" />
              </svg>
            </div>
          </div>
        );
      })}
    </div>
  );
};
