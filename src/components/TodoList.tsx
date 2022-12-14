import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Todo from "../components/Todo";
import Context from "../context/Context";
import { TodoInterface } from "../types/todo";

function TodoList({
  todoList,
  getTodoList,
}: {
  todoList: TodoInterface[] | undefined;
  getTodoList: () => void;
}) {
  const { isLogin } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin) {
      navigate("/");
    }
  }, [isLogin]);

  let isCalled = false;
  useEffect(() => {
    if (!isCalled) {
      isCalled = true;
      getTodoList();
    }
  }, [isCalled]);

  return (
    <div className="w-full pb-14">
      {todoList && (
        <ul className="w-full">
          {todoList.map((todo: TodoInterface) => (
            <Todo key={todo.id} todo={todo} getTodoList={getTodoList} />
          ))}
        </ul>
      )}
      {todoList && todoList.length === 0 && <div>There's nothing to do.</div>}
    </div>
  );
}

export default TodoList;
