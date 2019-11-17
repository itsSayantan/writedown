import { ContextProps } from "./model";

export function getDefaultContextValues(): ContextProps {
  return {
    theme: {
      backgroundColor: "#fff",
      color: "#000",
      ApplicationFooter: {
        backgroundColor: "#fff",
        color: "#000"
      }
    },
    currentFile: "Untitled-1",
    openFiles: [
      {
        name: "Untitled-1",
        unsaved: true
      }
    ]
  };
}
