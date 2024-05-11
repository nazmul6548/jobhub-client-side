import  { useContext, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../component/authprovider/AuthProvider";

const AddJob = () => {
    const {user} =useContext(AuthContext)
    console.log(user);
    const [startDate, setStartDate] = useState(new Date());
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className="min-h-screen mt-28 font-lato">
            <h1 className="text-center font-lato font-bold text-4xl md:text-5xl py-4">Add New Jobs</h1>
           <div>
           <form onSubmit={handleSubmit} className="font-[sans-serif] max-w-4xl mx-auto">
  <div className="grid sm:grid-cols-2 gap-6">
    <div className="relative flex flex-col items-start">
    <h6 className="font-lato py-2 font-bold">Job Title:</h6>
      <input type="text" name="job_title" placeholder="Job title"
        className="px-4 py-3 bg-[#f0f1f2] text-black w-full text-sm border outline-[#007bff] rounded" />
     
    </div>
    <div className="relative flex flex-col items-start">
    <h6 className="font-lato py-2 font-bold">Job Category:</h6>
      
          <select name="subcategory_name"
            className="px-4 py-3.5 bg-[#f0f1f2] text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500  outline-[#007bff]"
          >
            <option value="">Select an option</option>
            <option value="Card Making ">Part-Time</option>
            <option value="Scrapbooking">Hybrid</option>
            <option value="Paper Quilling & origami">Remote Job</option>
            <option value="Glass Painting">On-Site Job</option>
           
            {/* Add more options as needed */}

          </select>
      
    </div>
    <div className="relative flex flex-col items-start">
    <h6 className="font-lato py-2 font-bold">Email:</h6>
      <input type="email" defaultValue={user?.email} placeholder="User Email"
        className="px-4 py-3 bg-[#f0f1f2] text-black w-full text-sm border outline-[#007bff] rounded" />
     
    </div>
    <div className="relative flex flex-col items-start">
    <h6 className="font-lato py-2 font-bold">Name:</h6>
      <input type="text" defaultValue={user?.displayName
} placeholder="User Name"
        className="px-4 py-3 bg-[#f0f1f2] text-black w-full text-sm border outline-[#007bff] rounded" />
      
    </div>
    <div className="relative flex flex-col items-start">
    <h6 className="font-lato font-bold py-2">Salary Range:</h6>
      <input type="text" placeholder="Salary Range"
        className="px-4 py-3 bg-[#f0f1f2] text-black w-full text-sm border outline-[#007bff] rounded" />
     
    </div>
    <div className="relative flex flex-col items-start w-full">
        <h6 className="font-lato font-bold py-2">Job Posting Date:</h6>
      
<DatePicker className="px-3 py-3 bg-[#f0f1f2] text-black  text-sm border outline-[#007bff] rounded w-full"  selected={startDate} onChange={(date) => setStartDate(date)} />

        
      
    </div>
    <div className="relative flex flex-col items-start">
    <h6 className="font-lato py-2 font-bold">Application Deadline:</h6>
    <input 
         />
     <DatePicker className="px-4 py-3 bg-[#f0f1f2] text-black w-full text-sm border outline-[#007bff] rounded" selected={startDate} onChange={(date) => setStartDate(date)} />
    </div>
    <div className="relative flex flex-col items-start">
    <h6 className="font-lato font-bold py-2">Job Number:</h6>
      <input type="number" name="number" placeholder="Applied Job Number"
        className="px-4 py-3 bg-[#f0f1f2] text-black w-full text-sm border outline-[#007bff] rounded" />
      
    </div>
    
  </div>
  <div className="mt-6">
  <h6 className="font-lato py-2 font-bold">Photo URL:</h6>
      <input type="text" name="image" placeholder="Photo URL"
        className="px-4 py-3 bg-[#f0f1f2] text-black  w-full text-sm border outline-[#007bff] rounded" />
      
    </div>
    <div>
    <h6 className="font-lato  font-bold">Job Description:</h6>
    <textarea placeholder='Type Message'
    className="p-4 mt-6 bg-white  mx-auto w-full block text-sm border border-gray-300 outline-[#0b0e37] rounded" rows="4"></textarea>
    </div>
  <input type="submit" value="Submit"  className="mt-8 px-6 py-2.5 text-sm w-full font-semibold bg-[#0B0E37] text-white rounded hover:bg-[#006bff]"/>
</form>
           </div>
        </div>
    );
};

export default AddJob;