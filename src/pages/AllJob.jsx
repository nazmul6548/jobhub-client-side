
// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll } from "framer-motion"
import useAxiosSecure from "../component/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
const AllJob = () => {
    const axiosSecure = useAxiosSecure()
    const { scrollYProgress } = useScroll();
    // const [jobs,setJobs] =useState([])
    // console.log(jobs);
    



    const {
        data:jobs=[],
        isLoading,
        
}=useQuery({
        queryFn:()=>getdata(),
        queryKey:['bids'],
    })
    console.log(jobs);
    console.log(isLoading);






      const getdata = async () => {
        const {data} = await axiosSecure (`/jobs`)
        console.log(data);
        return(data)
      }
      if (isLoading) return <p className="text-center flex justify-center">data is loading......</p>
    return (
        
        
        <div className="overflow-x-auto pb-8 mt-24">
            <div>
            <motion.div style={{ scaleX: scrollYProgress }} />  
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