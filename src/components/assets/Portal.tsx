// import { useEffect, useMemo } from "react"
// import { createPortal } from "react-dom"

// const modalRootElement = document.querySelector("#modal")

// interface PortalProps {
//   children: React.ReactNode
//   open: boolean
// }

// export const Portal: React.FC<PortalProps> = ({ children, open }) => {
//   const element = useMemo(() => document.createElement("div"), [])

//   useEffect(() => {
//     modalRootElement?.appendChild(element)

//     return () => {
//       modalRootElement?.removeChild(element)
//     }
//   })

//   if (open) {
//     return createPortal(children, element)
//   }

//   return null
// }

export {};
