import axios from "axios";
import { TodoInterface } from "../types/todo";
const API = process.env.REACT_APP_API;

export async function createTodo(todo: string) {
  return await axios
    .post(
      `${API}/todos`,
      {
        todo: todo,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => {
      if (res.status === 201) return true;
    })
    .catch(() => {
      return;
    });
}

export async function getTodos() {
  return await axios
    .get(`${API}/todos`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    })
    .then((res) => {
      if (res.status === 200) return res.data as TodoInterface[];
    })
    .catch(() => {
      return undefined;
    });
}

export async function updateTodo(
  id: number,
  todo: string,
  isCompleted: boolean
) {
  return await axios
    .put(
      `${API}/todos/${id}`,
      {
        todo: todo,
        isCompleted: isCompleted,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => {
      if (res.status === 200) return true;
    })
    .catch(() => {
      return false;
    });
}

export async function deleteTodo(id: number) {
  return axios
    .delete(`${API}/todos/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    })
    .then((res) => {
      if (res.status === 204) {
        return true;
      }
    })
    .catch(() => {
      return false;
    });
}
