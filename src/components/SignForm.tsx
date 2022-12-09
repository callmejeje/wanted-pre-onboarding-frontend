import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn, signUp } from "../apis/register";
import Context from "../context/Context";
import useSign from "../hooks/useSign";

function SignForm({ submitType }: { submitType: string }) {
  const { email, setEmail, password, setPassword, emailValid, passwordValid } =
    useSign();
  const { setIsLogin } = useContext(Context);
  const [canSubmit, setCanSubmit] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setCanSubmit(emailValid && passwordValid);
  }, [email, emailValid, password, passwordValid]);

  const handleSubmit = async () => {
    let signedIn;
    if (submitType === "회원가입") {
      signedIn = await signUp(email, password);
    } else if (submitType === "로그인") {
      signedIn = await signIn(email, password);
    }
    if (signedIn) {
      setIsLogin();
      navigate("/todo");
    }
  };

  return (
    <div className="flex flex-col w-full h-full items-center justify-center">
      <div className="flex flex-col">
        <div className="flex">
          <input
            placeholder="이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div>
            {emailValid || "이메일 형식을 맞춰주세요. (someone@example.com)"}
          </div>
        </div>
        <div className="flex">
          <input
            placeholder="비밀번호"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div>{passwordValid || "비밀번호는 8글자 이상이어야 합니다."}</div>
        </div>
        <button onClick={handleSubmit} disabled={!canSubmit}>
          {submitType}
        </button>
      </div>
    </div>
  );
}

export default SignForm;
