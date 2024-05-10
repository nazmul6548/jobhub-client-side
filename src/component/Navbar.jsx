// import { useState } from "react";
import { Audio } from 'react-loader-spinner'
import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { AuthContext } from "./authprovider/AuthProvider";


const Navbar = () => {
    const {user,loader,logout,}= useContext(AuthContext)

    const [theme,setTheme] = useState("light")

    useEffect(()=>{
        localStorage.setItem("theme",theme);
        const item = localStorage.getItem("theme");
        
            document.querySelector("html").setAttribute("data-theme",item);
        
            },[theme])  


    const handleTheme = e => {
        console.log("ki");
        if (e.target.checked) {
            setTheme("dark")
        }else{
            setTheme("light")
        }
      
    }
   

   
    const navlink = (
        <>
          <li className="hover:border-2 m-1">
            <NavLink to="/">Home</NavLink>
          </li>
          
            {
              user && <li className="m-1">
              <NavLink to="/">All Jobs</NavLink>
            </li>
            }
          
          <li className="hover:border-2 m-1">
            <NavLink to="/">Applied Jobs</NavLink>
          </li>
          <li className="hover:border-2 m-1">
            <NavLink to="/"> Add A Job</NavLink>
          </li>
          <li className="hover:border-2 m-1">
            <NavLink to="/">My Jobs</NavLink>
          </li>
          <li className="hover:border-2 m-1">
            <NavLink to="/"> Blogs</NavLink>
          </li>
          <li className="hover:border-2 m-1">
            <NavLink to="/"> User Profile</NavLink>
          </li>
          
            
           
          
    
         
        </>
    )
    return loader ? (
      <div className="flex items-center justify-center w-full h-[100vh] text-gray-100  ">
      <div>
      render(<Audio
  height="100"
  width="100"
  color="#4fa94d"
  ariaLabel="audio-loading"
  wrapperStyle={{}}
  wrapperClass="wrapper-class"
  visible={true}
  />)
      </div>
    </div>
     ) : (
        <div className="navbar bg-[#0b0e37] fixed top-0 shadow-lg  z-[4] ">
        <div className=" navbar-start  text-white ">
          <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          
            <ul tabIndex={0}  className="menu bg-[#0b0e37] text-white  py-4 menu-sm dropdown-content mt-3 z-[2]  p-2 shadow   rounded-box w-52">
              
              {navlink}
            </ul>
          </div>
          
          <Link to="/" className="btn btn-ghost hidden text-4xl  md:block "><span className=" text-4xl">JobQuest</span>Hub</Link>
        </div>
        <div className="navbar-center  hidden lg:flex">
          <ul className="menu menu-horizontal  px-1 text-zinc-50">
            {navlink}
          </ul>
        </div>
        <div className=" navbar-end">

            {/*  */}
          {/*  */}
          <label onChangeCapture={handleTheme} className="flex text-white cursor-pointer gap-2">
          <input type="checkbox" value="synthwave" className="toggle theme-controller"/>
</label>
            {/*  */}
            {/*  */}
            {user ? (
          <div className="dropdown dropdown-hover">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                
                <a id="clickable"><img src={user?.photoURL || <p>user</p>} alt="" /></a>
                <Tooltip anchorSelect="#clickable" clickable>
                <button> {user?.displayName || "not found"}</button>
                <div className="mt-2 rounded-md">
                <button onClick={logout} className="btn btn-sm bg-white">LogOut</button>
                </div>

                </Tooltip>
              </div>
            </label>
            {/*  */}
          
          </div>
        ) : (
          <Link to="/logIn">
            <button className="btn btn-sm bg-white text-stone-800 ml-2 mr-2">Login</button>
          </Link>
          

        )}
        {/* {
          !user && <Link to="/register">
          <button className="btn btn-sm bg-white text-stone-800">Register</button>
        </Link>
        } */}
        {/* {
          user && <button onClick={logout} className="btn btn-sm bg-white">LogOut</button>
        } */}
        </div>
      </div>
    );
  }



export default Navbar;