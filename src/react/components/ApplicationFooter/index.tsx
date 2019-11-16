import React from "react";

import { ApplicationFooterProps } from "./model";

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
    <>
      <div className="application-footer-wrapper">
        <div className="application-footer-item left">{leftChildren}</div>
        <div className="application-footer-item right">{rightChildren}</div>
      </div>
    </>
  );
};
