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
  const handleCancel = (e: React.FormEvent) => {
    e.preventDefault();
    if (setIsEditing) setIsEditing(false);
  };
  return (
    <form className="flex w-full my-1 items-center">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border w-full mx-1 p-1 my-[-1px]"
        placeholder={`${
          todo ? "할 일을 수정하세요." : "새로운 할 일을 입력하세요."
        }`}
      />
      <Button
        handleClick={handleSubmit}
        text="완료"
        margin={`${todo ? "mx-1" : "ml-1"}`}
        disabled={value.length > 0 ? false : true}
      />
      {todo && <Button handleClick={handleCancel} text="취소" margin="ml-1" />}
    </form>
  );
}

export default TodoInput;
