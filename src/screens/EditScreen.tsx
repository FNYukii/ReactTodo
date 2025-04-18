import { useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { deleteTodo, readTodo, updateTodo } from '../utils/storage'
import Todo from '../types/Todo'
import { generateSampleTodoContent } from '../utils/form'

function EditScreenTodoNotExists() {
  return (
    <main>
      <div className="mt-8">
        <h1 className="text-2xl font-bold">Todo not found</h1>
      </div>

      <p className="mt-8 text-secondary">Todoが見つかりませんでした</p>

      <div className="mt-8   flex justify-between">
        <NavLink to="/" className="outlined-button">
          戻る
        </NavLink>
      </div>
    </main>
  )
}

function EditScreenTodoExists(props: { todo: Todo }) {
  const navigate = useNavigate()

  const [content, setContent] = useState(props.todo.content)

  const handleDelete = () => {
    if (!window.confirm('Todoを削除してもよろしいですか？')) return
    deleteTodo(props.todo.id)
    navigate('/')
  }

  const handleSave = () => {
    updateTodo(props.todo.id, content)
    navigate('/')
  }

  return (
    <main>
      <div className="mt-8">
        <h1 className="text-2xl font-bold">Todoの編集</h1>
      </div>

      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder={generateSampleTodoContent()}
        className="mt-8 outlined-textarea"
      />

      <div className="mt-8   flex justify-between   gap-8 items-start">
        <NavLink to="/" className="outlined-button">
          戻る
        </NavLink>

        <div className="flex gap-8   flex-wrap justify-end">
          <button onClick={handleDelete} className="outlined-button">
            削除
          </button>

          <button
            onClick={handleSave}
            disabled={content.length === 0 || content.trim() === ''}
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
  document.title = 'Todoの編集 - React Todo'

  let { id } = useParams()
  const todo = id !== undefined ? readTodo(id) : null

  return (
    <>
      {id === undefined || (todo === null && <EditScreenTodoNotExists />)}
      {id && todo && <EditScreenTodoExists todo={todo} />}
    </>
  )
}

export default EditScreen
