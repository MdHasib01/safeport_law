import React from "react";

const MoneyBack = () => {
  return (
    <div className="bg-emerald-200 my-12 ">
      <div className="container py-20">
        <div
          className={` lg:bg-[url('/public/woman-guarantee-block.png')] bg-none bg-emerald-700  flex flex-col md:flex-row  gap-8 p-12 bg rounded-3xl rounded-br-[180px] bg-no-repeat bg-contain bg-right`}
        >
          <div className="">
            <p className="text-white text-2xl font-bold">
              We&#8217;ve Got You Covered
            </p>
            <h1 className="mt-4 text-white font-bold text-5xl">90-Day</h1>
            <p className="text-white text-3xl font-bold max-w-xs">
              money-back guarantee
            </p>
          </div>
          <div className="max-w-sm">
            <p className="text-white text-xl font-semibold mb-8">
              Not only does Safeport offer true, legal representation, but we
              offer a best-in-class,{" "}
              <span className="underline cursor-pointer">
                90-day money-back guarantee
              </span>{" "}
              on Credit Cleanse.
            </p>
            <button className="btn-primary w-full">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoneyBack;
