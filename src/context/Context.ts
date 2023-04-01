import { createContext, useContext } from "react";

export const StateContext = createContext<any>({});

const useStateContext = () => useContext(StateContext);

export default useStateContext;
