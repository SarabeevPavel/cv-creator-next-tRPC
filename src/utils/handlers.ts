/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { jsPDF } from "jspdf";
import pdfMake from "pdfmake/build/pdfmake";
import html2canvas from "@nidi/html2canvas";
import type { UserType } from "./types";

export const handleSavePDF = (
  rootElementId: string,
  downloadFileName: string
) => {
  const input = document.getElementById(rootElementId);
  if (!input) return;
  html2canvas(input, { logging: true }).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "pt", "a4");
    pdf.addImage(imgData, "PDF", 0, 0, input.offsetWidth, input.offsetHeight);
    pdf.save(`${downloadFileName}.pdf`);
  });
};

export const handleSavePNG = (
  rootElementId: string,
  downloadFileName: string
) => {
  const input = document.getElementById(rootElementId);
  if (!input) return;
  html2canvas(input).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    console.log(imgData);
    const link = document.createElement("a");
    link.setAttribute("href", imgData);
    link.setAttribute("download", `${downloadFileName}.png`);
    link.click();
    link.remove();
  });
};
