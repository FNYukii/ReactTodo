import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TopScreen from './screens/TopScreen'
import Header from './parts/Header'

function App() {
  return (
    <div className="container mx-auto sm:px-0 px-4">
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TopScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
