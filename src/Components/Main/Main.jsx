import React, { createContext } from 'react';
import "./main.css";
import Header from './../Header/Header';
import { Outlet } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
export let JobsContext= createContext("jobs");
const Main = () => {
    
    return (
        <div>
            <JobsContext.Provider value={useLoaderData()}>
                <Header></Header>
                <Outlet></Outlet>
            </JobsContext.Provider>

        </div>
    );
};

export default Main;