
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TabJobCard from './TabJobCard';
// import { useEffect, useState } from 'react';
import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from './useAxiosSecure';

const TabCategory = () => {
  const axiosSecure = useAxiosSecure()
  // const [jobs,setJobs] =useState([])
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
      const {data} = await axiosSecure(`/jobs`)
      return(data)
    }
  
    return (
        <Tabs>
      <div className=' bg-gradient-to-r from-[#0b0e37] to-[#264e85] text-white p-10'>
        <h1 className='text-5xl font-bold font-lato text-center'>All Job Categories</h1>
        <p className='font-lato text-center w-full md:w-full lg:w-3/4 m-auto pt-6 pb-10'>An on-site job requires employees to work physically at a designated location, typically within a company's office or workplace. Employees commute to the office and perform their duties in a traditional office setting, collaborating closely with colleagues and supervisors in person. </p>
      <div className='flex items-center justify-center font-normal md:font-bold text-xs md:text-2xl font-lato'>
       <TabList>
          <Tab>On-Site Job</Tab>
          <Tab>Remote Job</Tab>
          <Tab>Hybrid</Tab>
          <Tab>PartTime</Tab>
          <Tab>AllJobs</Tab>
        </TabList>
       </div>
    
        <TabPanel>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5'>
          {
            jobs.filter(j => j.
job_category==='On-Site Job').map(job =>(<TabJobCard key={job._id} job={job}></TabJobCard>))
          }
          </div>
        </TabPanel>
        <TabPanel>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  mt-5'>
        {
            jobs.filter(j => j.
job_category==='Remote Job').map(job =>(<TabJobCard key={job._id} job={job}></TabJobCard>))
          }
        </div>
        </TabPanel>
        <TabPanel>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  mt-5'>
        {
            jobs.filter(j => j.
job_category==='Hybrid').map(job =>(<TabJobCard key={job._id} job={job}></TabJobCard>))
          }
        </div>
        </TabPanel>
        <TabPanel>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  mt-5'>
       {
            jobs.filter(j => j.
job_category==='Part-Time').map(job =>(<TabJobCard key={job._id} job={job}></TabJobCard>))
          }
       </div>
        </TabPanel>
        <TabPanel>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5'>
        {
            jobs.map(job =>(<TabJobCard key={job._id} job={job}></TabJobCard>))
          }
        </div>
        </TabPanel>
      </div>
      </Tabs>
    );
};

export default TabCategory;