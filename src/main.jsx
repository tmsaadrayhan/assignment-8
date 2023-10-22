import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {
  createBrowserRouter,
  RouterProvider,
  useFetcher,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';
import Statistics from './Components/Statistics/Statistics';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';
import Blogs from './Components/Blogs/Blogs';
import Jobs from './Components/Jobs/Jobs.jsx';
import JobDetails from './Components/JobDetails/JobDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    loader: () => fetch("fakeData.json"),
    children: [
      {
        path: "/",
        element: <Home></Home>,
        
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "applied_jobs",
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "jobs",
        element: <Jobs></Jobs>,
      },
      {
        path: "job/:id",
        element: <JobDetails></JobDetails>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
