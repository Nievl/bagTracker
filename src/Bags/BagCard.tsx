import React, { useState } from "react";
import { connect } from "react-redux";
import { Tstate } from "../store/reducers";
import { Tbag } from "../store/reducers/bags";
import { Button, Modal, Input, Select, Form } from "antd";
import bagSetter from "../store/actions/bags";
const { Option } = Select;

function BagCard({ selected }: { selected: Tbag }) {
  const [bag, setBag] = useState(selected);
  const onChange = (e: any) => setBag({ ...bag, ...e });
  const onFinish = () => bagSetter.edit(bag);

  return (
    <Modal
      visible
      title="Пользователь"
      footer={[
        <Button key="back" onClick={bagSetter.close}>
          Отмена
        </Button>,
        <Button key="submit" type="primary" htmlType="submit" form="editBag">
          Сохранить
        </Button>,
      ]}
    >
      <Form
        id="editBag"
        onValuesChange={onChange}
        initialValues={selected}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        onFinish={onFinish}
      >
        <Form.Item label="Имя" name="name">
          <Input />
        </Form.Item>
        <Form.Item label="Статус" name="status">
          <Select>
            <Option value="active">активна</Option>
            <Option value="closed">закрыто</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Пользователь" name="userID">
          <Input />
        </Form.Item>
        <Form.Item label="Описание" name="description">
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
}

const mapStateToProps = (state: Tstate) => ({ selected: state.bags.selected });

export default connect(mapStateToProps)(BagCard);
