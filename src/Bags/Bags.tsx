import React from "react";
import { connect } from "react-redux";

import { Tstate } from "../store/reducers";
import { Tbag } from "../store/reducers/bags";
import { Table, Button } from "antd";
import columns from "./columns";
import { debounce } from "underscore";
import SearchBar from "../SearchBar/SearchBar";
import bagSetter from "../store/actions/bags";
import { PlusOutlined } from "@ant-design/icons";
import NewBag from "./NewBag";
import BagCard from "./BagCard";

function Bags({
  list = [],
  newCard,
  card,
  loading,
}: {
  list: Tbag[];
  newCard: boolean;
  card: boolean;
  loading: boolean;
}) {
  const onchange = debounce((e: any) => bagSetter.filter(e.target.value), 500);

  return (
    <>
      <div className="bar">
        <SearchBar
          action={(e: React.FormEvent<HTMLInputElement>) => {
            e.persist();
            onchange(e);
          }}
          length={list.length}
        />
        <Button icon={<PlusOutlined />} type="primary" onClick={bagSetter.openNew}>
          Добавить
        </Button>
      </div>
      <Table columns={columns} dataSource={list} loading={loading} rowKey="_id" />
      {newCard && <NewBag />}
      {card && <BagCard />}
    </>
  );
}

export default connect((state: Tstate) => ({
  list: state.bags.list,
  loading: state.bags.isLoading,
  card: state.bags.card,
  newCard: state.bags.newCard,
}))(Bags);
