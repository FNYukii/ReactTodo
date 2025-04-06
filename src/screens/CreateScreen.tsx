import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const SAMPLE_TODOS = [
  '買い物',
  '洗濯',
  '部屋を掃除する',
  '新しい家具を探す',
  'なぜ空は青いのか調べる',
  'ペットと遊ぶ',
  '推しのために何ができるか考える',
  '友人の家を訪ねる',
  '旅行の計画を立てる',
  '新しい趣味を見つける',
]

function CreateScreen() {
  document.title = 'Todoの作成 | React Todo'

  const [content, setContent] = useState('')

  const rand = Math.floor(Math.random() * SAMPLE_TODOS.length)
  const sampleTodo = SAMPLE_TODOS[rand]

  return (
    <main>
      <h1 className="mt-4   text-2xl font-bold">Todoの作成</h1>

      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={4}
        placeholder={sampleTodo}
        className="mt-4 w-full min-h-28 p-4 placeholder:text-secoundary   border border-frame   hover:not-focus:bg-frame-hover transition   outline-none focus:border-accent   resize-none field-sizing-content"
      />

      <div className="mt-8   flex justify-between">
        <NavLink
          to="/"
          className="px-16 py-3   text-accent border border-accent   hover:bg-button-hover transition"
        >
          戻る
        </NavLink>

        <button
          disabled={content.length === 0}
          className="px-16 py-3   text-wall bg-accent disabled:bg-switch-hover   hover:bg-switch-hover transition   not-disabled:cursor-pointer"
        >
          作成
        </button>
      </div>
    </main>
  )
}

export default CreateScreen
