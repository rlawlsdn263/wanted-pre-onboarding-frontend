import axios from 'axios';
import { getTodos } from './getTodos';

//Todo 삭제 기능
export function deleteTodos(setTodoList, id) {
    const token = JSON.parse(localStorage.getItem("user")).access_token;
    axios.delete(`https://www.pre-onboarding-selection-task.shop/todos/${id}`, {
     headers: {
        "Authorization": `Bearer ${token}`,
      }}).then(response => {
        getTodos(setTodoList);
      })
      .catch(error => {
        console.log(error);
      });
  }