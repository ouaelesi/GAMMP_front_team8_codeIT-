import { Routes, Route } from "react-router-dom"
import SideBar from './components/SideBar'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProfilePage from './pages/ProfilePage'
import './index.css'

function App() {
  return (
    <div className="bg-main-bg flex w-max">
      <SideBar />
      <main className="flex-1">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/profile' element={<ProfilePage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
