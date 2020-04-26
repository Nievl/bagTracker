import React, { useState } from "react";
import { connect } from "react-redux";
import { Tstate } from "../store/reducers";
import { Tbag } from "../store/reducers/bags";
import { Button, Modal } from "antd";
import bagSetter from "../store/actions/bags";

function BagCard({ selected }: { selected: Tbag }) {
  const [bag, setBag] = useState({ ...selected });
  return (
    <Modal
      visible
      title="Пользователь"
      footer={[
        <Button key="back" onClick={bagSetter.close}>
          Отмена
        </Button>,
        <Button key="submit" type="primary">
          Сохранить
        </Button>,
      ]}
    >
      {JSON.stringify(bag)}
    </Modal>
  );
}

const mapStateToProps = (state: Tstate) => ({ selected: state.bags.selected });

export default connect(mapStateToProps)(BagCard);
