import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3000/api'
});

export const fetchTodos = () => API.get('/');

export const addTodoAPI = (task) => API.post('/', { task });

export const deleteTodoAPI = (id) => API.delete(`/${id}`);

export const updateTodoAPI = (id, todo) => API.put(`/${id}`, { todo });

export const summarizeTodos = () => API.post('/summarise');

export default API;
