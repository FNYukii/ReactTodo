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
  document.title = 'React Todo'

  const todos = DUMMY_TODOS

  return (
    <main>
      <div className="mt-4   flex justify-between items-center">
        <h1 className="py-2   text-2xl font-bold">Todos</h1>

        <NavLink to="/new" className="outlined-button">
          新規Todo
        </NavLink>
      </div>

      <div className="mt-6">
        {todos.length === 0 && (
          <p className="text-secondary">Todoがありません</p>
        )}

        {todos.length !== 0 && (
          <div className="grid grid-cols-3 gap-8">
            {todos.map((todo, index) => (
              <NavLink
                key={index}
                to={`/todos/${todo.id}`}
                className="p-4 border border-frame   hover:bg-frame-hover transition"
              >
                <p className="whitespace-pre">{todo.content}</p>
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}

export default TopScreen
