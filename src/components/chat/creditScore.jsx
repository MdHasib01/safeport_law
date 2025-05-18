import React from "react";
import { LiaSpinnerSolid } from "react-icons/lia";
import { useDispatch, useSelector } from "react-redux";
import { generateCreditReport } from "../../store/features/chat/api";
import { PDFDownloadLink } from "@react-pdf/renderer";
import ReportPdf from "./ReportPdf";
const MyDocument = () => {};
const CreditScore = () => {
  const score = useSelector((state) => state.chat.creditScore);
  const report = useSelector((state) => state.chat.report);
  const loading = useSelector((state) => state.chat.loading);
  const conversation = useSelector((state) => state.chat.conversation);
  const dispatch = useDispatch();
  const MyDocument = () => {
    report;
  };
  return (
    <div className="container">
      <h2 className="text-3xl font-bold  text-emerald-700 text-center mt-4 mb-2">
        Your Business Credit Score
      </h2>
      <p className="text-xl text-center mb-20 text-[#bf5432]">
        Get Your Business Credit Score and Understand Your Business Credit Risk
      </p>

      <div className="flex justify-center">
        {loading && score === "" ? (
          <LiaSpinnerSolid className="animate-spin text-emerald-600 w-12 h-12" />
        ) : (
          <p className="text-5xl font-semibold text-center text-emerald-600 border-2 border-emerald-600 rounded-full p-8">
            {score}
          </p>
        )}
      </div>

      <div className="flex justify-center mt-28">
        {score && !report && (
          <button
            className="btn-primary flex justify-center items-center gap-2"
            disabled={loading}
            onClick={() => dispatch(generateCreditReport(conversation))}
          >
            Get Detailed Score Report
            {loading && <LiaSpinnerSolid className="animate-spin w-6 h-6" />}
          </button>
        )}
      </div>
      <div className="flex justify-center mt-8">
        {report && (
          <PDFDownloadLink
            document={<ReportPdf report={report} />}
            fileName="BusinessCreditReport.pdf"
          >
            {({ loading }) =>
              loading ? (
                <button className="btn-secondary">Preparing...</button>
              ) : (
                <button className="btn-secondary">Download Report</button>
              )
            }
          </PDFDownloadLink>
        )}
      </div>
    </div>
  );
};

export default CreditScore;
