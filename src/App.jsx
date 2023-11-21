import { useState } from 'react'
import './App.css'
import Navbar from './layout/Navbar'
import { Outlet, Route, Routes } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <p>hola</p>
      <Routes>
        <Route>
          <Route path="/todolist" element={""} component={""} />
          <Route path="/categories" element={""} component={""} />
          <Route path="/login" element={""} component={""} />
          <Route path="/signup" element={""} component={""} />
          <Route path="/" element={""} component={""} />
        </Route>
      </Routes>
      <Outlet />
    </>


  )
}

export default App
