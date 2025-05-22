import Todo from '../schema/todo.js';

export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();

    return res.status(200).json({
      success: true,
      message: 'Todos fetched successfully',
      data: todos
    });
  } catch (error) {
    console.log('Error found while fetching todos ', error);
    return res.status(500).json({
      status: false,
      message: 'Internal error'
    });
  }
};

export const addTodo = async (req, res) => {
  const newTodo = await Todo.create({
    task: req.body.task,
    description: req.body.description
  });

  return res.status(201).json({
    status: true,
    message: 'New todo added successfully',
    response: newTodo
  });
};

export const deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      status: true,
      message: 'Todo deleted successfully',
      response: todo
    });
  } catch (error) {
    console.log('Error found while fetching todos ', error);
    return res.status(500).json({
      status: false,
      message: 'Internal error'
    });
  }
};
