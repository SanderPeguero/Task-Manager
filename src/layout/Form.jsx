import React from 'react';

const YourComponent = ({openmodal,setOpenmodal}) => {
    const STOP =(e)=>{
       e.stopPropagation();
    }
   
   if(!openmodal){
    return (
        
        <div className="flex flex-col justify-center mt-12 overflow-hidden" onClick={() => setOpenmodal(true)}>
            <div className="relative py-3" >
                <div className="relative px-4 py-8 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-8" >
                    <div className="max-w-md mx-auto" onClick={STOP}>
                        <div className="flex items-center space-x-5">
                            <div className="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">i</div>
                            <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                                <h2 className="leading-relaxed">Create an Event</h2>
                                <p className="text-sm text-gray-500 font-normal leading-relaxed">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                        <div className="divide-y divide-gray-200">
                            <div className="py-6 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                <div className="flex flex-col">
                                    <label className="leading-loose">Event Title</label>
                                    <input type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600 bg-white" placeholder="Event title" />
                                </div>
                                <div className="flex flex-col">
                                    <label className="leading-loose">Event Subtitle</label>
                                    <input type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600 bg-white" placeholder="Optional" />
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="flex flex-col">
                                        <label className="leading-loose">Start</label>
                                        <div className="relative focus-within:text-gray-600 text-gray-400">
                                            <input type="date"
                                                aria-label="Fecha" className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600 bg-white" placeholder="25/02/2020" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="leading-loose">End</label>
                                        <div className="relative focus-within:text-gray-600 text-gray-400">
                                            <input type="date"
                                                aria-label="Fecha" className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600 bg-white" placeholder="26/02/2020" />
                                           
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <label className="leading-loose">Event Description</label>
                                    <input type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600 bg-white" placeholder="Optional" />
                                </div>
                            </div>
                            <div className="pt-4 flex items-center space-x-4">
                                <button className="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none">
                                    <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth ="2" d="M6 18L18 6M6 6l12 12"></path></svg> Cancel
                                </button>
                                <button className="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none">Create</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    );
   }
    
};

export default YourComponent;
