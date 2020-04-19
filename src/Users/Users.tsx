import React from "react";
// import ReactTable from "react-table";
import { connect } from "react-redux";

// import columns from "./columns";
import { Tstate } from "../store/reducers";
import { Tbag } from "../store/reducers/bags";
// import colorChecker from "../colorChecker";
// import customerSetter from "../storeActions/customer";
// import Search from "../CommonComponent/Search";

const Users = ({ list = [], loading }: { list: Tbag[]; loading: boolean }) => (
  <>
    <div className="search_bar">
      <div>{/* <Search action={customerSetter.filter} length={list.length} /> */}</div>
    </div>
    <div>dfjskdifh</div>
    {/* <ReactTable
      data={list}
      columns={columns}
      loading={loading}
      noDataText="Данных нет"
      previousText="Предыдущая"
      nextText="Следующая"
      pageText="Страница"
      ofText="из"
      rowsText="Строк"
      className="-striped -highlight"
    /> */}
  </>
);

export default connect((state: Tstate) => ({
  list: state.bags.bags,
  loading: state.bags.isLoading,
}))(Users);
