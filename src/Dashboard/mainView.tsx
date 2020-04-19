import React from "react";
import Bags from "../Bags/Bags";
import Users from "../Users/Users";

const mainView: { [key: string]: JSX.Element } = {
  users: <Users />,
  bags: <Bags />,
};

export default mainView;
