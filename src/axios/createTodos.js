import axios from 'axios';

//todo 추가기능
export function createTodos(inputValue, setInputValue, todoList, setTodoList) {
    const token = JSON.parse(localStorage.getItem("user")).access_token;
    axios.post('https://www.pre-onboarding-selection-task.shop/todos', {
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