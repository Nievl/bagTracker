import React from "react";
import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";
import mainSetter from "../store/actions/mainSetter";
import { Tstate } from "../store/reducers";

function MessageWindow({ message, show, header }: { message: string; show: boolean; header: string }) {
  return (
    <Modal aria-labelledby="contained-modal-title" show={show} onHide={mainSetter.close}>
      <Modal.Header>
        <Modal.Title>{header}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button onClick={mainSetter.close}>Закрыть</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default connect((state: Tstate) => ({
  show: state.messageWindow.show,
  message: state.messageWindow.message,
  header: state.messageWindow.header,
}))(MessageWindow);
