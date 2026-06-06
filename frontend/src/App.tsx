import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout'
import { UserLayout } from './layouts/UserLayout'
import { AdminLayout } from './layouts/AdminLayout'
import { Toaster } from "sonner"
import { AuthProvider, useAuth } from './context/AuthContext'
import { Suspense, lazy } from 'react'
import ScrollToTop from './components/ScrollToTop'

// Lazy load components
const AdminDashboard = lazy(() => import('./pages/admin/Dashboard'))
const AdminCourses = lazy(() => import('./pages/admin/Courses'))
const AdminAnalytics = lazy(() => import('./pages/admin/Analytics'))
const AdminUsers = lazy(() => import('./pages/admin/Users'))
const AdminEditCourse = lazy(() => import('./pages/admin/EditCourse'))
const AdminAddCourse = lazy(() => import('./pages/admin/AddCourse'))
const AdminBlog = lazy(() => import('./pages/admin/AdminBlog'))
const AdminAddPost = lazy(() => import('./pages/admin/AdminAddPost'))
const Home = lazy(() => import('./pages/Home'))
const Login = lazy(() => import('./pages/auth/Login'))
const SignUp = lazy(() => import('./pages/auth/Signup'))
const NotFound = lazy(() => import('./pages/NotFound'))
const MyCourses = lazy(() => import('./pages/MyCourses'))
const CourseDetail = lazy(() => import('./pages/CourseDetail'))
const Profile = lazy(() => import('./pages/Profile'))
const UserDashboard = lazy(() => import('./pages/UserDashboard'))
const JobsBoard = lazy(() => import('./pages/JobsBoard'))
const Blog = lazy(() => import('./pages/Blog'))
const ComingSoon = lazy(() => import('./sections/ComingSoon'))

// Fallback component
const PageLoader = () => (
  <div className="min-h-screen bg-[#030303] flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin shadow-[0_0_15px_rgba(41,98,255,0.4)]" />
  </div>
)

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
          <Route path="/admin/blog" element={<AdminBlog />} />
          <Route path="/admin/blog/add" element={<AdminAddPost />} />
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
        <Route path="/jobs" element={<JobsBoard />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MainLayout>
  )
}

export default function App() {
  return (
    <AuthProvider>
      <ScrollToTop />
      <Toaster position="top-right" richColors closeButton theme="system" />
      <Suspense fallback={<PageLoader />}>
        <AppRoutes />
      </Suspense>
    </AuthProvider>
  )
}
