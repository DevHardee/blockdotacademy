import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout'
import { UserLayout } from './layouts/UserLayout'
import { AdminLayout } from './layouts/AdminLayout'
import AdminDashboard from './pages/admin/Dashboard'
import AdminCourses from './pages/admin/Courses'
import AdminAnalytics from './pages/admin/Analytics'
import AdminUsers from './pages/admin/Users'
import AdminEditCourse from './pages/admin/EditCourse'
import AdminAddCourse from './pages/admin/AddCourse'
import Home from './pages/Home'
import Login from './pages/auth/Login'
import SignUp from './pages/auth/Signup'
import NotFound from './pages/NotFound'
import MyCourses from './pages/MyCourses'
import CourseDetail from './pages/CourseDetail'
import Profile from './pages/Profile'
import UserDashboard from './pages/UserDashboard'
import { Toaster } from "sonner"
import { AuthProvider, useAuth } from './context/AuthContext'
import ComingSoon from './sections/ComingSoon'

const AppRoutes = () => {
  const { isAuthenticated, isAdmin } = useAuth()

  if (isAuthenticated && isAdmin) {
    return (
      <AdminLayout>
        <Routes>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/courses" element={<AdminCourses />} />
          <Route path="/admin/courses/:id/edit" element={<AdminEditCourse />} />
          <Route path="/admin/courses/add" element={<AdminAddCourse />} />
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
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/my-courses" element={<MyCourses />} />
          <Route path="/course/:id" element={<CourseDetail />} />
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
        <Route path="/course/:id" element={<CourseDetail />} />
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
