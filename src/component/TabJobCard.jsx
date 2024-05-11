


const TabJobCard = ({job}) => {
  const {jobTitle} =job || {};
    return (
        <div className="">
          
           
              <div className="bg-white shadow-[0_2px_18px_-6px_rgba(0,0,0,0.2)] w-full max-w-sm rounded-lg font-sans overflow-hidden mx-auto mt-4">
              <div className="px-4 my-6">
                <h3 className="text-lg font-semibold text-black">{jobTitle}</h3>
                <p className="mt-2 text-sm text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui. Maecenas</p>
                <button type="button" className="px-6 py-2 mt-4 rounded text-white text-sm tracking-wider font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600">View</button>
              </div>
            </div>
           

        </div>
    );
};

export default TabJobCard;