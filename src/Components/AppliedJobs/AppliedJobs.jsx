import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { deleteApplications, getsApplications, removeFromDb } from '../../utility/fakedb';
import AppliedJob from '../AppliedJob/AppliedJob';
import { useNavigate } from 'react-router'
import Clear from './../Clear/Clear';




const AppliedJobs = () => {
    const navigate = useNavigate()


    const job = getsApplications();
    const remove = (job) => {
        removeFromDb(job);
        navigate(0)
    }
    const clear = () => {
        deleteApplications();
        navigate(0)
    }
    return (
        <div onSubmit={event => event.preventDefault()}>
            <h1 className='my-3'>This is applied jobs</h1>
            {
                job.map(job => <AppliedJob remove={remove} key={job.id} job={job}></AppliedJob>)
            }
            <Clear clear={clear}></Clear>



        </div>

    );
};

export default AppliedJobs;