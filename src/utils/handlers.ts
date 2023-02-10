/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import pdfMake from "pdfmake/build/pdfmake";

export const handleSave = (rootElementId: string, downloadFileName: string) => {
  const input = document.getElementById(rootElementId);
  if (!input) return;
  html2canvas(input, { logging: true }).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "pt", "a4");
    pdf.addImage(imgData, "PDF", 0, 0, input.offsetWidth, input.offsetHeight);
    pdf.save(downloadFileName);
  });
};

// export const handleSave = (
//   rootElementId: string,
//   downloadFileName?: string
// ) => {
//   const input = document.getElementById(rootElementId);
//   if (!input) return;
//   const pdfGenerator = pdfMake.createPdf(input);
// };
