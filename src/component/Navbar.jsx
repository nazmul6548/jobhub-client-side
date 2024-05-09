import { useState } from "react";


const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
    return (
        <header className='flex shadow-lg py-4 px-4 sm:px-10 bg-white font-sans min-h-70px tracking-wide relative z-50'>
      <div className='flex flex-wrap items-center justify-between gap-4 w-full'>
        <a href="/" className="lg:absolute max-lg:left-10 lg:top-2/4 lg:left-2/4 lg:-translate-x-1/2 lg:-translate-y-1/2">
          <img src="https://readymadeui.com/readymadeui.svg" alt="logo" className='w-36' />
        </a>

        <div className={`max-lg:hidden ${isMenuOpen ? 'block' : 'hidden'} fixed top-0 left-0 w-full bg-black opacity-50 z-50`}>
          {/* Overlay for the collapsed menu */}
        </div>

        <div id="collapseMenu" className={`max-lg:hidden ${isMenuOpen ? 'block' : 'hidden'} fixed top-0 left-0 w-full z-50`}>
          {/* Collapsed menu */}
          <button id="toggleClose" className='lg:hidden fixed top-2 right-4 z-50 rounded-full bg-white p-3' onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-black" viewBox="0 0 320.591 320.591">
              {/* SVG path for close icon */}
            </svg>
          </button>
          <ul className='lg:flex lg:gap-x-5 space-y-3 w-1/2 min-w-[300px] p-6 h-full shadow-md overflow-auto'>
            {/* Navigation links */}
          </ul>
        </div>

        <div className='flex items-center ml-auto space-x-6'>
          <button className='font-semibold text-15px border-none outline-none'>
            <a href='/' className='text-[#007bff] hover:underline'>Login</a>
          </button>
          <button className='px-4 py-2 text-sm rounded-sm font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]'>Sign up</button>
          <button id="toggleOpen" className='lg:hidden' onClick={toggleMenu}>
            <svg className="w-7 h-7" fill="#333" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              {/* SVG path for menu icon */}
            </svg>
          </button>
        </div>
      </div>
    </header>
    );
  }



export default Navbar;