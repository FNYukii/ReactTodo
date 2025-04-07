import { NavLink } from 'react-router-dom'

type Variant = 'page' | 'todo'

function NotFoundScreen(props: { variant: Variant }) {
  document.title = 'Not Found | React Todo'

  const title = props.variant === 'page' ? 'Page not found' : 'Todo not found'
  const message =
    props.variant === 'page'
      ? 'ページが見つかりませんでした'
      : 'Todoが見つかりませんでした'

  return (
    <main>
      <div className="mt-4">
        <h1 className="py-2   text-2xl font-bold">{title}</h1>
      </div>

      <p className="mt-4 text-secondary">{message}</p>

      <div className="mt-8   flex justify-between">
        <NavLink to="/" className="outlined-button">
          戻る
        </NavLink>
      </div>
    </main>
  )
}

export default NotFoundScreen
