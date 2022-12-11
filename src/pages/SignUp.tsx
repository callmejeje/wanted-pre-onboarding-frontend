import { useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import SignForm from "../components/SignForm";
import Title from "../components/Title";
import Context from "../context/Context";

function SignUp() {
  const { isLogin } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogin) {
      navigate("/todo");
    }
  }, []);

  return (
    <div className="flex flex-col w-full h-full items-center justify-center">
      <Title text="회원가입" />
      <SignForm submitType={"회원가입"} />
      <div className="flex justify-center bg-white fixed bottom-0 p-4 w-full">
        <span>{"이미 회원이시면\u00A0"}</span>
        <Link to="/" className="text-slate-500 underline">
          로그인
        </Link>
        <span>하세요.</span>
      </div>
    </div>
  );
}

export default SignUp;
