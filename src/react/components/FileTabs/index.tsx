import React from "react";
import { Props } from "./model";
import "./style.scss";
import { AppContext } from "@Shared/context";
import { actions } from "@Components/App/actions";
export const FileTabs = (props: Props) => {
  const contextValues = React.useContext(AppContext);
  const { dispatch } = props;
  const closeHandler = (index: number) => {
    dispatch({
      type: actions.ON_CLOSE_FILE,
      payload: index
    });
  };

  return (
    <div className="filetabs-wrapper">
      {contextValues.openFiles.map((file, index) => {
        return (
          <div className="ellipsis pointer flex-vertical-center" key={index}>
            <div className={`name ${file.unsaved ? "unsaved" : ""}`}>
              {file.name}
            </div>
            <div
              className="close flex-absolute-center"
              onClick={() => closeHandler(index)}
            >
              &times;
            </div>
          </div>
        );
      })}
    </div>
  );
};
