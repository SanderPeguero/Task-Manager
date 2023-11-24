import { useState, useEffect } from 'react'
import Navbar from './layout/Navbar'
import { Outlet, Route, Routes } from 'react-router-dom'
import AddToDo from './layout/AddToDo'
import ToDoList from './layout/ToDoList'
import LogIn from './layout/LogIn'
import Signln from './layout/Signln'
import { AuthProvider } from './Context'


function App() {

  const [openmodal, setOpenmodal] = useState(true)
  return (
    <>
      <AuthProvider>
        <header>
          <Navbar openmodal={openmodal} setOpenmodal={setOpenmodal}></Navbar>
        </header>
        <p>hola</p>

        <Routes>
          <Route>
            <Route path="/todolist" element={<ToDoList />} component={""} />
            <Route path="/categories" element={""} component={""} />
            <Route path="/login" element={<LogIn />} component={""} />
            <Route path="/signln" element={<Signln/>} component={""} />
            <Route path="/" element={""} component={""} />
          </Route>
        </Routes>
        <Outlet />
      </AuthProvider>
    </>
  )
}

export default App
