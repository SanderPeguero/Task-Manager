import { createContext, useContext, useEffect, useState } from "react"
import { signInWithEmailAndPassword,createUserWithEmailAndPassword, signOut } from "firebase/auth"
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
  const PriorityList = [
    {
      id: 1,
      name: "Heigh",
      color: '#FFD700'
    },
    {
      id: 2,
      name: "Medium",
      color: '#00CED1'
    },
    {
      id: 3,
      name: "Low",
      color: '#FF6347'
    },
   


]


export function AuthProvider({ children }) {
    const [ToDo, setToDo] = useState([])
    const [ToDoEdit, setToDoEdit] = useState({})
    const [ToDoDeleted, setToDoDeleted] = useState({})
    const [CategoryPre, setCategoryPre] = useState([])
  //  const [Priority, setPriority] = useState([])
    useEffect(() => {
      setToDo(task)
      setCategoryPre(CategoryList)
      // setPriority()
      console.log("App")
      console.log(ToDo)
    }, [])

    const login = async (email, password) => {
        console.log("Backend")
      
            try {
               await signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
                    const user = userCredential.user
                    user.getIdToken().then((value) => {
                        console.log("Token")
                        console.log(value)
                    })
                })
            } catch (error) {
                
            }
        

        // return signInWithEmailAndPassword(auth, email, password);
    };
    const signup = async (email, password) => {
      // Validar el formato del correo electrónico
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        console.error("Error: El formato del correo electrónico no es válido");
        return;
      }
    
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        console.log("Usuario registrado exitosamente");
      } catch (error) {
        // Manejar errores específicos
        if (error.code === "auth/weak-password") {
          console.error("Error: La contraseña es débil. Debe tener al menos 6 caracteres");
        } else if (error.code === "auth/email-already-in-use") {
          console.error("Error: El correo electrónico ya está en uso. Prueba con otro");
        } else if (error.code === "auth/invalid-email") {
          console.error("Error: El formato del correo electrónico no es válido");
        } else {
          console.error("Error al registrar usuario:", error.message);
        }
      }
    }
    

    const logout = () => signOut(auth)



    return (
        <Context.Provider
            value={{ login,signup, logout, ToDo, setToDo, ToDoEdit, setToDoEdit, ToDoDeleted, setToDoDeleted, CategoryPre,PriorityList}}
        >
            {children}
        </Context.Provider>
    )
}

