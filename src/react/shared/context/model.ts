export type ContextProps = {
  openFiles: { name: string; unsaved: boolean }[];
  currentFile: string;
  theme: ThemeType;
};

export type ThemeType = {
  color: string;
  backgroundColor: string;
};
