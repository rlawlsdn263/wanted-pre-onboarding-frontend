import axios from 'axios';

//유저정보를 확인해주는 함수
export function checkUserWithEmailAndPassword(emailRefCurrentValue, passwordRefCurrentValue, navigate) {
    axios.post('https://www.pre-onboarding-selection-task.shop/auth/signin', {
      email: emailRefCurrentValue,
      password: passwordRefCurrentValue,
    }, {headers: {
      "Content-Type": "application/json",
    }})
    .then(response => {
      // JWT 토큰을 localStorage에 저장함
      localStorage.setItem("user", JSON.stringify(response.data));
      alert("로그인 성공!");
      //로그인 성공할 경우 todolist로 페이지 리디렉션을 해줌
      navigate('/todo');
    })
    .catch(error => {
      console.log(error);
      //로그인 실패할 경우 input 값을 비어줌
      emailRefCurrentValue = "";
      passwordRefCurrentValue = "";
      alert("로그인 실패!")
    });
  }