import {
  UserOutlined,
  LoginOutlined,
  DashboardOutlined,
  OrderedListOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";

import routesConfig from "../../config/routes";
import "./DefaultLayout.css";

const { Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem(
    <Link className="link-routes" to={routesConfig.login}>
      Login
    </Link>,
    "1",
    <LoginOutlined />
  ),
  getItem(
    <Link className="link-routes" to={routesConfig.dashboard}>
      Dashboard
    </Link>,
    "2",
    <DashboardOutlined />
  ),
  getItem("Students", "sub1", <UserOutlined />, [
    getItem(
      <Link className="link-routes" to={routesConfig.dashboard}>
        New students
      </Link>,
      "3",
      <UserAddOutlined />
    ),
    getItem(
      <Link className="link-routes" to={routesConfig.dashboard}>
        List Student
      </Link>,
      "4",
      <OrderedListOutlined />
    ),
  ]),
];

function DefaultLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <div>{children}</div>
      </Layout>
    </Layout>
  );
}

export default DefaultLayout;
