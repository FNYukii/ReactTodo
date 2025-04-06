import { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { deleteTodo, readTodo, updateTodo } from '../utils/todo'
import { generateSampleContent } from '../utils/form'

function EditScreen() {
  document.title = 'Todoの編集 | React Todo'

  const navigate = useNavigate()
  let { id } = useParams()

  const [content, setContent] = useState('')

  const handleDelete = () => {
    if (!id) return
    deleteTodo(id)
    navigate('/')
  }

  const handleSave = () => {
    if (!id) return
    updateTodo(id, content)
    navigate('/')
  }

  useEffect(() => {
    if (!id) return
    const todo = readTodo(id)
    setContent(todo?.content ?? '')
  }, [])

  return (
    <main>
      <div className="mt-4">
        <h1 className="py-2   text-2xl font-bold">Todoの編集</h1>
      </div>

      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder={generateSampleContent()}
        className="mt-6 w-full min-h-28 p-4     border border-frame   hover:not-focus:bg-frame-hover transition   outline-none focus:border-accent    placeholder:text-secoundary   resize-none field-sizing-content"
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

export default EditScreen
