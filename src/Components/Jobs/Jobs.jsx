import React, { useContext, useState } from 'react';
import { JobsContext } from '../Main/Main';
import Job from '../Job/Job';


const Jobs = () => {
    const jobs = useContext(JobsContext);
    
    return (
        <div className="d-flex justify-content-center">
            <div className='job-container-width d-flex flex-wrap justify-content-center'>
                {
                    jobs.map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
        </div>
    );
};

export default Jobs;