import React, { useEffect, useState } from "react";
import { GoHubot } from "react-icons/go";
import { GrNext } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { setQuestionNo, setTutorial } from "../../store/features/chat/slice";

const Tutorial = () => {
  const tutorial = useSelector((state) => state.chat.tutorial);
  const dispatch = useDispatch();
  const message = "Hey, How are you?";
  const [typeMessage, setTypeMessage] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      setTypeMessage(message.slice(0, typeMessage.length + 1));
    }, 100);
    return () => clearInterval(interval);
  }, [typeMessage]);
  return (
    <div className="">
      <div className="bg-gray-700 opacity-70 absolute top-0 left-0 z-50 h-screen w-screen"></div>
      <div className="container">
        <div className="flex justify-center mb-20">
          <h2 className="text-xl border  border-emerald-200 py-2 px-4 rounded-3xl border-dashed font-bold text-emerald-200 z-999 absolute ">
            Chat Tutorial
          </h2>
        </div>
        <div className="flex justify-end">
          <div className="z-999 absolute ">
            <div className="bg-white p-4 rounded-4xl border border-emerald-500 border-dashed">
              <div className="flex gap-2">
                <GoHubot className="w-10 h-10 bg-emrald-100 text-emerald-500 border border-emerald-200 rounded-full p-1" />
                <h2 className="bg-emerald-100 border border-emerald-500 py-2 px-4 rounded-3xl min-w-30">
                  {typeMessage}
                </h2>
              </div>
            </div>
            <h2
              className={`text-emerald-100 font-bold mt-4 ${
                tutorial === 1 && "animate-bounce "
              }
              }  `}
            >
              Chat Bot will ask you question..
            </h2>
          </div>
        </div>
        <div className={`${tutorial === 2 ? "flex" : "hidden"} justify-start `}>
          <div className="z-999 absolute mt-48">
            <div className="bg-white p-4 rounded-4xl border border-emerald-500 border-dashed">
              <div className="flex gap-2 ">
                <input
                  className="bg-emerald-100 border border-emerald-500 px-2 rounded-3xl"
                  type="text"
                  disabled
                  placeholder="I am fine.."
                />
                <button className="btn-secondary w-20 !py-2">Send</button>
              </div>
            </div>
            <h2 className="text-emerald-100 font-bold mt-4 animate-bounce  ">
              Type your response..
            </h2>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="flex  gap-4 absolute bottom-4 z-999">
            <button
              className={`${
                tutorial === 1 ? "flex" : "hidden"
              } items-center gap-2 mt-4  bg-emerald-200 border border-emerald-500 border-dashed  text-emerald-700 py-2 px-4 rounded-3xl animate-pulse`}
              onClick={() => dispatch(setTutorial(2))}
            >
              Next <GrNext />
            </button>
            <button
              className={`flex items-center gap-2 mt-4   bg-emerald-200 border border-emerald-500 border-dashed  text-emerald-700 py-2 px-4 rounded-3xl ${
                tutorial === 2 && "animate-pulse"
              } `}
              onClick={() => dispatch(setQuestionNo(1))}
            >
              Skip <GrNext />
              <GrNext className="-ml-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
