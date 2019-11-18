import React from "react";

import { LineNumbersProps } from "./model";

import "./style.scss";

export const LineNumbers = (props: LineNumbersProps) => {
  let lineNumbersElements = [];

  if (props?.numberOfLines) {
    let n = props?.numberOfLines;

    // n cannot be <= 0 as the editor will show atleast 1 blank like always
    n = !n ? 1 : n;

    for (let i = 1; i <= n; i++) {
      lineNumbersElements.push(
        <div className="line-number-element" key={i}>
          {i}
        </div>
      );
    }
  }

  React.useEffect(() => {
    props?.width?.setLineNumbersWidth(
      (document.querySelector(".line-number-wrapper") as HTMLDivElement)
        .offsetWidth
    );
  }, []);

  return <div className="line-number-wrapper">{lineNumbersElements}</div>;
};
