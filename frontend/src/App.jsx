import { useEffect, useState } from 'react';
import TodoForm from './Components/Form';
import TodoList from './Components/TodoList';
import SummaryButton from './Components/SummaryButton';
import {
  fetchTodos,
  addTodoAPI,
  deleteTodoAPI,
  updateTodoAPI,
  onToggleCompleteAPI
} from './apis/apis';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch todos on mount
  const loadTodos = async () => {
    try {
      const res = await fetchTodos();
      console.log('todo ', res?.data);

      setTodos(res?.data);
    } catch (error) {
      console.error('Failed to fetch the todos:', error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTodos();
  }, []);

  // Add a new todo
  const addTodo = async (task) => {
    try {
      const res = await addTodoAPI(task);
      const newTodo = res?.data?.response;

      setTodos((prev) => [...prev, newTodo]);
    } catch (error) {
      console.error('Failed to add a todo:', error.message);
    }
  };

  // Delete a todo
  const deleteTodo = async (id) => {
    try {
      await deleteTodoAPI(id);
      setTodos(todos.filter((todo) => todo._id !== id));
    } catch (error) {
      console.error('Failed to delete todo:', error.message);
    }
  };

  // Edit a todo
  const editTodo = async (id, task) => {
    try {
      const res = await updateTodoAPI(id, task);
      const updated = res.data.response;
      setTodos((prev) =>
        prev.map((todo) =>
          todo._id === id ? { ...todo, task: updated.task } : todo
        )
      );
    } catch (error) {
      console.error('Error while editing the todo:', error.message);
    }
  };

  const onToggleComplete = async (id, currentStatus) => {
    onToggleCompleteAPI(id, currentStatus);
    setTodos((prev) =>
      prev.map((t) => (t._id === id ? { ...t, completed: !currentStatus } : t))
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 mt-2">
          Todo Summary Assistant
        </h1>
        <TodoForm onAdd={addTodo} />
        <TodoList
          todos={todos}
          onDelete={deleteTodo}
          onEdit={editTodo}
          loading={loading}
          onToggleComplete={onToggleComplete}
        />
        <SummaryButton todos={todos} />
      </div>
    </div>
  );
}
