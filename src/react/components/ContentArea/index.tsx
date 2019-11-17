import React from "react";
import { Props } from "./model";
import { AppContext } from "@Shared/context";
import "./style.scss";

export const ContentArea = (props: Props) => {
  const contextValues = React.useContext(AppContext);
  const { dispatch } = props;
  return <div className="content-area-wrapper" contentEditable={true}></div>;
};
