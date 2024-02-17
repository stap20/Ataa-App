import { createContext, useContext } from "react";

const ShowLoadingModalContext = createContext(null);
const useLoadingContext = () => useContext(ShowLoadingModalContext);

export default { ShowLoadingModalContext, useLoadingContext };
