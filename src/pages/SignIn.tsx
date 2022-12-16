import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import SignForm from "../components/SignForm";
import Title from "../components/Title";
import Context from "../context/Context";

function SignIn() {
  const { isLogin } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogin) {
      navigate("/todo");
    }
  }, [isLogin]);

  return (
    <div className="flex flex-col w-full h-full items-center justify-center">
      <Title text="로그인" />
      <SignForm submitType={"로그인"} />
      <div className="flex justify-center bg-white fixed bottom-0 p-4 w-full">
        <span>{"아직 회원이 아니시면\u00A0"}</span>
        <Link to="/signup" className="text-slate-500 underline">
          회원가입
        </Link>
        <span>하세요.</span>
      </div>
    </div>
  );
}

export default SignIn;
