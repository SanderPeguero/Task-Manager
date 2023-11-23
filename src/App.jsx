import { useState, useEffect } from 'react'
import { Context } from './Context'
import Navbar from './layout/Navbar'
import { Outlet, Route, Routes } from 'react-router-dom'
import YourComponent from './layout/Form'
import ToDoList from './layout/ToDoList'

const task = [
  {
      id: 1,
      title: "Complete monthly report",
      description: "Prepare and send activity",
      category: "Work",
      priority: "High",
      expirationdate: "2023-12-1",
      status: "Pending",
      comments: [1],
      notes: "Be sure to include key statistics.",
      responsible: "Juan"
  },
  {
      id: 2,
      title: "Buy ingredients for dinner",
      description: "Make a list and buy the ingredients for dinner.",
      category: "Personal",
      priority: "medium",
      expirationdate: "2023-11-25",
      status: "Pending",
      comments: [],
      notes: "",
      responsible: "Maria",
  },

  {
      id: 3,
      title: "Review code of the new component",
      description: "Perform a code review of the component before deployment.",
      category: "Development",
      priority: "High",
      expirationdate: "2023-12-05",
      status: "In Progress",
      comments: ["Can efficiency be improved here?"],
      notes: "",
      responsible: "Carlos",
  },
  {
      id: 4,
      title: "Exercise",
      description: "Perform a 30-minute training session.",
      category: "Health",
      priority: "Low",
      expirationdate: "2023-11-26",
      status: "Pending",
      comments: [],
      notes: "Preferably in the morning.",
      responsible: "Ana",
  },
  {
      id: 5,
      title: "Set up planning meeting",
      description: "Coordinate with the team to establish the agenda for the planning meeting.",
      category: "Work",
      priority: "medium",
      expirationdate: "2023-12-02",
      status: "Pending",
      comments: ["Can all team members attend?"],
      grades: "",
      responsible: "Project Manager",
  },
]

const CategoryList = [
  {
      id: 1,
      name: "Work",
      color: '#FFD700'
  },
  {
      id: 2,
      name: "Personal",
      color: '#00CED1'
  },
  {
      id: 3,
      name: "Study",
      color: '#FF6347'
  },
  {
      id: 4,
      name: "Health",
      color: '#20B2AA'
  },

  {
      id: 5,
      name: ""
  }

]



function App() {

  const [openmodal, setOpenmodal] = useState(true)
  const [ToDo, setToDo] = useState([])
  const [ToDoEdit, setToDoEdit] = useState({})
  const [ToDoDeleted, setToDoDeleted] = useState({})
  const [CategoryPre, setCategoryPre] = useState([])

  useEffect(() => {
    setToDo(task)
    setCategoryPre(CategoryList)
    console.log("App")
    console.log(ToDo)
  }, [])
  

  return (
    <>
     <Context.Provider value={{ToDo, setToDo, ToDoEdit, setToDoEdit, ToDoDeleted, setToDoDeleted, CategoryPre}}>
   
      <header>
        <Navbar openmodal={openmodal} setOpenmodal={setOpenmodal}></Navbar>
      </header>
      <p>hola</p>
    
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
       </Context.Provider>
    </>


  )
}

export default App
