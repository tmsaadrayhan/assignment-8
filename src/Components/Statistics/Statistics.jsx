import React from 'react';
import Chart from '../Chart/Chart';


const Statistics = () => {
    const assignments = [
        {
            assignmentNo: 1,
            mark: 29,
        },
        {
            assignmentNo: 2,
            mark: 30,
        },
        {
            assignmentNo: 3,
            mark: 30,
        },
        {
            assignmentNo: 4,
            mark: 30,
        },
        {
            assignmentNo: 5,
            mark: 30,
        },
        {
            assignmentNo: 6,
            mark: 30,
        },
    ];
    return (
        <div className='d-flex flex-column mb-3 justify-content-center'>
            <h1>Assignment Marks</h1>
            <Chart assignments={assignments}></Chart>
        </div>
    );
};

export default Statistics;