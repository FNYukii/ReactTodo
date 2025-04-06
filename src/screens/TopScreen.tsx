import { NavLink } from 'react-router-dom'
import Todo from '../types/Todo'

const DUMMY_TODOS: Todo[] = [
  {
    id: 'aaa',
    content: 'お花見に行く',
  },
  {
    id: 'bbb',
    content: 'Reactの公式チュートリアルに挑戦',
  },
  {
    id: 'ccc',
    content: '買い物\n・洗剤\n・パスタ',
  },
  {
    id: 'ddd',
    content: '試験勉強の計画を立てる',
  },
]

function TopScreen() {
  const todos = DUMMY_TODOS

  return (
    <main>
      <h1 className="mt-4   text-2xl font-bold">Todos</h1>

      {todos.length === 0 && (
        <p className="mt-4 text-secondary">Todoがありません</p>
      )}

      {todos.length !== 0 && (
        <div className="mt-4   grid grid-cols-3 gap-8">
          {todos.map((todo, index) => (
            <NavLink
              key={index}
              to={`/todos/${todo.id}`}
              className="p-4 border border-frame   hover:bg-translucent transition"
            >
              <p className="whitespace-pre">{todo.content}</p>
            </NavLink>
          ))}
        </div>
      )}
    </main>
  )
}

export default TopScreen
