export type ContextProps = {
  openFiles: { name: string; unsaved: boolean }[];
  currentFile: string;
  theme: ThemeType;
  totalOpenedFiles: number;
  WDEDefaultOptions: {
    lineBackground: string;
    lineForeground: string;
    focussedLineBackground: string;
    focussedLineForeground: string;
    editorBackground: string;
    editorForeground: string;
    cursorColor: string;
    onChange: (ev: any) => void;
  };
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

export type SettingsType = {
  theme: string;
};
