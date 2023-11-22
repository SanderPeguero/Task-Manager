import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../Context';
import YourComponent from './Form'
import { FaEdit, FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
// const task = [
//     {
//         id: 1,
//         title: "Complete monthly report",
//         description: "Prepare and send activity",
//         category: "Work",
//         priority: "High",
//         expirationdate: "2023-12-1",
//         status: "Pending",
//         comments: [1],
//         notes: "Be sure to include key statistics.",
//         responsible: "Juan"
//     },
//     {
//         id: 2,
//         title: "Buy ingredients for dinner",
//         description: "Make a list and buy the ingredients for dinner.",
//         category: "Personal",
//         priority: "medium",
//         expirationdate: "2023-11-25",
//         status: "Pending",
//         comments: [],
//         notes: "",
//         responsible: "Maria",
//     },

//     {
//         id: 3,
//         title: "Review code of the new component",
//         description: "Perform a code review of the component before deployment.",
//         category: "Development",
//         priority: "High",
//         expirationdate: "2023-12-05",
//         status: "In Progress",
//         comments: ["Can efficiency be improved here?"],
//         notes: "",
//         responsible: "Carlos",
//     },
//     {
//         id: 4,
//         title: "Exercise",
//         description: "Perform a 30-minute training session.",
//         category: "Health",
//         priority: "Low",
//         expirationdate: "2023-11-26",
//         status: "Pending",
//         comments: [],
//         notes: "Preferably in the morning.",
//         responsible: "Ana",
//     },
//     {
//         id: 5,
//         title: "Set up planning meeting",
//         description: "Coordinate with the team to establish the agenda for the planning meeting.",
//         category: "Work",
//         priority: "medium",
//         expirationdate: "2023-12-02",
//         status: "Pending",
//         comments: ["Can all team members attend?"],
//         grades: "",
//         responsible: "Project Manager",
//     },
// ]


const ToDoList = () => {
    const [openmodal, setOpenmodal] = useState(true)
    const { ToDo, setToDo, setToDoEdit } = useContext(Context)



    const EditToDoHandler = (task) => {
        console.log("Edit")
        console.log(task)
        setToDoEdit(task)
        setOpenmodal(false)
    }

    const DeleteToDoHandler = (Id) => {
        console.log("Deleted")
        console.log(Id)
        const updatedTasks = ToDo.filter(task => task.id !== Id);
        setToDo(updatedTasks);
    }
    return (
        <>  <YourComponent openmodal={openmodal} setOpenmodal={setOpenmodal}></YourComponent>

            <div className='mt-[3.5rem]'>
                <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8">
                    {/* Search */}
                    <div className="align-middle rounded-tl-lg rounded-tr-lg inline-block w-full py-4 overflow-hidden bg-white shadow-lg px-12">
                        <div className="flex justify-between">
                            <div className="inline-flex border rounded w-7/12 px-2 lg:px-6 h-12 bg-transparent">
                                <div className="flex flex-wrap items-stretch w-full h-full mb-6 relative">
                                    <div className="flex">
                                        <span className="flex items-center leading-normal bg-transparent rounded rounded-r-none border border-r-0 border-none lg:px-3 py-2 whitespace-no-wrap text-grey-dark text-sm">
                                            <svg width="18" height="18" className="w-4 lg:w-auto" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.11086 15.2217C12.0381 15.2217 15.2217 12.0381 15.2217 8.11086C15.2217 4.18364 12.0381 1 8.11086 1C4.18364 1 1 4.18364 1 8.11086C1 12.0381 4.18364 15.2217 8.11086 15.2217Z" stroke="#455A64" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M16.9993 16.9993L13.1328 13.1328" stroke="#455A64" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </span>
                                    </div>
                                    <input type="text" className="flex-shrink flex-grow flex-auto leading-normal tracking-wide w-px  border border-none border-l-0 rounded rounded-l-none px-3 relative focus:outline-none text-xxs lg:text-xs  text-gray-500 font-thin" placeholder="Search" />
                                </div>
                            </div>
                        </div>
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                            <button onClick={() => !openmodal ? setOpenmodal(true) : setOpenmodal(false)} className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Add To Do</button>
                        </div>
                    </div>
                    {/* Search */}
                    <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
                        <table className="min-w-full">
                            {/* Header */}
                            <thead>
                                <tr>
                                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">ID</th>
                                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Title</th>
                                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Descripcion</th>
                                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">category</th>
                                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">priority</th>
                                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Expiration Date</th>
                                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">status</th>
                                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">comments</th>
                                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">notes</th>
                                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">responsibles</th>

                                    <th className="px-6 py-3 border-b-2 border-gray-300"></th>
                                    <th className="px-6 py-3 border-b-2 border-gray-300"></th>
                                    <th className="px-6 py-3 border-b-2 border-gray-300"></th>
                                </tr>
                            </thead>
                            {/* Header */}
                            {/* Body */}
                            <tbody className="bg-white">
                                {ToDo.map((task, index) => (
                                    <tr key={index}>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                            <div className="flex items-center">
                                                <div>
                                                    <div className="text-sm leading-5 text-gray-800">{task.id}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                            <div className="text-sm leading-5 text-blue-900">{task.title}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">{task.description}</td>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">{task.category}</td>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">{task.priority}</td>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">{task.expirationdate}</td>

                                        <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                                            <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                <span aria-hidden className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                                <span className="relative text-xs">{task.status}</span>
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">{task.comments}</td>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">{task.notes}</td>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">{task.responsible}</td>

                                        <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                                            <button  className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none"><FaEye /></button>
                                        </td>
                                        <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                                            <button onClick={() => EditToDoHandler(task)} className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-green-700 hover:text-white focus:outline-none"><FaEdit /></button>
                                        </td>
                                        <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                                            <button onClick={() => DeleteToDoHandler(task.id)} className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none"><MdDelete /></button>
                                        </td>

                                    </tr>
                                ))}
                            </tbody>

                            {/* Body */}

                        </table>
                        <div className="sm:flex-1 sm:flex sm:items-center sm:justify-between mt-4 work-sans">
                            <div>
                                <p className="text-sm leading-5 text-blue-700">
                                    Showing
                                    <span className="font-medium px-4">1</span>
                                    to
                                    <span className="font-medium px-4">200</span>
                                    of
                                    <span className="font-medium px-4">2000</span>
                                    results
                                </p>
                            </div>
                            <div>
                                <nav className="relative z-0 inline-flex shadow-sm">
                                    <div	>
                                        <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150 " aria-label="Previous">
                                            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="#" className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-blue-700 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-tertiary active:text-gray-700 transition ease-in-out duration-150 hover:bg-tertiary">
                                            1
                                        </a>
                                        <a href="#" className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-blue-600 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-tertiary active:text-gray-700 transition ease-in-out duration-150 hover:bg-tertiary">
                                            2
                                        </a>
                                        <a href="#" className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-blue-600 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-tertiary active:text-gray-700 transition ease-in-out duration-150 hover:bg-tertiary">
                                            3
                                        </a>
                                    </div>
                                    <div v-if="pagination.current_page < pagination.last_page">
                                        <a href="#" className="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150" aria-label="Next">
                                            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </a>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ToDoList