import React, {useState} from 'react';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
const Comments = ({ comments }) => {


    const [allComments, setAllComments] = useState(comments || []);
    const [editingIndex, setEditingIndex] = useState(-1);



    return(
        <div className="bg-gray-200 p-4 m-2 rounded">
        <h3 className="font-semibold mb-2">Comments</h3>
        <div className="flex flex-col">
            {allComments.length > 0 ? (
                allComments.map((comment, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md p-2 mb-2 flex justify-between">
                        {editingIndex === index ? (
                            <textarea
                                className="w-full rounded border p-2"
                               
                            />
                        ) : (
                            <p>{comment}</p>
                        )}
                        <div>
                            {editingIndex === index ? (
                                <button
                                    className="text-green-600 font-semibold mr-2"
                                   
                                >
                                    Save
                                </button>
                            ) : (
                                <button
                                    className="text-blue-600 font-semibold mr-2"
                                   
                                >
                                    <FaEdit/>
                                </button>
                            )}
                            <button
                                className="text-red-600 font-semibold"
                               
                            >
                                <MdDelete/>
                            </button>
                        </div>
                    </div>
                ))
            ) : (
                <p>No comments yet</p>
            )}
        </div>
        <div className="mt-4">
            <textarea
                className="w-full rounded border p-2"
                placeholder="Add a comment..."
               
            />
            <button
                className="mt-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
              
            >
                Add Comment
            </button>
        </div>
    </div>
    )

}

export default Comments;
