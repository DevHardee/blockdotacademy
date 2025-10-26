import './App.css'
import { Routes, Route } from 'react-router-dom'
//import { UserLayout } from './components/UserLayout'
import Index from './pages'
import { MainLayout } from './components/MainLayout'
import Login from './pages/Login'
import SignUp from './pages/Signup'

function App() {

  return (
  //  <UserLayout>
  //   <Routes>
  //     <Route path='/' element={<Index/>}/>
  //   </Routes>
  //  </UserLayout>

  <MainLayout>
    <Routes>
      <Route path='/' element={<Index/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
    </Routes>
   </MainLayout>
  )
}

export default App
