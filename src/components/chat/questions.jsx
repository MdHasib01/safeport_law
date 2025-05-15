import React, { useEffect, useState } from "react";
import { GoHubot } from "react-icons/go";
import { GrNext } from "react-icons/gr";
import { IoMdSend } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
  setConversation,
  setQuestionNo,
  setSelectedQuestion,
} from "../../store/features/chat/slice";

const questions = [
  "Awesome! What’s the exact name of your business?",
  "What is your business address?",
  "Got it. And where’s your business located? Please include street, city, and ZIP code.",
  "Great! What type of business structure do you have? For example: LLC, Corporation, Sole Proprietorship, or something else?",
  "When did you start or register this business?",
  "Do you have an EIN (Employer Identification Number)? If so, please share it here. If not, feel free to skip",
  "Thanks! Can you share your approximate annual revenue (or a rough range) for the last year?",
  "What industry best describes your business? For example: Retail, Construction, Consulting, etc.",
  "Perfect. Lastly, do you give us permission to check your business credit score with our trusted partner, Creditsafe?",
  "Great! We’ll grab your business credit info now. Hang tight, this usually just takes a few seconds.",
];
const Questions = () => {
  const dispatch = useDispatch();

  const questionNo = useSelector((state) => state.chat.questionNo);
  const selectedQuestion = useSelector((state) => state.chat.selectedQuestion);
  const conversation = useSelector((state) => state.chat.conversation);
  const firstName = "Raufun Khan Shishir";
  const firstQuestion = `Hey there, ${firstName}! I see you’re interested in checking your business credit score. Ready to get started?`;

  const [typeMessage, setTypeMessage] = useState("");
  useEffect(() => {
    questionNo === 1 && dispatch(setSelectedQuestion(firstQuestion));
    console.log(selectedQuestion);
    let interval;
    if (selectedQuestion) {
      interval = setInterval(() => {
        setTypeMessage(selectedQuestion?.substring(0, typeMessage.length + 1));
      }, 20);
    }
    return () => clearInterval(interval);
  }, [selectedQuestion, typeMessage, dispatch]);
  const [answer, setAnswer] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setAnswer("");
    questionNo < 11 && dispatch(setQuestionNo(questionNo + 1));
    questions[questionNo - 1] &&
      dispatch(setSelectedQuestion(questions[questionNo - 1]));
    setTypeMessage("");
    dispatch(
      setConversation({
        question: questionNo === 1 ? firstQuestion : questions[questionNo - 1],
        answer,
      })
    );
    questionNo === 10 && console.log(conversation);
  };
  return (
    <div className="container">
      <h2 className="text-3xl font-bold  text-emerald-700 text-center mt-4 mb-2">
        Welcome to Safeport Law
      </h2>
      <p className="text-xl text-center mb-20 text-[#bf5432]">
        Confirm Your Identity and Get Your Business Credit Score
      </p>
      <h2 className="text-xl text-emerald-700 font-bold my-8">
        Question remaining: {10 - questionNo}
      </h2>
      <div className="flex justify-end ">
        <div className="flex gap-2">
          <h2 className="bg-emerald-100 border border-emerald-500 py-2 px-4 rounded-3xl min-w-40 max-w-sm md:max-w-md">
            {typeMessage}
          </h2>
          <GoHubot className="w-10 h-10 bg-emrald-100 text-emerald-500 border border-emerald-200 rounded-full p-1" />
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2 mt-12">
          <textarea
            required
            cols={"30"}
            rows={"5"}
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="bg-emerald-100 border border-emerald-500 py-2 px-4 rounded-3xl"
            type="text"
            placeholder="Type your answer here"
          />
          {/* <button className="btn-secondary w-30 flex items-center gap-2 justify-center">
          Send <IoMdSend />
        </button> */}
        </div>
        <div className="flex justify-center my-12">
          <button
            type="submit"
            className={`btn-secondary flex items-center gap-2 justify-center ${
              questionNo === 10 && "hidden"
            }`}
          >
            Next Question <GrNext />
          </button>
          <button
            type="submit"
            className={`btn-primary  w-32 items-center gap-2 justify-center ${
              questionNo === 10 ? "flex" : "hidden"
            }`}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Questions;
