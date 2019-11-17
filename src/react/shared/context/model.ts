export type ContextProps = {
  openFiles: string[];
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
