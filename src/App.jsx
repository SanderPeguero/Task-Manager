import { useState, useEffect } from 'react'
import Navbar from './layout/Navbar'
import { Outlet, Route, Routes } from 'react-router-dom'
import AddToDo from './layout/AddToDo'
import ToDoList from './layout/ToDoList'
import LogIn from './layout/LogIn'
import Signln from './layout/Signln'
import { AuthProvider } from './Context'
import { useAuth } from './Context'
import Logout from './layout/Logout'
import ToDoDetails from './components/ToDoDetails'

function App() {

  const { authToken } = useAuth()
  const Token = localStorage.getItem("Token")
const [openmodal, setOpenmodal] = useState(true)
const isAuthenticated = !!Token;
useEffect(() => {
  console.log("App")
  console.log(isAuthenticated)
  
}, [Token])





  if (isAuthenticated === false) {
    return (
      <>
        <Routes>
          <Route>
            <Route path="/" element={<LogIn />} component={""} />
            <Route path="/signln" element={<Signln />} component={""} />
          </Route>
        </Routes>
      </>
    )

  } else {
    return (
      <>

        <header>
          <Navbar openmodal={openmodal} setOpenmodal={setOpenmodal}></Navbar>
        </header>
        <p>hola</p>

        <Routes>
          <Route>
            <Route path='/logout' element={<Logout />} />
            <Route path="/todolist" element={<ToDoList />} component={""} />
            <Route path="/categories" element={<ToDoDetails/>} component={""} />
            <Route path="/login" element={<LogIn />} component={""} />
            <Route path="/signln" element={<Signln />} component={""} />
            <Route path="/" element={""} component={""} />
          </Route>
        </Routes>
        <Outlet />

      </>
    )
  }

}

export default App
