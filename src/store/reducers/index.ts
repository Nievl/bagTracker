import { combineReducers } from "redux";

import messageWindow, { TmessageWindow } from "./messageWindow";
import view, { Tview } from "./view";
import bags, { Tbags } from "./bags";

export default combineReducers({ messageWindow, view, bags });

export interface Tstate {
  messageWindow: TmessageWindow;
  view: Tview;
  bags: Tbags;
}
