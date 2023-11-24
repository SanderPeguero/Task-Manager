import React from 'react';

const Comments = ({ comments }) => {

    if (comments) {
        return (
            <div className="bg-gray-200 p-4 m-2 rounded">
                <h3 className="font-semibold mb-2">Comments</h3>
                {comments.map((comment, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md p-2 mb-2">
                        <p>{comment}</p>
                    </div>
                ))}
            </div>
        )
    }

}

export default Comments;
