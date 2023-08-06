import axiosInstance from './axiosInstance';

//todo 목록 가져오기
export function getTodos(setTodoList) {
    const token = JSON.parse(localStorage.getItem("user")).access_token;
    axiosInstance.get('/todos', {headers: {
      "Authorization": `Bearer ${token}`,
    }}).then(response => {
      setTodoList([...response.data]);
    })
    .catch(error => {
      console.log(error);
    });
}