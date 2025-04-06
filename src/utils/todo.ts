import { ulid } from 'ulid'
import Todo from '../types/Todo'

/**
 * Todo型配列をJSON文字列としてLocalStorageに保存
 * @returns
 */
const getTodos = (): Todo[] => {
  const todosSerialized = localStorage.getItem('todos')
  if (!todosSerialized) return []
  return JSON.parse(todosSerialized) as Todo[]
}

/**
 * LocalStorageからJSON文字列を取得し、Todo型配列に変換して返却
 * @param todos
 */
const setTodos = (todos: Todo[]) => {
  const todosSerialized = JSON.stringify(todos)
  localStorage.setItem('todos', todosSerialized)
}

/**
 * Todosを読み取り
 * @returns
 */
export const readTodos = (): Todo[] => {
  return getTodos()
}

/**
 * 指定したTodoを読み取り
 * @returns
 */
export const readTodo = (id: string): Todo | null => {
  const todos = getTodos()
  const filterdTodo = todos.find((todo) => todo.id === id)
  return filterdTodo ?? null
}

/**
 * 新規Todoを追加
 * @param content
 */
export const createTodo = (content: string) => {
  const newTodo: Todo = {
    id: ulid(),
    content,
  }

  const currentTodos = readTodos()
  setTodos([...currentTodos, newTodo])
}

/**
 * 既存Todoのcontentを更新
 * @param id
 * @param content
 */
export const updateTodo = (id: string, content: string) => {
  const todos = getTodos()
  const index = todos.findIndex((todo) => todo.id === id)
  todos[index].content = content
  setTodos(todos)
}

/**
 * 既存Todoを削除
 * @param id
 */
export const deleteTodo = (id: string) => {
  const todos = getTodos()
  const filterdTodos = todos.filter((todo) => todo.id !== id)
  setTodos(filterdTodos)
}
