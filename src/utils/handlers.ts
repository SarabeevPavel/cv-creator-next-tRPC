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
import { trpc } from "./trpc";
import { toast } from "react-toastify";

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
    const link = document.createElement("a");
    link.setAttribute("href", imgData);
    link.setAttribute("download", `${downloadFileName}.png`);
    link.click();
    link.remove();
  });
};

// interface handleGenerateProps {
//   user: UserType;
//   setError: (value: boolean) => void;
//   onChange: (updatedUser: UserType) => void;
//   operation: string;
// }

// export const handleGenerate = ({
//   user,
//   setError,
//   onChange,
//   operation,
// }: handleGenerateProps) => {
//   const { mutate: genStack } = trpc.cv.generateStack.useMutation();
//   const { mutate: genNewSummary } = trpc.cv.generateSummary.useMutation();
//   const { mutate: genConSummary } = trpc.cv.continueSummary.useMutation();
//   const genSummary =
//     user.summary.length > 15 && user.summary.length < 50
//       ? genConSummary
//       : genNewSummary;
//   // setIsLoading(true);
//   if (operation === "summary") {
//     genSummary(
//       { text: user.position },
//       {
//         onSuccess: (res) => {
//           if (res) {
//             // setGeneratedSummary(res.trim());
//             onChange({ ...user, summary: res.trim() });
//           }
//           setError(false);
//           toast.success("Generated success!");
//         },
//         onError: () => {
//           setError(true);
//           toast.error("Oops, something's gone wrong. Try again!");
//         },
//         // onSettled: () => {
//         //   setIsLoading(false);
//         // },
//       }
//     );
//   }

//   if (operation === "stack") {
//     genStack(
//       { text: user.position },
//       {
//         onSuccess: (res) => {
//           if (res) {
//             const getArrayFromString = (str: string) => {
//               return str
//                 .split("\n")
//                 .map((item) => item.split(".")[1])
//                 .filter((item) => typeof item === "string" && item.trim());
//             };
//             const newStack = getArrayFromString(res);
//             // setGeneratedStack(newStack as string[]);
//             onChange({ ...user, technologies: newStack as string[] });
//           }
//           setError(false);
//         },
//         onError: () => {
//           setError(true);
//         },
//       }
//     );
//   }
// };
