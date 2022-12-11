import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn, signUp } from "../apis/register";
import Context from "../context/Context";
import useSign from "../hooks/useSign";
import Button from "./Button";

function SignForm({ submitType }: { submitType: string }) {
  const {
    email,
    setEmail,
    password,
    setPassword,
    emailValid,
    passwordValid,
    passwordCheck,
    setPasswordCheck,
    passwordCheckValid,
  } = useSign();
  const { setIsLogin } = useContext(Context);
  const [canSubmit, setCanSubmit] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (submitType === "회원가입")
      setCanSubmit(emailValid && passwordValid && passwordCheckValid);
    else setCanSubmit(emailValid && passwordValid);
  }, [emailValid, passwordCheckValid, passwordValid, submitType]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let signedIn;
    if (submitType === "회원가입") {
      await signUp(email, password)
        .then((success) => {
          if (success) signedIn = true;
        })
        .catch();
    } else if (submitType === "로그인") {
      await signIn(email, password)
        .then((success) => {
          if (success) signedIn = true;
        })
        .catch();
    }
    if (signedIn) {
      setIsLogin();
      navigate("/todo");
    }
  };

  return (
    <div className="flex flex-col w-full h-full items-center justify-center w-full">
      <form className="flex flex-col w-full px-28">
        <div className="flex flex-col w-full">
          <input
            placeholder="이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border my-1 p-1"
          />
          <div className="text-slate-500">
            {emailValid || "이메일 형식을 맞춰주세요. (someone@example.com)"}
          </div>
        </div>
        <div className="flex flex-col">
          <input
            placeholder="비밀번호"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="border my-1 p-1"
          />
          <div className="text-slate-500">
            {passwordValid || "비밀번호는 8글자 이상이어야 합니다."}
          </div>
          {submitType === "회원가입" && (
            <div className="flex flex-col">
              <input
                placeholder="비밀번호 확인"
                value={passwordCheck}
                type="password"
                onChange={(e) => setPasswordCheck(e.target.value)}
                className="border my-1 p-1"
              />
              <div className="text-slate-500">
                {passwordCheckValid || "비밀번호가 다릅니다."}
              </div>
            </div>
          )}
        </div>
        <Button
          text={submitType}
          handleClick={handleSubmit}
          disabled={!canSubmit}
          margin="my-2"
        />
      </form>
    </div>
  );
}

export default SignForm;
