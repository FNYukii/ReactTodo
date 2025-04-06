import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TopScreen from './screens/TopScreen'
import Header from './parts/Header'
import CreateScreen from './screens/CreateScreen'
import EditScreen from './screens/EditScreen'

function App() {
  return (
    <div className="container mx-auto sm:px-0 px-4">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<TopScreen />} />
          <Route path="/new" element={<CreateScreen />} />
          <Route path="/todos/:id" element={<EditScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
