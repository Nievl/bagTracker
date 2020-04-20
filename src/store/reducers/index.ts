import { combineReducers } from "redux";

import messageWindow, { TmessageWindow } from "./messageWindow";
import view, { Tview } from "./view";
import bags, { Tbags } from "./bags";
import users, { Tusers } from "./users";

export default combineReducers({ messageWindow, view, bags, users });

export interface Tstate {
  messageWindow: TmessageWindow;
  view: Tview;
  bags: Tbags;
  users: Tusers;
}
