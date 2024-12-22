import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Application from './pages/Application'
import ApplyJob from './pages/ApplyJob'
import RecruiterLogin from './components/RecruiterLogin'
const App = () => {
  return (
    <div>
      <RecruiterLogin />
<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/applications' element={<Application/>} />
  <Route path='/apply-job/:id' element={<ApplyJob/>} />
</Routes>
    </div>
  )
}

export default App
