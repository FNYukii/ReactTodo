import { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { deleteTodo, readTodo, updateTodo } from '../utils/todo'
import { generateSampleContent } from '../utils/form'
import Todo from '../types/Todo'

function EditSection(props: { todo: Todo; className?: string }) {
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
    <div className={props.className}>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder={generateSampleContent()}
        className="w-full min-h-28 p-4     border border-frame   hover:not-focus:bg-frame-hover transition   outline-none focus:border-accent    placeholder:text-secoundary   resize-none field-sizing-content"
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
    </div>
  )
}

function NotFoundSection(props: { className?: string }) {
  return (
    <div className={props.className}>
      <p className="text-secondary">Todoが見つかりませんでした</p>

      <div className="mt-8   flex justify-between">
        <NavLink to="/" className="outlined-button">
          戻る
        </NavLink>
      </div>
    </div>
  )
}

function EditScreen() {
  document.title = 'Todoの編集 | React Todo'

  let { id } = useParams()
  const [todo, setTodo] = useState<Todo | null>(null)

  useEffect(() => {
    if (!id) return
    const todo = readTodo(id)
    setTodo(todo)
  }, [])

  return (
    <main>
      <div className="mt-4">
        <h1 className="py-2   text-2xl font-bold">Todoの編集</h1>
      </div>

      {id === undefined ||
        (todo === null && <NotFoundSection className="mt-6" />)}

      {id && todo && <EditSection todo={todo} className="mt-6" />}
    </main>
  )
}

export default EditScreen
