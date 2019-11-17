export type ContextProps = {
  openFiles: { name: string; unsaved: boolean }[];
  currentFile: string;
  theme: ThemeType;
};

export type ApplicationFooterThemeType = {
  color: string;
  backgroundColor: string;
};

export type ThemeType = {
  color: string;
  backgroundColor: string;
  ApplicationFooter: ApplicationFooterThemeType;
};
