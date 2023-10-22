import React from 'react';
import "./Blogs.css"

const Blogs = () => {
    return (
        <div className='blog-container '>
            <div>

                <h5>Context API</h5>
                <p>Context api is used to pass data from one component to another in multilevel tree structure.</p>

            </div>
            <div>
                
                <h5>Custom hook</h5>
                <p>Custom hook is used to reuse stateful logic.</p>
            </div>

        </div>
    );
};

export default Blogs;