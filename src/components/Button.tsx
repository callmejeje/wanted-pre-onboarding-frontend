import React from "react";

interface ButtonProps {
  text: string;
  handleClick: (e: React.FormEvent) => void;
  disabled?: boolean;
  margin?: string;
}

function Button({ text, handleClick, disabled, margin }: ButtonProps) {
  return (
    <button
      type="submit"
      onClick={handleClick}
      className={`bg-slate-300 ${disabled || "hover:bg-slate-400"} ${
        margin && margin
      } px-1 h-fit whitespace-pre rounded`}
      disabled={disabled ? disabled : false}
    >
      {text}
    </button>
  );
}

export default Button;
