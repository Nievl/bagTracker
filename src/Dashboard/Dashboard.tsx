import React, { useEffect } from "react";
import Menu from "./Menu";
import { connect } from "react-redux";
// import viewSetter from "../../store/provider/viewSetter";
// import certSetter from "../../store/provider/certSetter";
// import serviceSetter from "../../store/provider/serviceSetter";
// import proposalSetter from "../../store/provider/proposalSetter";
// import mainView from "./mainView";
import MessageWindow from "../MessageWindow/MessageWindow";
import { Tstate } from "../store/reducers";
import mainView from "./mainView";

function Dashboard({ name }: { name: string }) {
  useEffect(() => {
    // certSetter.getAll();
    // viewSetter.addInfo();
    // proposalSetter.add();
    // serviceSetter.add();
  }, []);

  // const { name = "account" } = _view;
  // const { message, header } = _main;

  return (
    <main>
      <Menu />
      {mainView[name]}
      <MessageWindow />
    </main>
  );
}

export default connect((state: Tstate) => ({ name: state.view.view }))(Dashboard);
