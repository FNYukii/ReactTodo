import { NavLink } from 'react-router-dom'
import { readTodos } from '../utils/storage'

function TopScreen() {
  document.title = 'React Todo'

  const todos = readTodos()

  return (
    <main>
      <div className="mt-8   flex justify-between items-center">
        <h1 className="text-2xl font-bold">Todos</h1>

        <NavLink to="/new" className="outlined-button -my-2">
          新規Todo
        </NavLink>
      </div>

      <div className="mt-8">
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
