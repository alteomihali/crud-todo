import { Router } from 'express';
import { createTodo, deleteTodo, getTodos, updateTodo } from '../controllers/todos';

const router = Router();

router.post('/', createTodo);

router.get('/', getTodos);

router.patch('/:id', updateTodo);   // update by id

router.delete('/:id', deleteTodo);  // delete by id

export default router;