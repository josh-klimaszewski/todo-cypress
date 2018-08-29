import axios from 'axios'

export const saveTodo = (todo) =>
  axios.post('http://localhost:3030/todos', todo)

  export const loadTodos = () =>
  axios.get('http://localhost:3030/todos')

  export const destroyTodo = (id) =>
  axios.delete(`http://localhost:3030/todos/${id}`)

  export const updateTodo = (todo) =>
  axios.put(`http://localhost:3030/todos/${todo.id}`, todo)