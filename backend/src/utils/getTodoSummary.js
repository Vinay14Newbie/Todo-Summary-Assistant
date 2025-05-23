import cohere from './cohereClient.js';

const getTodoSummary = async (todos) => {
  if (!todos || todos.length === 0) {
    return 'No todos to summarize';
  }

  const pendingTodos = todos.filter((todo) => !todo.completed);

  const formattedTodos = pendingTodos
    .map((todo, i) => `${i + 1}. ${todo.task}`)
    .join('\n');

  const response = await cohere.generate({
    model: 'command',
    prompt: `Summarize the following todo list:\n${formattedTodos}`,
    max_tokens: 100,
    temperature: 0.7
  });

  console.log('response ', response);

  const rawRes = response.generations[0].text.trim();

  const cleanedSummary = rawRes
    .replace(/\n+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  return cleanedSummary;
};

export default getTodoSummary;
