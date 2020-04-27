import React, { useState } from "react";
import { connect } from "react-redux";
import { Tstate } from "../store/reducers";
import { Button, Modal, Input, Form } from "antd";
import { Tuser } from "../store/reducers/users";
import userSetter from "../store/actions/users";

function UserCard({ selected }: { selected: Tuser }) {
  const [user, setUser] = useState(selected);
  const onChange = (e: any) => setUser({ ...user, ...e });
  const onFinish = () => userSetter.edit(user);

  return (
    <Modal
      visible
      title="Пользователь"
      footer={[
        <Button key="back" onClick={userSetter.close}>
          Отмена
        </Button>,
        <Button key="submit" type="primary" htmlType="submit" form="editUser">
          Сохранить
        </Button>,
      ]}
    >
      <Form
        id="editUser"
        onValuesChange={onChange}
        initialValues={selected}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        onFinish={onFinish}
      >
        <Form.Item label="Имя" name="name">
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
}

const mapStateToProps = (state: Tstate) => ({ selected: state.users.selected });

export default connect(mapStateToProps)(UserCard);
