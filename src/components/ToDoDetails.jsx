import React, { useState, useEffect } from 'react';
import Comments from './Comments';
import { useAuth } from '../Context';
const ToDoDetails = ({ Details, isOpen, setDetails, setIsOpen }) => {
    const [content, setContent] = useState(Details.notes);
    const [isEditing, setIsEditing] = useState(false);
    const { ToDo, setToDo, setToDoEdit } = useAuth()

    const handleEdit = () => {
        
        setIsEditing(true);

    };
    const handleDelet = () => {
        setContent("")
        Details.notes = ""

    };

    const handleAdd = () => {
        setContent("")
        setIsEditing(true);

    };

    const handleCancelar= () => {
        setContent(Details.notes)
        setIsEditing(false);

    };

    const handleSave = () => {
        setIsEditing(false);
        Details.notes = content


    };

    const handleChange = (e) => {
        setContent(e.target.value);
    };

    useEffect(() => {
        if (Details.notes) {
            setContent(Details.notes);
        }
    }, [Details])

    const STOP = (e) => {
        e.stopPropagation();
    }

    if (!isOpen) {
        return (
            <div className='absolute inset-0 flex items-center justify-center z-50' >
                <div className="flex flex-col justify-center mt-12 overflow-hidden" onClick={STOP} >
                    <div className="relative py-3" >
                        <div className="relative px-4 py-8 bg-white mx-8 md:mx-0 shadow rounded-3xl border border-black p-4 sm:p-8" >
                            <div className="max-w-md mx-auto" >
                                <div className="flex items-center justify-center space-x-5">
                                    <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                                        <h2 className="leading-relaxed">To Do Detail</h2>
                                        <p className="text-sm text-gray-500 font-normal leading-relaxed">Task Detail</p>
                                    </div>
                                </div>
                                <div className="divide-y divide-gray-200">
                                    <div className="py-6 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                        <div className="flex flex-col">
                                            <label className="leading-loose">Nota: {content}</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="border border-gray-300 rounded p-3">
                                    {isEditing ? (
                                        <textarea
                                            value={content}
                                            onChange={handleChange}
                                            className="w-full resize-none border border-gray-300 rounded p-2"
                                        />
                                    ) : (
                                        <div>{content}</div>
                                    )}
                                    <div className="mt-4 flex justify-end ">
                                        <button onClick={handleAdd} className="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2">
                                            Add
                                        </button>
                                        {isEditing ? (
                                            <button onClick={handleSave} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                                                Save
                                            </button>
                                        ) : (
                                            <button onClick={handleEdit} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2">
                                                Edit
                                            </button>
                                        )}
                                        {isEditing ? (
                                            <button onClick={handleCancelar} className="bg-red-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2">
                                             Cancelar
                                            </button>

                                        ) : (
                                            <button onClick={handleDelet} className="bg-red-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2">
                                                Delete
                                            </button>

                                        )}


                                    </div>
                                </div>
                                <Comments comments={Details.comments} />
                                <div className="pt-4 flex items-center space-x-4">
                                    <button className="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none" onClick={() => { setIsOpen(true), setDetails([]), setContent("") }}>
                                        <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg> Cancel
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

};

export default ToDoDetails;
