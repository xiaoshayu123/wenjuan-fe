import React, { FC } from "react";
import { Space, Typography } from "antd";
import { Link } from "react-router-dom";
import { FormOutlined } from "@ant-design/icons";
const { Title } = Typography;
import styles from "./styles/Logo.module.scss";
const Logo: FC = () => {
  return (
    <div className={styles.container}>
      <Link to="/">
        <Space>
          <Title>
            <FormOutlined />
          </Title>
          <Title>小慕问卷</Title>
        </Space>
      </Link>
    </div>
  );
};
export default Logo;
