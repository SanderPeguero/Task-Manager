import { useState } from 'react'
import Navbar from './layout/Navbar'
import { Outlet, Route, Routes } from 'react-router-dom'
import YourComponent from './layout/Form'
import ToDoList from './layout/ToDoList'
function App() {

  const [openmodal, setOpenmodal] = useState(true)

  return (
    <>
     
      <header>
        <Navbar openmodal={openmodal} setOpenmodal={setOpenmodal}></Navbar>
      </header>
      <p>hola</p>
      <YourComponent openmodal={openmodal} setOpenmodal={setOpenmodal}></YourComponent>
      <Routes>
        <Route>
          <Route path="/todolist" element={<ToDoList/>} component={""} />
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
