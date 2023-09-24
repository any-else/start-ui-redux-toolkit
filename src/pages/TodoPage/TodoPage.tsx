import React from "react";
import TodoForm from "../../components/TodoForm/TodoForm";
import TodoList from "../../components/TodoList/TodoList";

const TodoPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-4 rounded shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-4">Todo App</h1>
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
};

export default TodoPage;
