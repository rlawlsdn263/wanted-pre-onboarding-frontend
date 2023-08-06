import axiosInstance from './axiosInstance';

// 회원가입 통신 함수
export function createUserWithEmailAndPassword(emailRefCurrentValue, passwordRefCurrentValue, buttonRefCurrentDisabled, navigate) {
  axiosInstance.post('/auth/signup', {
      email: emailRefCurrentValue,
      password: passwordRefCurrentValue,
    }, {headers: {
      "Content-Type": "application/json",
    }})
    .then(response => {
      alert("회원가입 성공");
      navigate('/signin');
    })
    .catch(error => {
      console.log(error);
      emailRefCurrentValue = "";
      passwordRefCurrentValue = "";
      buttonRefCurrentDisabled = true;
      alert("회원가입 실패")
    });
  }