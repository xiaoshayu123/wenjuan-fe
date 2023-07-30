import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Typography } from "antd";
const { Title, Paragraph } = Typography;
import styles from "./styles/Home.module.scss";
const Home: FC = () => {
  const nav = useNavigate();
  return (
    <div>
      <div className={styles.container}>
        <Title>问卷调查 | 在线投票</Title>
        <Paragraph className={styles.info}>
          已累计创建问卷100份，发布问卷90份，收到答卷980份
        </Paragraph>
        <div>
          <Button type="primary" onClick={() => nav("/manage")}>
            开始使用
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
