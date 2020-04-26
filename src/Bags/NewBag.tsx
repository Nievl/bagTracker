import React, { useState } from "react";
import { Modal, Button, Form, Input } from "antd";
import { emptyBag } from "../store/reducers/bags";
import bagSetter from "../store/actions/bags";

const { _id, ...newBag } = emptyBag;

function NewBag() {
  const [bag, setBag] = useState(newBag);
  const onChange = (e: any) => {
    setBag({ ...bag, ...e });
    console.log(bag);
  };
  const onFinish = () => bagSetter.create(bag);
  return (
    <Modal
      visible
      title="Пользователь"
      footer={[
        <Button key="back" onClick={bagSetter.close}>
          Отмена
        </Button>,
        <Button key="submit" type="primary" htmlType="submit" form="newBag">
          Создать
        </Button>,
      ]}
    >
      <Form id="newBag" onValuesChange={onChange} labelCol={{ span: 4 }} wrapperCol={{ span: 14 }} onFinish={onFinish}>
        <Form.Item label="Имя" name="name">
          <Input />
        </Form.Item>
        <Form.Item label="Статус" name="status">
          <Input />
        </Form.Item>
        <Form.Item label="Описание" name="description">
          <Input />
        </Form.Item>
        <Form.Item label="Пользователь" name="userID">
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default NewBag;
