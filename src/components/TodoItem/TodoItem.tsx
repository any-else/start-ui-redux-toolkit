import React from "react";
import { ITodo } from "../../types/Todo";
import { FaEdit, FaTrash } from "react-icons/fa";

interface ITodoItemProps {
  todo: ITodo;
}
const TodoItem: React.FC<ITodoItemProps> = ({ todo }: ITodoItemProps) => {
  return (
    <li className="flex items-center justify-between py-2 border-b">
      <p
        className={`hover:cursor-pointer ${
          todo.completed ? "line-through text-gray-500" : ""
        }`}
      >
        {todo.title}
      </p>

      <div className="flex space-x-4">
        <button className="p-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white">
          <FaEdit fontSize={8} />
        </button>
        <button className="p-2 rounded-full bg-red-500 hover:bg-red-600 text-white">
          <FaTrash fontSize={8} />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
