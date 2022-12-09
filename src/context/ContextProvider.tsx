import { ReactNode, useState } from "react";
import Context from "./Context";

const ContextProvider = ({ children }: { children: ReactNode }) => {
  let tokenExist;
  if (localStorage.getItem("access_token")) {
    tokenExist = true;
  } else {
    tokenExist = false;
  }

  const setIsLogin = () => {
    setState((prevState) => ({
      ...prevState,
      isLogin: !prevState.isLogin,
    }));
  };

  const initialState = {
    isLogin: tokenExist,
    setIsLogin,
  };

  const [state, setState] = useState(initialState);

  return <Context.Provider value={state}>{children}</Context.Provider>;
};

export default ContextProvider;
