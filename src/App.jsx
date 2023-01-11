import { Routes, Route } from "react-router-dom"
import SideBar from './components/SideBar'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import './index.css'

function App() {
  return (
    <>
      <SideBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </>
  )
}

export default App
