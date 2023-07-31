import React, { FC, useState } from "react";
import styles from "../styles/Common.module.scss";
import { Typography, Empty, Table, Tag, Space, Button, Modal } from "antd";
const { confirm } = Modal;
const { Title } = Typography;
import { ExclamationCircleOutlined } from "@ant-design/icons";
const Trash: FC = () => {
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
  function del() {
    confirm({
      title: "确定彻底删除问卷?",
      icon: <ExclamationCircleOutlined />,
      content: "删除后不可以找回",
      onOk: () => alert(`删除 ${selectedIdx}`),
    });
  }
  const tableColumns = [
    {
      title: "标题",
      dataIndex: "title",
    },
    {
      title: "是否发布",
      dataIndex: "isPublished",
      render: (isPublished: boolean) => {
        return isPublished ? (
          <Tag color="processing">已发布</Tag>
        ) : (
          <Tag>未发布</Tag>
        );
      },
    },
    {
      title: "答卷",
      dataIndex: "answerCount",
    },
    {
      title: "创建时间",
      dataIndex: "createdAt",
    },
  ];
  const [selectedIdx, setSelectedIdx] = useState<string[]>([]);

  const tableItem = (
    <>
      <Space>
        <Button type="primary" disabled={selectedIdx.length === 0}>
          恢复
        </Button>
        <Button danger disabled={selectedIdx.length === 0} onClick={del}>
          彻底删除
        </Button>
      </Space>
      <Table
        dataSource={questionList}
        columns={tableColumns}
        pagination={false}
        rowKey={(q) => q._id}
        rowSelection={{
          type: "checkbox",
          onChange: (selectedRowKeys) => {
            setSelectedIdx(selectedRowKeys as string[]);
          },
        }}
      />
    </>
  );
  return (
    <>
      <div>
        <div className={styles.header}>
          <div className={styles.left}>
            <Title level={3}>回收站</Title>
          </div>
          <div className={styles.right}>搜索</div>
        </div>
        <div className={styles.container}>
          {questionList.length === 0 && <Empty description="暂无数据" />}
          {questionList.length > 0 && tableItem}
        </div>
        <div className={styles.footer}>分页</div>
      </div>
    </>
  );
};

export default Trash;
