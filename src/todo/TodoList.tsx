import React, { useState } from "react";

function TodoList() {
  const [todo, setTodo] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setTodo(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(todo);
  };
  return (
    <div>
      <h1>TOOLIST</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={todo}
          placeholder="Todo"
          onChange={onChange}
        />
        <button type="submit">ADD</button>
      </form>
    </div>
  );
}
export default TodoList;
