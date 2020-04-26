import React, { useEffect } from "react";
import Menu from "./Menu";
import { connect } from "react-redux";

import MessageWindow from "../MessageWindow/MessageWindow";
import { Tstate } from "../store/reducers";
import mainView from "./mainView";
import bagSetter from "../store/actions/bags";
import userSetter from "../store/actions/users";

function Dashboard({ name }: { name: string }) {
  useEffect(() => {
    bagSetter.get();
    userSetter.get();
  }, []);

  return (
    <main>
      <Menu />
      <div className="main_board">{mainView[name]}</div>
      <MessageWindow />
    </main>
  );
}

export default connect((state: Tstate) => ({ name: state.view.view }))(Dashboard);
