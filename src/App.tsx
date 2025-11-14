import './App.css'
import { useEffect } from 'react'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import { MainLayout } from './components/layouts/MainLayout'
import { UserLayout } from './components/layouts/UserLayout'
import { AdminLayout } from './components/layouts/AdminLayout'
import AdminDashboard from './pages/admin/Dashboard'
import AdminCourses from './pages/admin/Courses'
import AdminAnalytics from './pages/admin/Analytics'
import AdminUsers from './pages/admin/Users'
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
  const { isAuthenticated, isAdmin } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated && !isAdmin) {
      navigate("/profile", { replace: true })
    }
  }, [isAuthenticated, isAdmin])

  if (isAuthenticated && isAdmin) {
    return (
      <AdminLayout>
        <Routes>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/courses" element={<AdminCourses />} />
          <Route path="/admin/analytics" element={<AdminAnalytics />} />
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route path="/admin/*" element={<Navigate to="/admin/dashboard" replace />} />
        </Routes>
      </AdminLayout>
    );
  }

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
