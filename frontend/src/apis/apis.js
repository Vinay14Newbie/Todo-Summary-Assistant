import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3000/api'
});

export const fetchTodos = async () => {
  try {
    const response = await API.get('/');
    return response.data;
  } catch (error) {
    console.error('Error fetching todos:', error);
    throw error;
  }
};

export const addTodoAPI = async (task) => {
  try {
    const response = await API.post('/', { task });
    return response;
  } catch (error) {
    console.error('Error adding todo:', error);
    throw error;
  }
};

export const deleteTodoAPI = async (id) => {
  try {
    const response = await API.delete(`/${id}`);
    return response;
  } catch (error) {
    console.error(`Error deleting todo with ID ${id}:`, error);
    throw error;
  }
};

export const updateTodoAPI = async (id, todo) => {
  try {
    const response = await API.put(`/${id}`, { todo });
    return response;
  } catch (error) {
    console.error(`Error updating todo with ID ${id}:`, error);
    throw error;
  }
};

export const onToggleCompleteAPI = async (id, currentStatus) => {
  try {
    const response = await API.put(`/todos/${id}`, {
      completed: !currentStatus
    });
    return response;
  } catch (error) {
    console.log(`Error while updating the todo ${id}:`, error);
    throw error;
  }
};

export default API;
