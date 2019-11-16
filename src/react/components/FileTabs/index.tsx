import React from "react";
import { Props } from "./model";
import "./style.scss";
import { AppContext } from "@Shared/context";
export const FileTabs = (props: Props) => {
  const contextValues = React.useContext(AppContext);
  return (
    <div className="filetabs-wrapper">
      {contextValues.openFiles.map(fileName => {
        return (
          <div className="ellipsis pointer" key={fileName}>
            {fileName}
          </div>
        );
      })}
    </div>
  );
};
