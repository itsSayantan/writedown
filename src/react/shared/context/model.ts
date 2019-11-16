export type ContextProps = {
  openFiles: string[];
  currentFile: string;
  theme: ThemeType;
};

export type ThemeType = {
  color: string;
  backgroundColor: string;
};
