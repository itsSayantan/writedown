import React from "react";
import WriteDownEditor from "writedown-editor";

import { Props } from "./model";
import { AppContext } from "@Shared/context";
import "./style.scss";

export const ContentArea = (props: Props) => {
  const contextValues = React.useContext(AppContext);
  const { dispatch } = props;
  return <WriteDownEditor options={contextValues.WDEDefaultOptions} />;
};
