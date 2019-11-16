import { ThemeType } from "@Shared/context/model";

export type DispatchType = {
  type: number;
  payload: ThemeType | string;
};
