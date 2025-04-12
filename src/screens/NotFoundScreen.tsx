import { NavLink } from 'react-router-dom'

function NotFoundScreen() {
  document.title = '404 - React Todo'

  return (
    <main>
      <div className="mt-8">
        <h1 className="text-2xl font-bold">Page not found</h1>
      </div>

      <p className="mt-8 text-secondary">ページが見つかりませんでした</p>

      <div className="mt-8   flex justify-between">
        <NavLink to="/" className="outlined-button">
          戻る
        </NavLink>
      </div>
    </main>
  )
}

export default NotFoundScreen
