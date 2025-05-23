import { useState } from 'react';
import API from '../apis/apis';

export default function SummaryButton({ todos }) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleSummarize = async () => {
    if (todos.length === 0) {
      setMessage('No todos to summarize!');
      return;
    }

    try {
      setLoading(true);
      setMessage(null);

      const res = await API.post('/summarise');

      setTimeout(() => {
        setLoading(false);
        setMessage('Summary sent to Slack successfully!');
      }, 1000);
    } catch (error) {
      setLoading(false);
      setMessage('Failed to send summary to Slack.');
    }
  };

  return (
    <div className="text-center">
      <button
        onClick={handleSummarize}
        disabled={loading}
        className={`px-6 py-2 rounded bg-green-800 text-white hover:bg-green-700 transition ${
          loading ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        {loading ? 'Summarizing...' : 'Summarize & Send to Slack'}
      </button>
      {message && <p className="mt-2 text-sm text-gray-800">{message}</p>}
    </div>
  );
}
