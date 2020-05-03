import React from "react";
import mainSetter from "../store/actions/mainSetter";
import { Menu } from "antd";
import { PieChartOutlined, DesktopOutlined, ContainerOutlined } from "@ant-design/icons";

const selectHandler = ({ key }: { key: string }) => mainSetter.change(key);

function MainMenu() {
  return (
    <Menu defaultSelectedKeys={["bags"]} mode="inline" className="main__menu" onSelect={selectHandler}>
      <Menu.Item key="bags">
        <PieChartOutlined />
        <span>Баги</span>
      </Menu.Item>
      <Menu.Item key="users">
        <DesktopOutlined />
        <span>Пользователи</span>
      </Menu.Item>
      <Menu.Item key="3" disabled>
        <ContainerOutlined />
        <span>reserved</span>
      </Menu.Item>
    </Menu>
  );
}

export default MainMenu;
