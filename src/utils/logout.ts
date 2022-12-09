export function logout(setIsLogin: () => void) {
  setIsLogin();
  localStorage.removeItem("access_token");
}
