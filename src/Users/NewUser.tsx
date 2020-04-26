import React, { useState } from "react";
import { Modal, Button, Form, Input } from "antd";
import { emptyUser } from "../store/reducers/users";
import userSetter from "../store/actions/users";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { _id, ...newUser } = emptyUser;

function NewUser() {
  const [user, setUser] = useState(newUser);
  const onChange = (e: any) => setUser({ ...user, ...e });

  const onFinish = () => userSetter.create(user);
  return (
    <Modal
      visible
      title="Пользователь"
      footer={[
        <Button key="back" onClick={userSetter.close}>
          Отмена
        </Button>,
        <Button key="submit" type="primary" htmlType="submit" form="newUser">
          Создать
        </Button>,
      ]}
    >
      <Form id="newUser" onValuesChange={onChange} labelCol={{ span: 4 }} wrapperCol={{ span: 14 }} onFinish={onFinish}>
        <Form.Item label="Имя" name="name">
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default NewUser;
