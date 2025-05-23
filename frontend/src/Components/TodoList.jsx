import { useState } from 'react';

export default function TodoList({
  todos,
  onToggleComplete,
  onDelete,
  onEdit,
  loading
}) {
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  const handleEdit = (todo) => {
    setEditingId(todo._id);
    setEditText(todo.task);
  };

  const handleSave = (id) => {
    const trimmed = editText.trim();
    if (trimmed) {
      onEdit(id, trimmed);

      setEditingId(null);
      setEditText('');
    }
  };

  const handleKeyDown = (e, id) => {
    if (e.key === 'Enter') {
      handleSave(id);
    }
  };

  return (
    <ul className={`space-y-2 mb-4`}>
      {loading ? (
        <p className="text-center text-gray-500">Loading todos...</p>
      ) : todos.length === 0 ? (
        <p className="text-center text-gray-500">
          No todos yet. Add one above!
        </p>
      ) : (
        todos.map((todo, idx) => {
          return (
            <li
              key={todo._id || idx}
              className={`flex items-center justify-between p-3 rounded shadow-sm border border-gray-200 transition ${
                todo.completed ? 'bg-[#c6e9a7]' : 'bg-white'
              }`}
            >
              <div className="flex items-center flex-grow gap-2">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => onToggleComplete(todo._id, todo.completed)}
                  className="form-checkbox h-4 w-4 text-green-600"
                />

                {editingId === todo._id ? (
                  <input
                    className="flex-grow border px-2 py-1 rounded text-gray-800"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e, todo._id)}
                    autoFocus
                  />
                ) : (
                  <span className="text-gray-800 flex-grow">{todo.task}</span>
                )}
              </div>

              <div className="flex space-x-2 ml-4">
                {editingId === todo._id ? (
                  <button
                    onClick={() => handleSave(todo._id)}
                    className="text-green-500 hover:text-green-700 transition"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => handleEdit(todo)}
                    className="text-blue-500 hover:text-blue-700 transition"
                    disabled={loading}
                  >
                    Edit
                  </button>
                )}
                <button
                  onClick={() => onDelete(todo._id)}
                  className="text-red-500 hover:text-red-700 transition"
                  disabled={loading}
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })
      )}
    </ul>
  );
}
