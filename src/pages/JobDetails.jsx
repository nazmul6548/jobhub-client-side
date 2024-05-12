import { useLoaderData } from "react-router-dom";


const JobDetails = () => {
    const data = useLoaderData()
    console.log(data);
    const {_id,application_deadline,post_date,salary_range,job_title,user_name,number,
        job_category,image,description}=data
    return (
        <div className="min-h-screen mt-20">
            <div>
            <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-100 dark:text-gray-800">
	<div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
		<img src={image}   alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
		<div className="p-6 bg-[#0b0e37] text-white pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md">
			<div className="space-y-2">
				{/* <a rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-3xl"></a> */}
				<p className="text-xs dark:text-gray-600">
                    Job Title :{job_title}
				</p>
				<p className="text-xs dark:text-gray-600">
                   Description : {description} 
				</p>
				<p className="text-xs dark:text-gray-600">
                  Salary Range : {salary_range} 
				</p>
				<p className="text-xs dark:text-gray-600">
                   Number of Applicants : {number} 
				</p>
			</div>
			<div className="font-[sans-serif] space-x-4 space-y-4 text-center">
  <button type="button"
    className="px-6 py-2 rounded w-3/4 m-auto text-sm tracking-wider font-medium outline-none border-2 border-blue-600 hover:bg-white hover:text-black transition-all duration-300">Blue</button>
		</div>
		</div>
	</div>
</div>
            </div>
        </div>
    );
};

export default JobDetails;