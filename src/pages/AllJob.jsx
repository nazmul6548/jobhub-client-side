
// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {  useScroll } from "framer-motion"
import useAxiosSecure from "../component/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
const AllJob = () => {
    const axiosSecure = useAxiosSecure()
    const { scrollYProgress } = useScroll();
    const [search, setSearch] = useState('')
    const [filteredJobs, setFilteredJobs] = useState([]);
    // const [jobs,setJobs] =useState([])
    // console.log(jobs);
    



    const {
        data:jobs=[],
        isLoading,
        
}=useQuery({
        queryFn:()=>getdata(),
        queryKey:['bids'],
    })
    // console.log(jobs);
    // console.log(isLoading);






      const getdata = async () => {
        const {data} = await axiosSecure (`/jobs?search=${search}`)
        console.log(data);
        return(data)
      }
      if (isLoading) return <p className="text-center flex justify-center">data is loading......</p>
      const handleSearch =e=>{
        e.preventDefault()
        setFilteredJobs(
          jobs.filter((job) =>
            job.job_title.toLowerCase().includes(search.toLowerCase())
        )
        )
        const text=e.target.search.value;
        setSearch(text)
        console.log(text);
      }
    return (
        
        
        <div className="overflow-x-auto pb-8 mt-24  ">
           <div className="flex justify-center">
           <form onSubmit={handleSearch}>
            <div className='flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
              <input
                className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                type='text'
                onChange={e => setSearch(e.target.value)}
                value={search}
                name='search'
                placeholder='Enter Job Title'
                aria-label='Enter Job Title'
              />

              <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
                Search
              </button>
            </div>
          </form>
           </div>
           
        <table className="min-w-full bg-white font-[sans-serif]">
          <thead className="whitespace-nowrap">
            <tr>
              <th className="px-6 py-4 text-sm font-semibold bg-[#3d52a1] text-white text-center">
              Job Title
              </th>
              <th className="px-6 py-4 text-sm font-semibold bg-[#7191e6] text-white text-center">
              Job Posting Date

              </th>
              <th className="px-6 py-4 text-sm font-semibold bg-[#8697c3] text-white text-center">
              Application Deadline
              </th>
              <th className="px-6 py-4 text-sm font-semibold bg-[#adbada] text-white text-center">
              Salary range

              </th>
              <th className="px-6 py-4 text-sm font-semibold bg-[#90aeae] text-white text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="whitespace-nowrap divide-y divide-gray-200">
            {
            filteredJobs.length > 0 ? (  filteredJobs.map((job) => (
              <tr key={job._id} className="hover:bg-gray-50">
              <td className="text-center px-6 py-3 text-sm">
                {job.job_title}
              </td>
              <td className="text-center px-6 py-3 text-sm">
              {new Date(job.post_date).toLocaleDateString()}
              </td>
              <td className="text-center px-6 py-3 text-xs">
                <div className="mx-auto px-3 py-1 bg-red-500 w-max text-white rounded">{new Date(job.application_deadline).toLocaleDateString()}</div>
              </td>
              <td className="text-center px-6 py-3 text-xs">
                <div className="mx-auto px-3 py-1 bg-green-500 w-max text-white rounded">${job.salary_range}</div>
              </td>
              <td className="text-center px-6 py-3 text-sm text-cyan-800 font-bold">
               <Link to={`/job/${job._id}`}>view details</Link>
               
              </td>
            </tr>
                        ))) :
                jobs.map(job => (
                    <tr key={job._id} className="hover:bg-gray-50">
              <td className="text-center px-6 py-3 text-sm">
                {job.job_title}
              </td>
              <td className="text-center px-6 py-3 text-sm">
              {new Date(job.post_date).toLocaleDateString()}
              </td>
              <td className="text-center px-6 py-3 text-xs">
                <div className="mx-auto px-3 py-1 bg-red-500 w-max text-white rounded">{new Date(job.application_deadline).toLocaleDateString()}</div>
              </td>
              <td className="text-center px-6 py-3 text-xs">
                <div className="mx-auto px-3 py-1 bg-green-500 w-max text-white rounded">${job.salary_range}</div>
              </td>
              <td className="text-center px-6 py-3 text-sm text-cyan-800 font-bold">
               <Link to={`/job/${job._id}`}>view details</Link>
               
              </td>
            </tr>
                ))
            }
            {/* other rows */}
          </tbody>
        </table>
        
      </div>
    );
};

export default AllJob;