import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    return (
        <div className='my-3 container d-flex flex-wrap justify-content-center align-items-start'>
            <div className='me-5'>
                <h1>CareerHub</h1>
            </div>
            <div className='my-2 d-flex justify-content-center'>
                <Link to="/">Home</Link>
                <Link to="/statistics">Statistics</Link>
                <Link to={{ pathname: '/applied_jobs', state: 'flushDeal' }}>Applied Jobs</Link>
                <Link to="/blogs">Blogs</Link>  
            </div>
            <div>
            <Link to="/jobs"><button type="button" className="my-2 mx-5 btn btn-dark white">Apply Now!</button></Link>
            
            </div>

        </div>
    );
};

export default Header;