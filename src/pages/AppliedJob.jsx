import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../component/authprovider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../component/useAxiosSecure";
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import MyDocument from '../component/MyDocument';

const AppliedJob = () => {
  
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const [filter, setFilter] = useState("");
  const [filteredBid, setFilteredBid] = useState([]);
  
  console.log(filter);
  const { data: bid = [], isLoading } = useQuery({
    queryFn: () => getData(),
    queryKey: ["bids"],
    enabled: !!user,
  });
  // console.log({ bid });
  // console.log(isLoading);
  useEffect(() => {
    // Filter the bid array based on the selected category
    const filteredData = bid.filter((item) =>
      filter ? item.category === filter : true
    );
    setFilteredBid(filteredData);
  }, [bid, filter]);

  const getData = async () => {
    const { data } = await axiosSecure(`/bids/${user?.email}`);
    return data;
  };

  // console.log(filter);

  if (isLoading)
    return (
      <p className="text-center flex justify-center">data is loading......</p>
    );
  return (
    <div className="mt-24">
      <div className="relative flex flex-col items-center">
        <h6 className="font-lato py-2 font-bold font-2xl">Job Category:</h6>

        <select
          onChange={(e) => setFilter(e.target.value)}
          name="job_category"
          value={filter}
          className="px-4 py-3.5 bg-[#dee1e4] text-black w-full md:w-1/4 m-auto text-sm border-2 border-gray-100 focus:border-blue-500  outline-[#007bff]"
        >
          <option value="">Select an options</option>
          <option value="Part-Time">Part-Time</option>
          <option value="Hybrid">Hybrid</option>
          <option value="Remote Job">Remote Job</option>
          <option value="On-Site Job">On-Site Job</option>
        </select>
      </div>

      <div className="">
        
          <div  className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 font-[sans-serif]">
            <thead className="bg-gray-100 whitespace-nowrap">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Resume
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Deadline
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Salary Range
                </th>
                
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 whitespace-nowrap">
              {
                filteredBid.map((b) => (
                  <tr key={b._id}>
                <td className="px-6 py-4 text-sm text-[#333]">
                  {b.name}
                </td>
                <td className="px-6 py-4 text-sm text-[#333]">
                 {b.email}
                </td>
                <td className="px-6 py-4 text-sm text-[#333]">
                  {b.resume}
                </td>
                <td className="px-6 py-4 text-sm text-[#333]">
                 {b.application_deadline}
                </td>
                <td className="px-6 py-4 text-sm text-[#333]">
                 {b.salary_range}
                </td>
                
              </tr>
                ))
              }
              {/* More rows with similar structure */}
            </tbody>
          </table>
        </div>
        
      </div>
      <PDFDownloadLink document={<MyDocument data={filteredBid} />} fileName="bids.pdf">
  {({ blob, url, loading, error }) =>
    loading ? 'Generating PDF...' :  <div className="flex justify-center items-center"><button  className="border-2 px-10 py-4 mt-4 bg-slate-900 text-white hover:text-blue-700">Download Summery PDF</button></div>
  }
</PDFDownloadLink>
    </div>
  );
};

export default AppliedJob;
