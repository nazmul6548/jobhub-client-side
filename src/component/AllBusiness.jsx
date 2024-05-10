

const AllBusiness = () => {
    return (
        <div className="font-sans text-white bg-[#0b0e37] px-6 py-12 overflow-hidden">
      <div className="max-w-7xl max-md:max-w-md mx-auto">
        <div className="grid md:grid-cols-2 items-center gap-12">
          <div>
            <h2 className="lg:text-5xl md:text-4xl text-3xl font-extrabold mb-4 lg:!leading-[55px]">All your business finances in this side.</h2>
            <p className="mt-4 text-base leading-relaxed">"Welcome to our job platform, where you can explore a diverse array of career opportunities tailored to your preferences. Whether you're seeking remote positions, part-time roles, traditional onsite jobs, or the flexibility of hybrid work arrangements, we've got you covered. </p>
            <div className="mt-10">
              <button type='button' className="bg-white hover:bg-gray-100 transition-all text-[#333] font-bold text-sm rounded px-5 py-3">Getting Started</button>
              <a href="javascript:void(0)" className="text-sm font-bold underline sm:ml-6 max-sm:mt-4 max-sm:block whitespace-nowrap">API Documentation</a>
            </div>
          </div>
          <div>
            <img src='https://i.ibb.co/jwSLKM4/pexels-markusspiske-1089440.jpg' alt="App Banner" className="shrink-0 w-full h-full md:skew-x-[-26deg] md:-rotate-2 rounded-md object-contain" />
          </div>
        </div>
      </div>
    </div>
    );
};

export default AllBusiness;