import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../component/authprovider/AuthProvider";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
// import useAxiosSecure from "../component/useAxiosSecure";
// import { useQuery,useMutation } from "@tanstack/react-query";
import axios from "axios";
import useAxiosSecure from "../component/useAxiosSecure";


const MyJob = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useContext(AuthContext)
    const [jobs,setJobs] = useState([])
    useEffect(() => {
        
        getData()
    },[user])
    const getData = async () => {
        const {data} = await axiosSecure (
            `/jobs/${user?.email}`
        )
        setJobs(data)
    }
    console.log(user);
    const handleDelete =async (id) => {
        try{
            const {data} = await axiosSecure.delete(
                `/jobs/${id}`
            )
            console.log(data);
            // toast
            toast("delete successfully")
getData()
        } catch (err) {
            console.log(err.message);
            toast("no deleted")
            

        }

    };
    return (
        <div className="mt-24">
            <h1 className="text-center font-lato font-bold text-4xl p-4 pb-6 md:text-5xl">My All Jobs</h1>
            <p className="text-center w-full md:w-3/4 m-auto pb-6">Responsibilities include assisting with day-to-day operations of the HR functions and duties, providing clerical and administrative support to the HR department, and compiling and updating employee records.</p>
         <div className="overflow-x-auto">
  <table className="min-w-full divide-y divide-gray-200 font-sans">
    <thead className="bg-gray-100 whitespace-nowrap">
      <tr>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Name
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Job Category
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Job Title
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Post Date
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Deadline
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Salary
        </th>
        
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Actions
        </th>
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200 whitespace-nowrap">
     
      {
        jobs.map(job => (
            <tr key={job._id}>
            <td className="px-6 py-4 text-sm text-[#333]">
              {job.user_name}
            </td>
            <td className="px-6 py-4 text-sm text-[#333]">
              {job.job_category}
            </td>
            <td className="px-6 py-4 text-sm text-[#333]">
              {job.
job_title}
            </td>
            <td className="px-6 py-4 text-sm text-[#333]">
              {job.post_date}
            </td>
            <td className="px-6 py-4 text-sm text-[#333]">
              {job.application_deadline}
            </td>
            <td className="px-6 py-4 text-sm text-[#333]">
              ${job.salary_range}
            </td>
            <td className="px-6 py-4 text-sm text-[#333]">
              <Link to={`/updatejob/${job._id}`}>
              <button className="text-blue-500 hover:text-blue-700 mr-4">Edit</button></Link>
              <button onClick={() => handleDelete(job._id)} className="text-red-500 hover:text-red-700">Delete</button>
            </td>
          </tr>
        ))
      }
    </tbody>
  </table>
</div>
<ToastContainer />
        </div>
    );
};

export default MyJob;