import { ContextProps, ThemeType } from "@Shared/context/model";
import { actions } from "./actions";
import { DispatchType } from "./model";

export function reducer(
  state: ContextProps,
  action: DispatchType
): ContextProps {
  switch (action.type) {
    case actions.UPDATE_THEME: {
      return {
        ...state,
        theme: action.payload as ThemeType
      };
    }
    case actions.UPDATE_THEME: {
      return {
        ...state,
        currentFile: action.payload as string
      };
    }
    default:
      return state;
  }
}
