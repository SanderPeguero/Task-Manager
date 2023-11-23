import React, { useState, useContext } from 'react';
import { Context } from '../Context';
import { useEffect } from 'react';

const ToDoItem = ({ datos, openmodal, setOpenmodal }) => {
    const { ToDo, setToDo, ToDoEdit, task, CategoryPre } = useContext(Context)
    const [showCategories, setshowCategories] = useState(false)
    const categoryColors = {
        Work: '#FFD700',
        Personal: '#00CED1',
        Study: '#FF6347',
        Health: '#20B2AA'

    };

    const toggleCategoryView = () => {
        setshowCategories(!showCategories);
    };

    const getToDo = (e) => {
        e.stopPropagation();
    }
    const todoDetailsIsOpenHandler = (e) => {
        e.stopPropagation();
    }
    const editIsOpenHandler = (e) => {
        e.stopPropagation();
    }
    const deleteHandler = (e) => {
        e.stopPropagation();
    }


    const STOP = (e) => {
        e.stopPropagation();
    }

    if (!openmodal) {
        return (
            <div className='absolute inset-0 flex items-center justify-center z-50' onClick={() => setOpenmodal(true)}>
                <div className="flex flex-col justify-center mt-12 overflow-hidden" onClick={STOP} >
                    <div className="relative py-3" >
                        <div className="relative px-4 py-8 bg-white mx-8 md:mx-0 shadow rounded-3xl border border-black p-4 sm:p-8" >
                            <div className="max-w-md mx-auto" >
                                <div className="flex items-center justify-center space-x-5">
                                    <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                                        <h2 className="leading-relaxed">Detail</h2>
                                        <p className="text-sm text-gray-500 font-normal leading-relaxed">Task Detail</p>
                                    </div>
                                </div>
                                <form >


                                    <div className="divide-y divide-gray-200">
                                        <div className="py-6 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                            <div className="flex flex-col">
                                                <label className="leading-loose">Title: {datos.title}</label>
                                            </div>
                                            <div className="flex flex-col">
                                                <label className="leading-loose">Description: {datos.description}</label>
                                            </div>
                                            <div className="flex flex-col">
                                                <label className="leading-loose">Category:</label>
                                                {CategoryPre[datos.category] ? (
                                                    <button onClick={toggleCategoryView} className="inline-block px-3 py-1 rounded-md text-white font-semibold" style={{ backgroundColor: CategoryPre[datos.category].color }}>
                                                        {datos.category}
                                                    </button>
                                                ) : (
                                                    <button onClick={toggleCategoryView} className="inline-block px-3 py-1 rounded-md text-black font-semibold" style={{ backgroundColor: 'white', border: '1px solid black' }}>
                                                        {datos.category}
                                                    </button>
                                                )}

                                                {showCategories && (
                                                    <div>
                                                        {Object.keys(CategoryPre).map((category, index) => (
                                                            <button key={index} className=" mx-4 inline-block px-3 py-1 rounded-md text-white font-semibold mt-2" style={{ backgroundColor: CategoryPre[category].color }}>
                                                                {CategoryPre[category].name}
                                                            </button>
                                                        ))}
                                                    </div>
                                                )}

                                            </div>
                                            <div className="flex flex-col">
                                                <label className="leading-loose">Responsible: {datos.responsible}</label>
                                            </div>
                                            <div className="flex flex-col">
                                                <label className="leading-loose">Expiration date: {datos.expirationdate}</label>
                                            </div>
                                            <div className="flex flex-col">
                                                <label className={`${datos.status == "Pending" ? "font-semibold text-red-500 leading-tight" : "font-semibold text-green-500 leading-tight"}`}>status: {datos.status}</label>
                                            </div>
                                        </div>
                                        <div className="pt-4 flex items-center space-x-4">
                                            <button className="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none" onClick={() => setOpenmodal(true)}>
                                                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg> Cancel
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

};

export default ToDoItem;
