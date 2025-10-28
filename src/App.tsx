// import './App.css'
// import { Routes, Route, Navigate } from 'react-router-dom'
// //import { UserLayout } from './components/UserLayout'
// import Index from './pages'
// import { MainLayout } from './components/MainLayout'
// import Login from './pages/Login'
// import SignUp from './pages/Signup'
// import NotFound from './pages/NotFound'
// import { Toaster } from "sonner"


// function App() {

//   return (
//   //  <UserLayout>
//   //   <Routes>
//   //     <Route path="/" element={<Index />} />
//   //     <Route path="/home" element={<Navigate to="/" replace />} />
//   //     <Route path='/login' element={<Login/>}/>
//   //     <Route path='/signup' element={<SignUp/>}/>

//   //     <Route path='*' element={<NotFound/>}/>
//   //   </Routes>

//   //   <Toaster
//   //       position="top-right"
//   //       richColors
//   //       closeButton
//   //       theme='system'
//   //     />
//   //  </UserLayout>

//   <MainLayout>
//     <Routes>
//       <Route path="/" element={<Index />} />
//       <Route path="/home" element={<Navigate to="/" replace />} />
//       <Route path='/login' element={<Login/>}/>
//       <Route path='/signup' element={<SignUp/>}/>

//       <Route path='*' element={<NotFound/>}/>
//     </Routes>

//     <Toaster
//         position="top-right"
//         richColors
//         closeButton
//         theme='system'
//       />
//    </MainLayout>
//   )
// }

// export default App


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

const AppRoutes = () => {
  const { isAuthenticated } = useAuth()

  if (isAuthenticated) {
    return (
      <UserLayout>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/" element={<Navigate to="/" replace />} />
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
