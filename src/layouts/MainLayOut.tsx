import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import { Layout, Space } from "antd";
import styles from "./styles/MainLayOut.module.scss";
const { Header, Footer, Sider, Content } = Layout;
import Logo from "../components/Logo";
import UserInfo from "../components/UserInfo";
const MainLayOut: FC = () => {
  return (
    <Layout>
      <Header className={styles.header}>
        <div className={styles.left}>
          <Logo></Logo>
        </div>
        <div className={styles.right}>
          <UserInfo />
        </div>
      </Header>
      <Content className={styles.main}>
        <Outlet />
      </Content>
      <Footer className={styles.footer}>小慕问卷 &copy;2023-刘肇川</Footer>
    </Layout>
  );
};

export default MainLayOut;
