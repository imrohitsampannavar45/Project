import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Application from './pages/Application'
import ApplyJob from './pages/ApplyJob'
import RecruiterLogin from './components/RecruiterLogin'
import { AppContext } from './context/AppContext'
const App = () => {

  const {showRecruiterLogin} = useContext(AppContext) 

  return (
    <div>
      {showRecruiterLogin && <RecruiterLogin />  }
 
<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/applications' element={<Application/>} />
  <Route path='/apply-job/:id' element={<ApplyJob/>} />
</Routes>
    </div>
  )
}

export default App
