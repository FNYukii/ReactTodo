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
      <div className="mt-4">
        <h1 className="py-2   text-2xl font-bold">Todoの作成</h1>
      </div>

      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={4}
        placeholder={sampleTodo}
        className="mt-6 w-full min-h-28 p-4     border border-frame   hover:not-focus:bg-frame-hover transition   outline-none focus:border-accent    placeholder:text-secoundary   resize-none field-sizing-content"
      />

      <div className="mt-8   flex justify-between">
        <NavLink to="/" className="outlined-button">
          戻る
        </NavLink>

        <button disabled={content.length === 0} className="filled-button">
          作成
        </button>
      </div>
    </main>
  )
}

export default CreateScreen
