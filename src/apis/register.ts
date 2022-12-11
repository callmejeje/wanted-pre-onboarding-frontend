import axios from "axios";
const API = process.env.REACT_APP_API;

export async function signUp(email: string, password: string) {
  return await axios
    .post(
      `${API}/auth/signup`,
      {
        email: email,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => {
      if (res.status === 201) {
        localStorage.setItem("access_token", res.data.access_token);
        return true;
      }
    })
    .catch((err) => {
      if (err.response.data.statusCode === 400) {
        alert(err.response.data.message);
      }
      return false;
    });
}

export async function signIn(email: string, password: string) {
  return await axios
    .post(
      `${API}/auth/signin`,
      {
        email: email,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => {
      if (res.status === 200) {
        localStorage.setItem("access_token", res.data.access_token);
        return true;
      }
    })
    .catch((err) => {
      if (err.response.data.statusCode === 404) {
        alert(err.response.data.message);
      } else if (err.response.data.statusCode === 401) {
        alert("이메일과 비밀번호를 확인해주세요.");
      }
      return false;
    });
}
