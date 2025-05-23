import React from "react";
import { useSelector } from "react-redux";
import NavWIthoutLinks from "../components/shared/navWIthoutLinks";
import Tutorial from "../components/chat/tutorial";
import Questions from "../components/chat/questions";
import CreditScore from "../components/chat/creditScore";

const Chat = ({ homepage }) => {
  const questionNo = useSelector((state) => state.chat.questionNo);
  return (
    <div className={`${homepage ? "" : "pt-28"}`}>
      {!homepage && <NavWIthoutLinks />}
      {questionNo === 0 ? (
        <Tutorial />
      ) : questionNo === 11 ? (
        <CreditScore />
      ) : (
        <Questions />
      )}
    </div>
  );
};

export default Chat;
