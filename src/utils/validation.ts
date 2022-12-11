export function isValidEmail(email: string) {
  const regExp = /\S+@\S+\.\S{2,3}$/;
  const isValid = regExp.test(email);
  return isValid;
}

export function isValidPassword(password: string) {
  if (password.length >= 8) return true;
  else return false;
}

export function isValidPasswordCheck(password: string, passwordCheck: string) {
  if (password === passwordCheck) return true;
  else return false;
}
