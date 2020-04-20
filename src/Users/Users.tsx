import React from "react";
import { connect } from "react-redux";

// import columns from "./columns";
import { Tstate } from "../store/reducers";
import { Tuser } from "../store/reducers/users";

// import Search from "../CommonComponent/Search";

const Users = ({ list = [], loading }: { list: Tuser[]; loading: boolean }) => (
  <>
    <div className="search_bar">
      <div>{/* <Search action={customerSetter.filter} length={list.length} /> */}</div>
    </div>
    <div>Users</div>

  </>
);

export default connect((state: Tstate) => ({
  list: state.users.users,
  loading: state.users.isLoading,
}))(Users);
