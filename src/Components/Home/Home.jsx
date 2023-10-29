import React, { useContext } from 'react';
import "../FontAwesome/index";
import "./Home.css"
import Job from '../Job/Job';
import { JobsContext } from '../Main/Main';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Home = () => {
    const jobs = useContext(JobsContext);
    const fewJobs = jobs.slice(0, 4);
    return (
        <div className='d-flex flex-wrap justify-content-center home'>
            <div className='description'>
                <FontAwesomeIcon className='m-3 mt-5 pt-5 description-icon' icon="fa-solid fa-briefcase" />
                <h1>Looking For Job?</h1>
                <p>We provide suitable jobs for people. If anyone is looking for job in IT, this is the right place.</p>
            </div>
            <div className='jobContainer job-container-width d-flex flex-wrap justify-content-center'>
                {
                    fewJobs.map((job) => <Job key={job.id} job={job}></Job>)
                }
            </div>
        </div>
    );
};

export default Home;