import { useState } from 'react';

export default function TodoForm({ onAdd }) {
  const [todo, setTodo] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmed = todo.trim();
    if (!trimmed) return;

    try {
      setSubmitting(true);
      await onAdd(trimmed);
      setTodo('');
    } catch (err) {
      console.error('Error adding todo:', err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex">
      <input
        type="text"
        className="flex-grow rounded-l-full px-4 py-2 border-t border-b border-l border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Write Todo..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        disabled={!todo.trim() || submitting}
        className={`rounded-r-full px-6 py-2 text-white transition ${
          !todo.trim() || submitting
            ? 'bg-gray-300 cursor-not-allowed'
            : 'bg-blue-500 hover:bg-blue-600'
        }`}
      >
        {submitting ? 'Adding...' : 'Add'}
      </button>
    </form>
  );
}
