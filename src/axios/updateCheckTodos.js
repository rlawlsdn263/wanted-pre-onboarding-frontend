import axios from 'axios';
import { getTodos } from './getTodos';

//체크버튼 수정
export function updateCheckTodos(todo, setTodoList, isCompleted, id) {
    const token = JSON.parse(localStorage.getItem("user")).access_token;
    axios.put(`https://www.pre-onboarding-selection-task.shop/todos/${id}`, {
      todo: todo,
      isCompleted: !isCompleted,
    }, {headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
    }}).then(response => {
      getTodos(setTodoList);
    })
    .catch(error => {
      console.log(error);
    });
  }