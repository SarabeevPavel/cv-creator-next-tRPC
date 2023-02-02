import { useContext } from "react";
import { GlobalContext } from "../components";

export const useGlobalContext = () => useContext(GlobalContext);
