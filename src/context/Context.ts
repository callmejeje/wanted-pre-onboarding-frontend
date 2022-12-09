import { createContext } from "react";

const Context = createContext({
  isLogin: false,
  setIsLogin: () => {},
});

export default Context;
