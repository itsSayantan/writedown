import { MenuItemConstructorOptions } from "electron";

const applicationMenuItems: Array<MenuItemConstructorOptions> = [
  {
    type: "normal",
    label: "New",
    toolTip: "Create a new file"
  },
  {
    type: "normal",
    label: "Save",
    toolTip: "Save the currently focussed file"
  },
  {
    type: "separator"
  },
  {
    type: "normal",
    label: "Quit",
    toolTip: "Quit the application",
    role: "quit"
  }
];

export { applicationMenuItems };
