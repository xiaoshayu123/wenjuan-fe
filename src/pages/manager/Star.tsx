import React, { FC, useState } from "react";
import styles from "../styles/Common.module.scss";
import QuestionCard from "../../components/QuestionCard";
import { Typography, Empty } from "antd";
const { Title } = Typography;
const List: FC = () => {
  const [questionList, setQuestionList] = useState([
    {
      _id: "3",
      title: "问题3",
      content: "问题3的内容",
      isPublished: false,
      isStar: false,
      answerCount: 4,
      createdAt: "3月10号 13：23",
    },
  ]);
  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>我的问卷</Title>
        </div>
        <div className={styles.right}>搜索</div>
      </div>
      <div className={styles.content}>
        {/* 问卷列表*/}
        {questionList.length === 0 && <Empty description="暂无数据" />}
        {questionList.length > 0 &&
          questionList.map((q) => {
            const { _id } = q;
            return <QuestionCard key={_id} {...q} />;
          })}
      </div>
      <div className={styles.footer}>分页</div>
    </>
  );
};

export default List;
