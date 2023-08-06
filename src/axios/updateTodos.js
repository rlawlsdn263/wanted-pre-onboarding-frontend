import axiosInstance from './axiosInstance';
import { getTodos } from './getTodos';

//업데이트 기능
export function updateTodos(newInput, isCompleted, setTodoList, update, setUpdate, id) {
    const token = JSON.parse(localStorage.getItem("user")).access_token;
    axiosInstance.put(`/todos/${id}`, {
      todo: newInput,
      isCompleted: isCompleted,
    }, {headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
    }}).then(response => {
      // 삭제가 될 때마다 다시 getTodos가 실행됨
      getTodos(setTodoList);
      setUpdate(!update);
    })
    .catch(error => {
      console.log(error);
    });
}