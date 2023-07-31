import React, { FC, useState } from "react";
import styles from "../styles/Common.module.scss";
import QuestionCard from "../../components/QuestionCard";
import { Typography } from "antd";
const { Title } = Typography;
const List: FC = () => {
  const [questionList, setQuestionList] = useState([
    {
      _id: "1",
      title: "问题1",
      content: "问题1的内容",
      isPublished: true,
      isStar: false,
      answerCount: 5,
      createdAt: "3月10号 13：23",
    },
    {
      _id: "2",
      title: "问题2",
      content: "问题2的内容",
      isPublished: false,
      isStar: false,
      answerCount: 3,
      createdAt: "3月10号 13：23",
    },
    {
      _id: "3",
      title: "问题3",
      content: "问题3的内容",
      isPublished: false,
      isStar: true,
      answerCount: 4,
      createdAt: "3月10号 13：23",
    },
    {
      _id: "4",
      title: "问题4",
      content: "问题4的内容",
      isPublished: false,
      isStar: true,
      answerCount: 5,
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
        {questionList.length > 0 &&
          questionList.map((q) => {
            const { _id } = q;
            return <QuestionCard key={_id} {...q} />;
          })}
      </div>
      <div className={styles.footer}>上滑加载更多</div>
    </>
  );
};

export default List;
