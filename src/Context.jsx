import { createContext, useContext, useEffect, useState } from "react"
import { signInWithEmailAndPassword, signOut } from "firebase/auth"
import { auth } from "./firebase/firebase"
import { Navigate } from "react-router-dom";
import { Fa500Px } from "react-icons/fa";
const Context = createContext();

export const useAuth = () => {
  const context = useContext(Context);
  if (!context) throw new Error("There is no Auth provider");
  return context;
};

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
    priority: "Medium",
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
    priority: "Medium",
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


export function AuthProvider({ children }) {
  const [authToken, setauthToken] = useState()
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

  const login = async (email, password) => {
    console.log("Backend")

    try {
      await signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        const user = userCredential.user
        console.log(userCredential)
        user.getIdToken().then((value) => {
          setauthToken(value)
          console.log("Token")
          console.log(authToken)
          localStorage.setItem("Token", value)
        })
      })
    } catch (error) {

    }
  };

  useEffect(() => {

  }, [authToken])


  const logout = async () => {
    console.log("Logout")
    await signOut(auth)
    localStorage.clear();
  }



  return (
    <Context.Provider
      value={{ login, logout, authToken, ToDo, setToDo, ToDoEdit, setToDoEdit, ToDoDeleted, setToDoDeleted, CategoryPre }}
    >
      {children}
    </Context.Provider>
  )
}

