import { useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { deleteTodo, readTodo, updateTodo } from '../utils/storage'
import Todo from '../types/Todo'
import Textarea from '../parts/Textarea'

function NotFoundSection() {
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

function EditSection(props: { todo: Todo }) {
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

      <Textarea
        value={content}
        onChange={(value) => setContent(value)}
        className="mt-8"
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
  document.title = 'Todoの編集 - React Todo'

  let { id } = useParams()
  const todo = id !== undefined ? readTodo(id) : null

  return (
    <>
      {id === undefined || (todo === null && <NotFoundSection />)}
      {id && todo && <EditSection todo={todo} />}
    </>
  )
}

export default EditScreen
