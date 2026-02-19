import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Pages/Login'
import RegisterPage from './Pages/RegisterPage'
import ProfilePage from './Pages/ProfilePage'
import Dashboard from './Pages/TempD'


const App = () => {
  return (
   <BrowserRouter>
    <Routes>
        <Route path='/regis' element={<RegisterPage/>} />
        <Route path='/' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App