import React from "react";

const TodoForm: React.FC = () => {
  const [task, setTask] = React.useState<string>("");
  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={addTodo}>
      <div className="mb-4">
        <input
          type="text"
          className="w-full px-3 py-2 border rounded-md placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Add a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;
