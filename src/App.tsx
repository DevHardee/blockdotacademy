import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import { MainLayout } from './components/MainLayout'
import { UserLayout } from './components/UserLayout'
import Index from './pages'
import Login from './pages/Login'
import SignUp from './pages/Signup'
import NotFound from './pages/NotFound'
import { Toaster } from "sonner"
import { AuthProvider, useAuth } from './context/AuthContext'
import ComingSoon from './sections/ComingSoon'

const AppRoutes = () => {
  const { isAuthenticated } = useAuth()

  if (isAuthenticated) {
    return (
      <UserLayout>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/" element={<Navigate to="/" replace />} />
          <Route path="/my-courses" element={<ComingSoon />} />
          <Route path="/community" element={<ComingSoon />} />
          <Route path="/leaderboard" element={<ComingSoon />} />
          <Route path="/profile" element={<ComingSoon />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster position="top-right" richColors closeButton theme="system" />
      </UserLayout>
    )
  }

  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster position="top-right" richColors closeButton theme="system" />
    </MainLayout>
  )
}

export default function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  )
}
