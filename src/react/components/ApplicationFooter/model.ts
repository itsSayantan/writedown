import React from "react";

export type RenderPropObject = {
  component: () => JSX.Element;
  align: string;
};

export type ApplicationFooterProps = {
  render: Array<RenderPropObject>;
};
