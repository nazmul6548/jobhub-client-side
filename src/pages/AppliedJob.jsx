import { useContext, useState,  } from "react";
import { AuthContext } from "../component/authprovider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../component/useAxiosSecure";


const AppliedJob = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useContext(AuthContext)
 const [filter,setFilter] = useState([])
 console.log(filter);
    const {
        data:bid=[],
        isLoading,
        
}=useQuery({
        queryFn:()=>getData(),
        queryKey:['bids'],
        enabled:!!user
    })
    console.log({bid});
    console.log(isLoading);


    const getData = async () => {
        const {data} = await axiosSecure (
            `/bids/${user?.email}`
        )
        return(data)
    }
    
    if (isLoading) return <p className="text-center flex justify-center">data is loading......</p>
    return (
       <div className="">
      <div className="relative flex flex-col items-center">
    <h6 className="font-lato py-2 font-bold">Job Category:</h6>
      
          <select onChange={e => setFilter(e.target.value)} name="job_category"
            value={filter} className="px-4 py-3.5 bg-[#dee1e4] text-black w-1/4 m-auto text-sm border-2 border-gray-100 focus:border-blue-500  outline-[#007bff]"
          >
            <option value="">Select an option</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Remote Job">Remote Job</option>
            <option value="On-Site Job">On-Site Job</option>
           
            {/* Add more options as needed */}

          </select>
      
    </div>




         <div className="grid grid-cols-1 md:grid-cols-3">
            {
                bid.map(b=> (
                    <div key={b._id}
  className="bg-white shadow-[0_2px_18px_-6px_rgba(0,0,0,0.2)] w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
  <div className="px-4 my-6">
    <h3 className="text-lg font-semibold">{b.name}</h3>
    <p className="mt-2 text-sm text-gray-400">{b.
comment}</p>
<li>email:{b.email}</li>
<li>deadline:{b.application_deadline}</li>
<li>salary:{b.salary_range}</li>
<li>resume{b.resume}</li>
   
  </div>
</div>
                ))
            }
        </div>
       </div>
    );
};

export default AppliedJob;