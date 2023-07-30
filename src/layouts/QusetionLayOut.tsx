import React, { FC } from "react";
import { Outlet } from "react-router-dom";
const QuestionLayOut: FC = () => {
  return (
    <>
      <div>QuestionLayOut header</div>
      <div>
        <Outlet />
      </div>
      <div>QuestionLayOut footer</div>
    </>
  );
};

export default QuestionLayOut;
