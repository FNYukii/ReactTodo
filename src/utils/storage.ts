import { ulid } from 'ulid'
import Todo from '../types/Todo'

/**
 * LocalStorageからJSON文字列を取得し、Todo型配列に変換して返却
 * @returns {Todo[]} 保存されたTodos
 */
const getTodos = (): Todo[] => {
  const todosSerialized = localStorage.getItem('todos')
  if (!todosSerialized) return []
  return JSON.parse(todosSerialized) as Todo[]
}

/**
 * TodosをJSON文字列としてLocalStorageに保存
 * @param {Todos[]} todos Todoの配列
 */
const setTodos = (todos: Todo[]) => {
  const todosSerialized = JSON.stringify(todos)
  localStorage.setItem('todos', todosSerialized)
}

/**
 * 保存済みの全てのTodosを読み取る
 * @returns {Todo[]} 全てのTodos
 */
export const readTodos = (): Todo[] => {
  return getTodos()
}

/**
 * 指定したTodoを1つ読み取る
 * @param {string} id Todoのid
 * @returns {Todo} 指定されたTodo
 */
export const readTodo = (id: string): Todo | null => {
  const todos = getTodos()
  const filterdTodo = todos.find((todo) => todo.id === id)
  return filterdTodo ?? null
}

/**
 * 新規Todoを追加
 * @param {string} content Todoのcontent
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
 * @param {string} id 更新したいTodoのid
 * @param {string} content 新しいcontent
 */
export const updateTodo = (id: string, content: string) => {
  const todos = getTodos()
  const index = todos.findIndex((todo) => todo.id === id)
  todos[index].content = content
  setTodos(todos)
}

/**
 * 既存Todoを削除
 * @param {string} id 削除したいTodoのid
 */
export const deleteTodo = (id: string) => {
  const todos = getTodos()
  const filterdTodos = todos.filter((todo) => todo.id !== id)
  setTodos(filterdTodos)
}
