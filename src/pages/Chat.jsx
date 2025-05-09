import React from "react";
import { useSelector } from "react-redux";
import NavWIthoutLinks from "../components/shared/navWIthoutLinks";
import Tutorial from "../components/chat/tutorial";
import Questions from "../components/chat/questions";

const Chat = () => {
  const questionNo = useSelector((state) => state.chat.questionNo);
  return (
    <div className="pt-28">
      <NavWIthoutLinks />
      {questionNo === 0 ? <Tutorial /> : <Questions />}
    </div>
  );
};

export default Chat;
