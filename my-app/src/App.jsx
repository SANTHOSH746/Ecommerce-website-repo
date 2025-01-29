// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Login } from './Component/Login'
import { SignUp } from './Component/SignUp'
import {Home} from './page/Home'

function App() {
  

  return (
    <>
      <Routes>
        <Route path = "/Home" element = {<Home/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp/>}/>

      </Routes>
    </>
  )
}

export default App
