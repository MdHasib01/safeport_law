import React from "react";
import { useSelector } from "react-redux";
import NavWIthoutLinks from "../components/shared/navWIthoutLinks";
import Tutorial from "../components/chat/tutorial";

const Chat = () => {
  const questionNo = useSelector((state) => state.chat.questionNo);
  return (
    <div className="bg-emerald-100 pt-28">
      <NavWIthoutLinks />
      {questionNo === 0 && <Tutorial />}
    </div>
  );
};

export default Chat;
