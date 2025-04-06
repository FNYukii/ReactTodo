import { useState } from 'react'
import { NavLink } from 'react-router-dom'

function CreateScreen() {
  document.title = 'Todoの作成 | React Todo'

  const [content, setContent] = useState('')

  return (
    <main>
      <h1 className="mt-4   text-2xl font-bold">Todoの作成</h1>

      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={4}
        className="mt-4 w-full min-h-28 p-4   border border-frame   hover:not-focus:bg-frame-hover transition   outline-none focus:border-accent   resize-none field-sizing-content"
      />

      <div className="mt-8   flex justify-between">
        <NavLink
          to="/"
          className="px-16 py-3   text-accent border border-accent   hover:bg-button-hover transition"
        >
          戻る
        </NavLink>

        <button className="px-16 py-3   text-wall bg-accent   hover:bg-switch-hover transition   cursor-pointer">
          作成
        </button>
      </div>
    </main>
  )
}

export default CreateScreen
