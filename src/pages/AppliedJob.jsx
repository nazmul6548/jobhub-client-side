import { useContext, useEffect, useState,  } from "react";
import { AuthContext } from "../component/authprovider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../component/useAxiosSecure";
// import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
// import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';

const AppliedJob = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useContext(AuthContext)
 const [filter,setFilter] = useState('')
 const [filteredBid, setFilteredBid] = useState([]);
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
    useEffect(() => {
      // Filter the bid array based on the selected category
      const filteredData = bid.filter((item) =>
          filter ? item.category === filter : true
      );
      setFilteredBid(filteredData);
  }, [bid, filter]);

    const getData = async () => {
        const {data} = await axiosSecure (
            `/bids/${user?.email}`
        )
        return(data)
    }
  
console.log(filter);
// console.log(filterdBid);

    if (isLoading) return <p className="text-center flex justify-center">data is loading......</p>
    return (
       <div className="mt-20">
      <div className="relative flex flex-col items-center">
    <h6 className="font-lato py-2 font-bold font-2xl">Job Category:</h6>
      
          <select onChange={e => setFilter(e.target.value)} name="job_category"
            value={filter} className="px-4 py-3.5 bg-[#dee1e4] text-black w-full md:w-1/4 m-auto text-sm border-2 border-gray-100 focus:border-blue-500  outline-[#007bff]"
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
                filteredBid.map(b=> (
                    <div key={b._id}
  className="bg-white shadow-[0_2px_18px_-6px_rgba(0,0,0,0.2)] w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
  <div className="px-4 my-6">
    <h3 className="text-lg font-semibold">{b.name}</h3>
    <p className="mt-2 text-sm text-gray-400">{b.
comment}</p>
<li>email:{b.email}</li>
<li>deadline:{b.application_deadline}</li>
<li>salary:{b.salary_range}</li>


{/* <div>
 <PDFViewer>
     <li>Resume: {b.resume}</li>
       </PDFViewer>
          <PDFDownloadLink
                document={<li>Resume: {b.resume}</li>}
                     fileName="example.pdf"
                       >
                      {({ loading }) =>
                             loading ? 'Loading document...' : 'Download now!'
                        }
                   </PDFDownloadLink>
              </div> */}
   
  </div>
</div>
                ))
            }
        </div>
       </div>
    );
};

export default AppliedJob;