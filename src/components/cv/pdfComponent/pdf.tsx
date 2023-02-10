import { Document, PDFDownloadLink, Page, View } from "@react-pdf/renderer";
import { useGlobalContext } from "../../../hooks";

const PDFComp = () => {
  const { user, setUser, theme } = useGlobalContext();

  return (
    <Document>
      <Page size="A4">
        <View style={{ width: "30%", height: "100%", backgroundColor: "blue" }}>
          {/* <div className="h-full w-1/3 bg-blue-700"></div> */}
        </View>
      </Page>
    </Document>
  );
};

export const PDFDownload = () => {
  return (
    <PDFDownloadLink
      document={<PDFComp />}
      fileName={"Test.pdf"}
      style={{ backgroundColor: "red" }}
    >
      {({ blob, url, loading, error }) =>
        loading ? "Loading document..." : "Download now!"
      }
    </PDFDownloadLink>
  );
};
