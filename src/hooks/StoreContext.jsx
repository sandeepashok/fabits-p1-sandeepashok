import { useReducer } from "react";
import { createContext } from "react";
import reducer, { initialState } from "./StoreReducer";

export const storeContext = createContext();

const StoreContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <storeContext.Provider value={{ state, dispatch }}>
      {children}
    </storeContext.Provider>
  )
}

export default StoreContextProvider