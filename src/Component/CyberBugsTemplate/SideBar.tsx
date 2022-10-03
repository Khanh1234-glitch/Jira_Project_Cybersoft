import React, { useState } from "react";
import {
  MenuFoldOutlined,
  UploadOutlined,
  SearchOutlined,
  PlusOutlined
} from "@ant-design/icons";
import { Layout, Menu } from "antd";

const { Header, Sider, Content } = Layout;

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ height: "100%" }}
      > 
        <div
          className="text-right mr-2"
          onClick={() => setCollapsed(!collapsed)}
          style={{ cursor: "pointer", color: "#fff",fontSize:"20px" }}
        >
          <MenuFoldOutlined />
        </div>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <PlusOutlined />,
              label: "Create issue",
            },
            {
              key: "2",
              icon: <SearchOutlined />,
              label: "Search",
            },
          ]}
        />
      </Sider>
    </div>
  );
};

export default SideBar;
