import { useEffect, useState } from "react";
import {
  isValidEmail,
  isValidPassword,
  isValidPasswordCheck,
} from "../utils/validation";

function useSign() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [passwordCheckValid, setPasswordCheckValid] = useState(false);

  useEffect(() => {
    setEmailValid(isValidEmail(email));
  }, [email]);

  useEffect(() => {
    setPasswordValid(isValidPassword(password));
  }, [password]);

  useEffect(() => {
    setPasswordCheckValid(isValidPasswordCheck(password, passwordCheck));
  }, [password, passwordCheck]);

  return {
    email,
    setEmail,
    password,
    setPassword,
    emailValid,
    passwordValid,
    passwordCheck,
    setPasswordCheck,
    passwordCheckValid,
  };
}

export default useSign;
