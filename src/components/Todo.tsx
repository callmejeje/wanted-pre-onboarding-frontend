import { useState } from "react";
import { deleteTodo, updateTodo } from "../apis/todo";
import { TodoInterface } from "../types/todo";
import Button from "./Button";
import TodoInput from "./TodoInput";

function Todo({
  todo,
  getTodoList,
}: {
  todo: TodoInterface;
  getTodoList: () => void;
}) {
  const [checked, setChecked] = useState(todo.isCompleted);
  const [isEditing, setIsEditing] = useState(false);
  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateTodo(todo.id, todo.todo, e.target.checked)
      .then((success) => {
        if (success) {
          getTodoList();
        }
      })
      .catch();
    setChecked(e.target.checked);
  };
  const handleEdit = () => {
    setIsEditing(!isEditing);
  };
  const handleDelete = () => {
    if (window.confirm("삭제하시겠습니까?")) {
      deleteTodo(todo.id)
        .then((success) => {
          if (success) getTodoList();
        })
        .catch();
    }
  };
  return (
    <li className="flex items-center justify-between w-full my-1">
      <div className="flex w-full">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleCheck}
          className="mx-1"
        />
        {isEditing ? (
          <TodoInput
            getTodoList={getTodoList}
            todo={todo}
            setIsEditing={setIsEditing}
          />
        ) : (
          <span
            className={`${
              todo.isCompleted && "line-through text-slate-500"
            } mx-2 w-full py-2`}
          >
            {todo.todo}
          </span>
        )}
      </div>
      {isEditing || (
        <div className="flex">
          <Button handleClick={handleEdit} text="수정" />
          <Button handleClick={handleDelete} text="삭제" margin="ml-2" />
        </div>
      )}
    </li>
  );
}

export default Todo;
