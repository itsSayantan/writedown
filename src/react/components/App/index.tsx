import React from "react";
import "./style.scss";
import "@Shared/styles/commons.scss";
import { ContentArea } from "@Components/ContentArea";
import { ApplicationFooter } from "@Components/ApplicationFooter";

export const App = () => {
  return (
    <div>
      <ContentArea />
      <ApplicationFooter
        render={[
          { component: () => <div>Gitlens</div>, align: "left" },
          { component: () => <div>Live Share</div>, align: "left" },
          { component: () => <div>Notification</div>, align: "right" },
          { component: () => <div>Prettier</div>, align: "right" },
          { component: () => <div>Line 40 Col 50</div>, align: "right" }
        ]}
      />
    </div>
  );
};
