import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { createTodo } from '../utils/storage'
import Textarea from '../parts/Textarea'

function CreateScreen() {
  document.title = 'Todoの作成 - React Todo'

  const navigate = useNavigate()

  const [content, setContent] = useState('')

  const handleCreate = () => {
    createTodo(content)
    navigate('/')
  }

  return (
    <main>
      <div className="mt-8">
        <h1 className="text-2xl font-bold">Todoの作成</h1>
      </div>

      <Textarea
        value={content}
        onChange={(value) => setContent(value)}
        autoFocus
        className="mt-8"
      />

      <div className="mt-8   flex justify-between">
        <NavLink to="/" className="outlined-button">
          戻る
        </NavLink>

        <button
          onClick={handleCreate}
          disabled={content.length === 0}
          className="filled-button"
        >
          作成
        </button>
      </div>
    </main>
  )
}

export default CreateScreen
