import React from "react";
import userSetter from "../store/requests/users";
import { Tuser } from "../store/reducers/users";

const columns = [
  {
    title: "Имя",
    dataIndex: "name",
    minWidth: 50,
  },
  {
    title: "Операции",
    dataIndex: "",
    key: "x",
    render: (e: Tuser) => (
      <>
        <a onClick={userSetter.select} data-id={e._id}>
          Редактировать
        </a>
        {"\n"}
        <a onClick={userSetter.delete} data-id={e._id}>
          Удалить
        </a>
      </>
    ),
  },
];

export default columns;
