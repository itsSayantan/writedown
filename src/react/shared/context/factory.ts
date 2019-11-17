import { ContextProps } from "./model";

export function getDefaultContextValues(): ContextProps {
  return {
    theme: {
      ApplicationFooter: {
        backgroundColor: "#202417",
        color: "#F2E7E1"
      },
      FileTabs: {
        tabBackgroundColor: "#202417",
        tabTextColor: "#F2E7E1",
        tabCloseIconColor: "#F2E7E1",
        tabUnsavedIndicatorColor: "#F2E7E1",
        tabActiveBackgroundColor: "#696969",
        tabSeparatorColor: "#59595A"
      }
    },
    currentFile: "Untitled-1",
    openFiles: [
      {
        name: "Untitled-1",
        unsaved: true
      }
    ],
    totalOpenedFiles: 1
  };
}
