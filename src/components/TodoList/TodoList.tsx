import React from "react";
import { ITodo } from "../../types/Todo";
import TodoItem from "../TodoItem/TodoItem";

const todoData: ITodo[] = [
  {
    id: 0,
    title: "Buy milk",
    completed: false,
  },
  {
    id: 1,
    title: "Ăn Cơm",
    completed: true,
  },
];
const TodoList: React.FC = () => {
  return (
    <ul className="mt-4">
      {todoData &&
        todoData.map((todo: ITodo) => {
          return <TodoItem key={todo.id} todo={todo} />;
        })}
    </ul>
  );
};

export default TodoList;
