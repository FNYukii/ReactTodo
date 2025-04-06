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
 * @returns Todoの配列
 */
export const readTodos = (): Todo[] => {
  return getTodos()
}

/**
 * 新規Todoを追加
 * @param content 追加したいTodoのcontent
 */
export const createTodo = (content: string) => {
  const newTodo: Todo = {
    id: ulid(),
    content,
  }

  const currentTodos = readTodos()
  setTodos([...currentTodos, newTodo])
}

export const updateTodo = (id: string, content: string) => {
  // TODO: LocalStorageのTodoを更新
}

export const deleteTodo = (id: string) => {
  // TODO: LocalStorageのTodoを削除
}
