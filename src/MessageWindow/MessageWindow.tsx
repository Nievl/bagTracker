import React from "react";
import { Modal, Button } from "antd";
import { connect } from "react-redux";
import mainSetter from "../store/actions/mainSetter";
import { Tstate } from "../store/reducers";

function MessageWindow({ message, show, header }: { message: string; show: boolean; header: string }) {
  return (
    <Modal title={header} visible={show} footer={<Button onClick={mainSetter.close}>Закрыть</Button>}>
      <p>{message}</p>
    </Modal>
  );
}

export default connect((state: Tstate) => ({
  show: state.messageWindow.show,
  message: state.messageWindow.message,
  header: state.messageWindow.header,
}))(MessageWindow);
