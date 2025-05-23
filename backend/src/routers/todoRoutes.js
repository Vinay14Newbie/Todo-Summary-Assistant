import express from 'express';
import {
  addTodo,
  deleteTodo,
  getTodos,
  toggleTodo,
  updateTodo
} from '../controllers/todoController.js';
import { summariseTodo } from '../controllers/summariseTodoController.js';

const router = express.Router();

router.get('/', getTodos);

router.post('/', addTodo);

router.delete('/:id', deleteTodo);

router.put('/:id', updateTodo);

router.put('/todos/:id', toggleTodo);

router.post('/summarise', summariseTodo);

export default router;
