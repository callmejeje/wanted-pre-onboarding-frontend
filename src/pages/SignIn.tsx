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
      <Title text="로그인 후 이용하세요." />
      <SignForm submitType={"로그인"} />
      <div className="flex justify-center bg-white fixed bottom-0 w-full">
        <Link to="/signup">회원가입</Link>
      </div>
    </div>
  );
}

export default SignIn;
