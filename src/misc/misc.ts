export function isValidEmail(email: string) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  return false;
}

export function isValidPassword(password: string) {
  return password.length > 6 ? true : false;
}
