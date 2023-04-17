// localStorage에서 JWT토큰을 가져오는 함수
export function getAuth() {
  if (localStorage.getItem("user")) {
    return JSON.parse(localStorage.getItem("user"));
  } else {
    return { access_token: "" };
  }
}
