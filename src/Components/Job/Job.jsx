import React from 'react';
import "./Job.css"
import { Link } from 'react-router-dom';

const Job = ({ job }) => {

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
                            <Link className="btn btn-dark d-flex align-self-end" to={`/job/${job.id}`} state={ job }>View job</Link>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Job;