import { useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { deleteTodo, readTodo, updateTodo } from '../utils/todo'
import { generateSampleContent } from '../utils/form'
import Todo from '../types/Todo'
import NotFoundScreen from './NotFoundScreen'

function EditScreenContent(props: { todo: Todo }) {
  const navigate = useNavigate()

  const [content, setContent] = useState(props.todo.content)

  const handleDelete = () => {
    deleteTodo(props.todo.id)
    navigate('/')
  }

  const handleSave = () => {
    updateTodo(props.todo.id, content)
    navigate('/')
  }

  return (
    <main>
      <div className="mt-4">
        <h1 className="py-2   text-2xl font-bold">Todoの編集</h1>
      </div>

      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder={generateSampleContent()}
        className="mt-6   w-full min-h-28 p-4     border border-frame   hover:not-focus:bg-frame-hover transition   outline-none focus:border-accent    placeholder:text-secoundary   resize-none field-sizing-content"
      />

      <div className="mt-8   flex justify-between">
        <NavLink to="/" className="outlined-button">
          戻る
        </NavLink>

        <div className="flex gap-8">
          <button onClick={handleDelete} className="outlined-button">
            削除
          </button>

          <button
            onClick={handleSave}
            disabled={content.length === 0}
            className="filled-button"
          >
            保存
          </button>
        </div>
      </div>
    </main>
  )
}

function EditScreen() {
  document.title = 'Todoの編集 | React Todo'

  let { id } = useParams()
  const todo = id !== undefined ? readTodo(id) : null

  return (
    <>
      {id === undefined || (todo === null && <NotFoundScreen variant="todo" />)}
      {id && todo && <EditScreenContent todo={todo} />}
    </>
  )
}

export default EditScreen
