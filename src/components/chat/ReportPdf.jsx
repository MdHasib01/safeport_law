import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
    lineHeight: 1.6,
  },
  heading: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "bold",
  },
  subHeading: {
    fontSize: 14,
    marginTop: 10,
    marginBottom: 5,
    fontWeight: "bold",
  },
  paragraph: {
    marginBottom: 8,
  },
  bullet: {
    marginLeft: 10,
    marginBottom: 4,
  },
});

const parseReportToPDF = (report) => {
  const lines = report.split("\n");
  const elements = [];

  lines.forEach((line, index) => {
    if (line.startsWith("**") && line.endsWith("**")) {
      elements.push(
        <Text key={index} style={styles.heading}>
          {line.replace(/\*\*/g, "")}
        </Text>
      );
    } else if (line.startsWith("**") && line.includes(":")) {
      elements.push(
        <Text key={index} style={styles.subHeading}>
          {line.replace(/\*\*/g, "")}
        </Text>
      );
    } else if (line.startsWith("*")) {
      elements.push(
        <Text key={index} style={styles.bullet}>
          • {line.replace(/^\*+\s*/, "").replace(/\*\*/g, "")}
        </Text>
      );
    } else {
      elements.push(
        <Text key={index} style={styles.paragraph}>
          {line}
        </Text>
      );
    }
  });

  return elements;
};

const ReportPdf = ({ report }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View>{parseReportToPDF(report)}</View>
    </Page>
  </Document>
);

export default ReportPdf;
