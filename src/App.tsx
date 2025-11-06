import './App.css'
import { useEffect } from 'react'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import { MainLayout } from './components/MainLayout'
import { UserLayout } from './components/UserLayout'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/Signup'
import NotFound from './pages/NotFound'
import MyCourses from './pages/MyCourses'
import CourseDetail from './pages/CourseDetail'
import Profile from './pages/Profile'
import { Toaster } from "sonner"
import { AuthProvider, useAuth } from './context/AuthContext'
import ComingSoon from './sections/ComingSoon'

const AppRoutes = () => {
  const { isAuthenticated } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) navigate("/profile", { replace: true })
  }, [isAuthenticated])
  

  if (isAuthenticated) {
    return (
      <UserLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Navigate to="/profile" replace />} />
          <Route path="/my-courses" element={<MyCourses />} />
          <Route path="/course/:id" element={<CourseDetail/>}/>
          <Route path="/community" element={<ComingSoon />} />
          <Route path="/leaderboard" element={<ComingSoon />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </UserLayout>
    )
  }

  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/course/:id" element={<CourseDetail/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MainLayout>
  )
}

export default function App() {
  return (
    <AuthProvider>
      <Toaster position="top-right" richColors closeButton theme="system" />
      <AppRoutes />
    </AuthProvider>
  )
}
