import React from "react";
import { Button } from "antd";
import bagSetter from "../store/actions/bags";

const columns = [
  {
    title: "Имя",
    dataIndex: "name",
    minWidth: 50,
  },
  {
    title: "Статус",
    dataIndex: "status",
    minWidth: 50,
  },
  {
    title: "Пользователь",
    dataIndex: "userID",
    minWidth: 50,
  },
  {
    title: "Описание",
    dataIndex: "description",
    minWidth: 50,
  },
  {
    title: "Операции",
    dataIndex: "",
    key: "x",
    render: e => (
      <>
        <a onClick={bagSetter.select} data-id={e._id}>
          Редактировать
        </a>
        {"\n"}
        <a onClick={bagSetter.delete} data-id={e._id}>
          Удалить
        </a>
      </>
    ),
  },
];

export default columns;
