import Todo from '../schema/todo.js';
import getTodoSummary from '../utils/getTodoSummary.js';
import { sendToSlack } from '../utils/sendToSlack.js';

export const summariseTodo = async (req, res) => {
  try {
    const todos = await Todo.find();
    const summary = await getTodoSummary(todos);

    await sendToSlack(summary);

    return res.status(200).json({
      status: true,
      message: 'Todos summarised successfully',
      response: summary
    });
  } catch (error) {
    console.log('Error found while summarising todos ', error);
    return res.status(500).json({
      status: false,
      message: 'Internal error'
    });
  }
};
