import React from "react";
import { connect } from "react-redux";
import { Table, Button } from "antd";

import columns from "./columns";
import { Tstate } from "../store/reducers";
import { Tuser } from "../store/reducers/users";
import SearchBar from "../SearchBar/SearchBar";
import userSetter from "../store/actions/users";
import { PlusOutlined } from "@ant-design/icons";
import NewUser from "./NewUser";
import UserCard from "./UserCard";

function Users({
  list = [],
  newUser,
  userCard,
  loading,
}: {
  list: Tuser[];
  newUser: boolean;
  userCard: boolean;
  loading: boolean;
}) {
  return (
    <>
      <div className="bar">
        <SearchBar action={userSetter.filter} length={list.length} />
        <Button icon={<PlusOutlined />} type="primary" onClick={userSetter.openNew}>
          Добавить
        </Button>
      </div>
      <Table columns={columns} dataSource={list} loading={loading} rowKey="_id" />
      {newUser && <NewUser />}
      {userCard && <UserCard />}
    </>
  );
}

export default connect((state: Tstate) => ({
  list: state.users.list,
  loading: state.users.isLoading,
  newUser: state.users.newCard,
  userCard: state.users.card,
}))(Users);
