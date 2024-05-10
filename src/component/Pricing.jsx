

const Pricing = () => {
    return (
        <div>
              <div className="font-[sans-serif] text-[#333] relative before:absolute before:w-full before:h-2/3 max-md:before:h-1/3 before:bg-[#1d275e] ">
            <div className="max-w-6xl mx-auto py-10 px-4 relative ">
                <div className="text-center max-w-lg mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-4">Pricing</h2>
                    <p className="text-sm text-gray-300">Welcome to our Pricing Section! At JobQuestHub, we believe in providing affordable pricing that scales with your business needs. We understand that every business is unique, and that's why we don't lock our features behind expensive plans. With us</p>
                </div>
                <div className="flex items-center justify-center max-md:flex-col mt-16">
                    <div className="bg-[#0b0e37] text-white text-center p-10 rounded-md max-w-sm">
                        <h3 className="text-xl">How Many Email Subscribers Do You Have?</h3>
                        <h3 className="text-4xl mt-10 border-b-2 border-white pb-2 inline-block">5,000</h3>
                        <div className="flex items-center mt-10">
                            <output className="mr-2" htmlFor="myRange" id="rangeValue">1000</output>
                            <input type="range" className="w-full cursor-pointer" min="0" max="100" step="1" value="30" id="myRange" />
                            <output className="ml-2" htmlFor="myRange" id="rangeValue">100k+</output>
                        </div>
                        <p className="text-xs mt-6">If you have more than 100k subscribers, get in touch.</p>
                    </div>
                    <div className="bg-white text-center p-10 rounded-md md:min-w-[500px] max-md:mt-10 shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] relative md:-left-1">
                        <h3 className="text-5xl">$15<sub className="text-gray-500 text-xs ml-2">Per Month</sub></h3>
                        <div className="mt-10">
                            <h4 className="text-base font-bold mb-4 text-left">Plan Includes</h4>
                            <div className="grid grid-cols-2 max-lg:grid-cols-1 items-start gap-6">
                                <div className="flex items-center text-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" className="mr-4 fill-green-500" viewBox="0 0 24 24">
                                        <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                                    </svg>
                                    30 part time job
                                </div>
                                {/* Add more plan includes */}
                                <div className="flex items-center text-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" className="mr-4 fill-green-500" viewBox="0 0 24 24">
                                        <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                                    </svg>
                                    3 onsite job
                                </div>
                                <div className="flex items-center text-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" className="mr-4 fill-green-500" viewBox="0 0 24 24">
                                        <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                                    </svg>
                                    300 remote jobs
                                </div>
                                <div className="flex items-center text-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" className="mr-4 fill-green-500" viewBox="0 0 24 24">
                                        <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                                    </svg>
                                    50 web development jobd
                                </div>
                                {/* Add more plan includes */}
                            </div>
                            <button type="button" className="w-full mt-10 px-2 py-2 text-sm border border-gray-700 hover:border-blue-500 bg-transparent rounded-md">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Pricing;