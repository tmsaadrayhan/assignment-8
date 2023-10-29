import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { addToDb } from '../../utility/fakedb';
import { Toaster } from 'react-hot-toast';

const JobDetails = () => {
    const {state}=  useLocation();
    const job= state;
    const {title, description, salary} = job;
    
    return (
        <div className='mt-3'>
            <h1>{title}</h1>
            <p>{description}</p>
            <h3>Salary: ${salary}</h3>
            <button onClick={()=>addToDb(job)}type="button" className="btn btn-dark mt-3">Apply</button>
            <Toaster/>
        </div>
    );
};

export default JobDetails;