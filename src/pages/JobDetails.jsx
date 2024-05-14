import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../component/authprovider/AuthProvider";
import DatePicker from "react-datepicker";

import { toast } from "react-toastify";
import useAxiosSecure from "../component/useAxiosSecure";


const JobDetails = () => {
    const [startDate, setStartDate] = useState(new Date());
    const axiosSecure = useAxiosSecure()
    const {user} = useContext(AuthContext)
    console.log(user);
    const data = useLoaderData()
    console.log(data);
    const {_id,salary_range,job_title,number,image,description,job_category,
        post_date,application_deadline}=data
    
    const handlesubmission =async (e) => {
        e.preventDefault()
        const form = e.target;
        const jobId =_id;
        const salary_range = parseFloat(form.salary.value);
        const application_deadline =startDate;
        const resume=form.resume.value;
        const comment =form.comment.value;
        const email =user?.email;
        const name =user?.displayName;
        const category=job_category;
        const title =job_title;
        const deadline =application_deadline;
        const postDate=post_date;
        const bidres ={
            jobId,salary_range,application_deadline,resume,comment,email,name,category,title,deadline,postDate
        }
        console.log(bidres);
        const currentDate = new Date();
        console.log(currentDate);
        if (deadline < currentDate) {
            
            return toast.error("Application deadline has passed. You cannot apply for this job.");
            
        }
        // if (deadline > currentDate) {
            
        //     return toast.error("Application deadline has passed. You cannot apply for this job.");
            
        // }
        if (user?.email === data.email) {
          
            toast.error("Employers cannot apply for their own job postings.");
            return;
        }
        try{
            const {data} = await axiosSecure.post(
                `/bid`,bidres
            )
            toast.success('Data added successfully!');
            console.log(data);
        }catch (err) {
        console.log(err);
        console.log(err.message);
        toast.error('Error adding data!');
    }

   
}

    return (
        <div className="min-h-screen mt-20">
            <div>
            <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-100 dark:text-gray-800">
	<div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
		<img src={image}   alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
		<div className="p-6 bg-[#0b0e37] text-white pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md">
			<div className="space-y-2">
				{/* <a rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-3xl"></a> */}
				<li className=" font-lato text-xl dark:text-gray-600">
                    Job Title :{job_title}
				</li>
				
				<li className=" dark:text-gray-600">
                  Salary Range : {salary_range} 
				</li>
				<li className=" dark:text-gray-600">
                   Number of Applicants : {number} 
				</li>
				

                <li className=" dark:text-gray-600">
                   Description : {description} 
				</li>
			</div>
            {/*  */}
            {/*  */}
			<div className="font-lato space-x-4 space-y-4 text-center">
            <button className="btn" onClick={()=>document.getElementById('my_modal_4').showModal()}>Apply Button</button>
<dialog id="my_modal_4" className="modal">
  <div className="modal-box w-11/12 max-w-5xl text-black">
    {/*  */}
    {/*  */}
    <form onSubmit={handlesubmission} className="font-sans m-6 max-w-4xl mx-auto">
        <div>
            <h1 className="font-bold font-lato text-4xl md:text-5xl py-3">You Can Apply This Job</h1>
            <div className="font-lato text-bold mt-4 mb-5">
                <h3>Job Title : {job_title}</h3>
                <h3>Salary : {salary_range}</h3>
                <h3>Deadline: {new Date(application_deadline).toLocaleDateString('en-US', { timeZone: 'UTC' })}</h3>

            </div>
        </div>
            <div className="grid sm:grid-cols-2 gap-10">



                <div className="relative flex items-center">
                    <label className="text-sm bg-white text-black absolute px-2 top-[-10px] left-[18px] font-semibold">User Name</label>
                    <input type="text" defaultValue={user?.displayName} placeholder="Enter first name"
                        className="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none" />
                    {/* svg */}
                </div>
                <div className="relative flex items-center">
                    <label className="text-sm bg-white text-black absolute px-2 top-[-10px] left-[18px] font-semibold">email</label>
                    <input type="text" defaultValue={user?.email} placeholder="Enter first name"
                        className="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none" />
                    {/* svg */}
                </div>
                <div className="relative flex items-center">
                    <label className="text-sm bg-white text-black absolute px-2 top-[-10px] left-[18px] font-semibold">your salary_range</label>
                    <input type="text" name="salary" placeholder="Enter first name"
                        className="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none" />
                    {/* svg */}
                </div>
               
                <div className=" flex flex-col text-start">
                    <label className="text-sm bg-white text-black  px-2 top-[-10px] left-[18px] font-semibold">deadline</label>
                    <DatePicker className="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none" name="post_date"  selected={startDate} onChange={(date) => setStartDate(date)} />
                    {/* svg */}
                </div>
                <div className="relative flex items-center">
                    <label className="text-sm bg-white text-black absolute px-2 top-[-10px] left-[18px] font-semibold">your comment</label>
                    <input type="text" name="comment"  placeholder="type your opinion"
                        className="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none" />
                    {/* svg */}
                </div>
                <div className="relative flex items-center">
                    <label className="text-sm bg-white text-black absolute px-2 top-[-10px] left-[18px] font-semibold">Your resume link</label>
                    <input type="text"   name="resume" placeholder="provide your resume link"
                        className="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none" />
                    {/* svg */}
                </div>
                {/* Similarly, add other input fields */}
            </div>
            <input type="submit" value="Submit" className="mt-8 px-6 py-2.5 w-full text-sm font-semibold bg-blue-500 text-white rounded hover:bg-blue-600" />
        </form>
    {/*  */}
    {/*  */}
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
		</div>
		</div>
	</div>
</div>
            </div>
        </div>
    );
};


export default JobDetails;