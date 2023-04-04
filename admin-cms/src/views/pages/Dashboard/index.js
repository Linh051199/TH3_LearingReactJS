// import { PieChartOutlined, UserOutlined } from "@ant-design/icons";
// import { Layout, Menu } from "antd";
// import { useState } from "react";
// import { Link } from "react-router-dom";

// import routesConfig from "../../../config/routes";
// import "./Dashboard.css";

// const { Sider } = Layout;

// function getItem(label, key, icon, children) {
//   return {
//     key,
//     icon,
//     children,
//     label,
//   };
// }

// const items = [
//   getItem(
//     <Link className="link-routes" to={routesConfig.dashboard}>
//       Dashboard
//     </Link>,
//     "1",
//     <PieChartOutlined />
//   ),
//   getItem("Students", "sub1", <UserOutlined />, [
//     getItem(
//       <Link className="link-routes" to={routesConfig.dashboard}>
//         New students
//       </Link>,
//       "3"
//     ),
//     getItem(
//       <Link className="link-routes" to={routesConfig.dashboard}>
//         List Student
//       </Link>,
//       "4"
//     ),
//   ]),
// ];

function Dashboard() {
  // const [collapsed, setCollapsed] = useState(false);

  // return (
  //   <Layout
  //     style={{
  //       minHeight: "100vh",
  //     }}
  //   >
  //     <Sider
  //       collapsible
  //       collapsed={collapsed}
  //       onCollapse={(value) => setCollapsed(value)}
  //     >
  //       <div
  //         style={{
  //           height: 32,
  //           margin: 16,
  //           background: "rgba(255, 255, 255, 0.2)",
  //         }}
  //       />
  //       <Menu
  //         theme="dark"
  //         defaultSelectedKeys={["1"]}
  //         mode="inline"
  //         items={items}
  //       />
  //     </Sider>
  //     <Layout className="site-layout">
  //       <div>
  //         <h2>Hello</h2>
  //       </div>
  //       {/* <Header
  //         style={{
  //           padding: 0,
  //           background: colorBgContainer,
  //         }}
  //       >

  //       </Header> */}
  //       {/* <Content
  //         style={{
  //           margin: "0 16px",
  //         }}
  //       >
  //         <Breadcrumb
  //           style={{
  //             margin: "16px 0",
  //           }}
  //         >
  //           <Breadcrumb.Item>User</Breadcrumb.Item>
  //           <Breadcrumb.Item>Bill</Breadcrumb.Item>
  //         </Breadcrumb>
  //         <div
  //           style={{
  //             padding: 24,
  //             minHeight: 360,
  //             background: colorBgContainer,
  //           }}
  //         >
  //           Bill is a cat.
  //         </div>
  //       </Content> */}
  //       {/* <Footer
  //         style={{
  //           textAlign: "center",
  //         }}
  //       >
  //         Ant Design ©2023 Created by Ant UED
  //       </Footer> */}
  //     </Layout>
  //   </Layout>
  // );

  return <h2>dashboard</h2>;
}

export default Dashboard;
