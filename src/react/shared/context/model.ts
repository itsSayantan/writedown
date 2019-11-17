export type ContextProps = {
  openFiles: { name: string; unsaved: boolean }[];
  currentFile: string;
  theme: ThemeType;
  totalOpenedFiles: number;
};

export type ApplicationFooterThemeType = {
  color: string;
  backgroundColor: string;
};
export type FileTabsTheme = {
  tabBackgroundColor: string;
  tabTextColor: string;
  tabCloseIconColor: string;
  tabUnsavedIndicatorColor: string;
  tabActiveBackgroundColor: string;
  tabSeparatorColor: string;
};

export type ThemeType = {
  ApplicationFooter: ApplicationFooterThemeType;
  FileTabs: FileTabsTheme;
};
