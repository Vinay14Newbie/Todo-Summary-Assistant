import express from 'express';
import {
  addTodo,
  deleteTodo,
  getTodos
} from '../controllers/todoController.js';
import { summariseTodo } from '../controllers/summariseTodoController.js';

const router = express.Router();

router.get('/', getTodos);

router.post('/', addTodo);

router.delete('/:id', deleteTodo);

router.post('/summarise', summariseTodo);

export default router;
