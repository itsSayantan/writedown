import * as fs from "fs";
import { ContextProps, SettingsType, ThemeType } from "./model";
import { Constants } from "./constants";

const settingsFilePath = Constants.WD_SETTINGS_FILE_PATH;
const themesDir = Constants.WD_THEMES_DIR;

let settings: SettingsType;
let themes: ThemeType;

if (fs.existsSync(settingsFilePath)) {
  settings = JSON.parse(fs.readFileSync(settingsFilePath, "utf-8"));
  if (fs.existsSync(themesDir + settings.theme + ".json")) {
    themes = JSON.parse(
      fs.readFileSync(themesDir + settings.theme + ".json", "utf-8")
    );
  } else {
    throw new Error(
      `ERR:${themesDir + settings.theme} .json file could not be found.`
    );
  }
} else {
  throw new Error(`ERR:settings.json could not be found.`);
}

export function getDefaultContextValues(): ContextProps {
  return {
    theme: themes,
    currentFile: "Untitled-1",
    openFiles: [
      {
        name: "Untitled-1",
        unsaved: true
      }
    ],
    totalOpenedFiles: 1,
    WDEDefaultOptions: {
      lineBackground: "black",
      lineForeground: "white",
      focussedLineBackground: "white",
      focussedLineForeground: "black",
      editorBackground: "blue",
      editorForeground: "white",
      cursorColor: "rgba(255,0,0,1)",
      onChange: (ev: any) => {
        console.log(ev.getPlainTextContent());
      }
    }
  };
}
