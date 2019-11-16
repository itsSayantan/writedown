import { ContextProps } from "./model";

export function getDefaultContextValues(): ContextProps {
  return {
    theme: {
      backgroundColor: "#fff",
      color: "#000"
    },
    currentFile: "",
    openFiles: []
  };
}
