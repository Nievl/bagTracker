import React from "react";
import { Tag } from "antd";
import bagSetter from "../store/actions/bags";
import { Tbag } from "../store/reducers/bags";
import { Tuser } from "../store/reducers/users";

const columns = [
  {
    title: "Имя",
    dataIndex: "name",
    minWidth: 50,
  },
  {
    title: "Статус",
    dataIndex: "status",
    render: (status: "active" | "closed") => {
      const color = status === "active" ? "green" : "red";
      const text = status === "active" ? "Активно" : "Закрыто";
      return <Tag color={color}>{text}</Tag>;
    },
  },
  {
    title: "Пользователь",
    dataIndex: "user",
    render: (user: Tuser[]) => user[0]?.name || "не назначен",
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
    render: (e: Tbag) => (
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
