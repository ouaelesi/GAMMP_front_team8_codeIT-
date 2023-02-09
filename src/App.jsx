import { Routes, Route } from "react-router-dom"
import SideBar from './components/SideBar'
import DashboardPage from './pages/DashboardPage'
import AnalyticsPage from './pages/AnalyticsPage'
import ActivitiesPage from './pages/ActivitiesPage'
import ProfilePage from './pages/ProfilePage'
import './index.css'

function App() {
  return (
    <div className="bg-main-bg flex w-full">
      <SideBar />
      <main className="flex-1">
        <Routes>
          <Route path='/' element={<DashboardPage />} />
          <Route path='/analytics' element={<AnalyticsPage />} />
          <Route path='/activities' element={<ActivitiesPage />} />
          <Route path='/profile' element={<ProfilePage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App