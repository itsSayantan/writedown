import React from "react";

import { ApplicationFooterProps } from "./model";
import { AppContext } from "@Shared/context";

import "./style.scss";

export const ApplicationFooter = (props: ApplicationFooterProps) => {
  const left: Array<() => JSX.Element> = [];
  const right: Array<() => JSX.Element> = [];

  props?.render?.forEach(r => {
    r.align.toLowerCase() === "left"
      ? left.push(r.component)
      : right.push(r.component);
  });

  const leftChildren: Array<JSX.Element> = left.map((l, i) => (
    <span key={i}>{l()}</span>
  ));
  const rightChildren: Array<JSX.Element> = right.map((l, i) => (
    <span key={i}>{l()}</span>
  ));

  return (
    <AppContext.Consumer>
      {val => {
        const af = val?.theme?.ApplicationFooter;
        return (
          <div
            className="application-footer-wrapper"
            style={{
              backgroundColor: af?.backgroundColor
            }}
          >
            <div
              className="application-footer-item left"
              style={{
                color: af?.color
              }}
            >
              {leftChildren}
            </div>
            <div
              className="application-footer-item right"
              style={{
                color: af?.color
              }}
            >
              {rightChildren}
            </div>
          </div>
        );
      }}
    </AppContext.Consumer>
  );
};
