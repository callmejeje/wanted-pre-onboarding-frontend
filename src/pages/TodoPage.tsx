import { useCallback, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTodos } from "../apis/todo";
import Title from "../components/Title";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";
import Context from "../context/Context";
import { TodoInterface } from "../types/todo";
import { logout } from "../utils/logout";

function TodoPage() {
  const { isLogin, setIsLogin } = useContext(Context);
  const [todoList, setTodoList] = useState<TodoInterface[] | undefined>(
    undefined
  );
  const navigate = useNavigate();

  const getTodoList = useCallback(async () => {
    await getTodos()
      .then((todos) => {
        setTodoList(
          todos?.sort((a, b) => Number(a.isCompleted) - Number(b.isCompleted))
        );
      })
      .catch(() => {
        navigate("/");
      });
  }, []);

  return (
    <div className="flex flex-col items-center w-full p-2">
      {isLogin && <button onClick={() => logout(setIsLogin)}>로그아웃</button>}
      <Title text="To Do List" />
      <TodoInput getTodoList={getTodoList} />
      <TodoList todoList={todoList} getTodoList={getTodoList} />
    </div>
  );
}

export default TodoPage;
