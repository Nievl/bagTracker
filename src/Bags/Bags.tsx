import React from "react";
import { connect } from "react-redux";

// import columns from "./columns";
import { Tstate } from "../store/reducers";
import { Tbag } from "../store/reducers/bags";
import { Table } from "antd";
import columns from "./columns";
import SearchBar from "../SearchBar/SearchBar";
import bagSetter from "../store/actions/bags";
// import customerSetter from "../storeActions/customer";
// import Search from "../CommonComponent/Search";

const Bags = ({ list = [], loading }: { list: Tbag[]; loading: boolean }) => (
  <>
    <SearchBar action={bagSetter.filter} length={list.length} />
    <Table columns={columns} dataSource={list} loading={loading} rowKey="_id" />
  </>
);

export default connect((state: Tstate) => ({
  list: state.bags.bags,
  loading: state.bags.isLoading,
}))(Bags);
