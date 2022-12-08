import { useEffect, useState } from "react";
import { isValidEmail, isValidPassword } from "../utils/validation";

function useSign() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  useEffect(() => {
    setEmailValid(isValidEmail(email));
  }, [email]);

  useEffect(() => {
    setPasswordValid(isValidPassword(password));
  }, [password]);

  return { email, setEmail, password, setPassword, emailValid, passwordValid };
}

export default useSign;
