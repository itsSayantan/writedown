import React from "react";
import { Props } from "./model";
import "./style.scss";
import { AppContext } from "@Shared/context";
export const FileTabs = (props: Props) => {
  const contextValues = React.useContext(AppContext);
  return (
    <div className="filetabs-wrapper">
      {contextValues.openFiles.map(file => {
        return (
          <div
            className="ellipsis pointer flex-vertical-center"
            key={file.name}
          >
            <div className={`name ${file.unsaved ? "unsaved" : ""}`}>
              {file.name}
            </div>
            <div className="close flex-absolute-center">&times;</div>
          </div>
        );
      })}
    </div>
  );
};
