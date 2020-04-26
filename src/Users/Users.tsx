import React from "react";
import { connect } from "react-redux";
import { Table } from "antd";

import columns from "./columns";
import { Tstate } from "../store/reducers";
import { Tuser } from "../store/reducers/users";
import SearchBar from "../SearchBar/SearchBar";
import userSetter from "../store/actions/users";

// import Search from "../CommonComponent/Search";

const Users = ({ list = [], loading }: { list: Tuser[]; loading: boolean }) => (
  <>
    <div className="bar">
      <SearchBar action={userSetter.filter} length={list.length} />
    </div>
    <Table columns={columns} dataSource={list} loading={loading} rowKey="_id" />
  </>
);

export default connect((state: Tstate) => ({
  list: state.users.users,
  loading: state.users.isLoading,
}))(Users);
