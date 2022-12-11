import React, { useState } from "react";
import { createTodo, updateTodo } from "../apis/todo";
import { TodoInterface } from "../types/todo";
import Button from "./Button";

interface TodoEdit {
  getTodoList: () => void;
  todo?: TodoInterface;
  setIsEditing?: (value: React.SetStateAction<boolean>) => void;
}

function TodoInput({ getTodoList, todo, setIsEditing }: TodoEdit) {
  const [value, setValue] = useState(todo ? todo.todo : "");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (setIsEditing && todo) {
      updateTodo(todo.id, value, todo.isCompleted).then((success) => {
        if (success) {
          setIsEditing(false);
          getTodoList();
        }
      });
    } else {
      createTodo(value)
        .then((success) => {
          if (success) {
            setValue("");
            getTodoList();
          }
        })
        .catch();
    }
  };
  return (
    <form className="flex w-full my-1">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border w-full mx-1 px-1"
      />
      <Button handleClick={handleSubmit} text="완료" margin="ml-1" />
    </form>
  );
}

export default TodoInput;
