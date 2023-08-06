import axiosInstance from './axiosInstance';

//todo 추가기능
export function createTodos(inputValue, setInputValue, todoList, setTodoList) {
    const token = JSON.parse(localStorage.getItem("user")).access_token;
    axiosInstance.post('/todos', {
      todo: inputValue,
    }, {headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
    }}).then(response => {
      setTodoList([...todoList, response.data]);
      setInputValue("");
    })
    .catch(error => {
      console.log(error);
    });
}