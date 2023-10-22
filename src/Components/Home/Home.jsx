import React, { useContext } from 'react';
import Job from '../Job/Job';
import { JobsContext } from '../Main/Main';

const Home = () => {
    const jobs= useContext(JobsContext);
    const fewJobs= jobs.slice(0, 4);
    return (
        <div className='d-flex justify-content-center'>
            <div className='jobContainer job-container-width d-flex flex-wrap justify-content-center'>
                {
                    fewJobs.map((job) =><Job key= {job.id} job={job}></Job>)
                }
            </div>
        </div>
    );
};

export default Home;