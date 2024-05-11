import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="bg-[#0b0e37] mt-16 font-sans tracking-wide relative overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12 gap-8 py-14 px-12 relative">
          <div>
            <h2 className="text-lg text-gray-300 font-semibold mb-6">Company</h2>
            <ul className="space-y-5">
              <li><Link to="/about" className="text-gray-300 hover:text-white text-base flex items-center transition-all">About</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white text-base flex items-center transition-all">Services</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white text-base flex items-center transition-all">Contact</Link></li>
            </ul>
          </div>
  
          <div>
            <h2 className="text-lg text-gray-300 font-semibold mb-6">Products</h2>
            <ul className="space-y-5">
              <li><Link to="/featured" className="text-gray-300 hover:text-white text-base flex items-center transition-all">Featured</Link></li>
              <li><Link to="/new-arrivals" className="text-gray-300 hover:text-white text-base flex items-center transition-all">New Arrivals</Link></li>
              <li><Link to="/sale" className="text-gray-300 hover:text-white text-base flex items-center transition-all">Sale</Link></li>
            </ul>
          </div>
  
          <div>
            <h2 className="text-lg text-gray-300 font-semibold mb-6">Resources</h2>
            <ul className="space-y-5">
              <li><Link to="/documentation" className="text-gray-300 hover:text-white text-base flex items-center transition-all">Documentation</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-white text-base flex items-center transition-all">FAQ</Link></li>
              <li><Link to="/support" className="text-gray-300 hover:text-white text-base flex items-center transition-all">Support</Link></li>
            </ul>
          </div>
  
          <div>
            <h2 className="text-lg text-gray-300 font-semibold mb-6">Connect</h2>
            <ul className="space-y-5">
              <li><Link to="/facebook" className="text-gray-300 hover:text-white text-base flex items-center transition-all">Facebook</Link></li>
              <li><Link to="/twitter" className="text-gray-300 hover:text-white text-base flex items-center transition-all">Twitter</Link></li>
              <li><Link to="/instagram" className="text-gray-300 hover:text-white text-base flex items-center transition-all">Instagram</Link></li>
            </ul>
          </div>
        </div>
  
        <hr className="border-gray-600" />
  
        <div className="my-8 px-12 flex flex-wrap sm:justify-between gap-6 relative z-20">
          <div className="flex space-x-5">
          <a href="https://www.facebook.com" target="_blank" className="text-gray-300 hover:text-white text-base transition-all">
            <svg className="w-5 h-5 fill-gray-400 hover:fill-white" viewBox="0 0 24 24" aria-hidden="true">
              <path  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63
                  .772-1.63 1.558V12h2.77l-.443 2.89h-2.327V22C18.343 21.128 22 16.991 22 12"></path>
            </svg>
          </a>
          <a href="https://www.youtube.com" target="_blank" className="text-gray-300 hover:text-white text-base transition-all">
            <svg className="w-5 h-5 fill-gray-400 hover:fill-white" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2C6.486 2 2 6.486 2 12c0 5.513 4.486 10 10 10s10-4.487 10-10c0-5.514-4.486-10-10-10zm0 1.542c4.951 0 8.458 3.392 8.458 8.458 0 4.949-3.391 8.458-8.458 8.458-4.948 0-8.458-3.391-8.458-8.458
                      0-4.949 3.392-8.458 8.458-8.458zM9.743 16.747V7.128l6.027 4.31-6.027 4.309z">
              </path>
            </svg>
          </a>
          <a href="javascript:void(0)" className="text-gray-300 hover:text-white text-base transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="fill-gray-400 hover:fill-white w-5 h-5"
              viewBox="0 0 24 24">
              <path 
                d="M21 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5zm-2.5 8.2v5.3h-2.79v-4.93a1.4 1.4 0 0 0-1.4-1.4c-.77 0-1.39.63-1.39 1.4v4.93h-2.79v-8.37h2.79v1.11c.48-.78 1.47-1.3 2.32-1.3 1.8 0 3.26 1.46 3.26 3.26zM6.88 8.56a1.686 1.686 0 0 0 0-3.37 1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68zm1.39 1.57v8.37H5.5v-8.37h2.77z"
                ></path>
            </svg>
          </a>
          </div>
  
          <p className='text-gray-300 text-sm'>© 2023 <a href='https://readymadeui.com/' target='_blank' rel='noopener noreferrer' className="hover:underline mx-1">JobQuestHub</a> All Rights Reserved.</p>
        </div>
  
        <img src="https://readymadeui.com/bg-image.webp" alt="Background" className="absolute w-full inset-0 object-cover opacity-5 " />
      </footer>
    );
};

export default Footer;