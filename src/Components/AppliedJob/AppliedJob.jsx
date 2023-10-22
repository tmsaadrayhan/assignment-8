import React from 'react';
import { removeFromDb } from '../../utility/fakedb';
import { Link } from 'react-router-dom';

const AppliedJob = ({ job , remove }) => {
    return (
        <div>
            <div className='job m-3'>
                <div className="card card_style shadow">
                    <div className="job-height card-body">
                        <div className="card-first-half">
                            <h3 className="card-title">{job.title}</h3>
                            <p className="card-text"> Salary: ${job.salary}</p>
                        </div>
                        <div className="d-flex card-second-half justify-content-center p-2">
                            <Link to={"/applied_jobs"}><button onClick={()=>remove(job)} className="btn btn-primary">Delete application</button></Link>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppliedJob;