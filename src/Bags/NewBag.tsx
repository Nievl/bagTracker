import React, { useState } from "react";
import { Modal, Button } from "antd";
import { emptyBag } from "../store/reducers/bags";

function NewBag() {
  const [bag, setBag] = useState({ ...emptyBag });
  return (
    <Modal
      visible
      title="Пользователь"
      footer={[
        <Button key="back">Отмена</Button>,
        <Button key="submit" type="primary">
          Создать
        </Button>,
      ]}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
}

export default NewBag;
