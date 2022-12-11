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
      <Title text="회원가입 후 로그인하세요." />
      <SignForm submitType={"회원가입"} />
      <Link to="/">로그인</Link>
    </div>
  );
}

export default SignUp;
