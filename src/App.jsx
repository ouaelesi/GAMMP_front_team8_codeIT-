import { Routes, Route } from "react-router-dom"
import SideBar from './components/SideBar'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import './index.css'

function App() {
  return (
    <div className="bg-main-bg flex w-max">
      <SideBar />
      <main className="flex-1">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
