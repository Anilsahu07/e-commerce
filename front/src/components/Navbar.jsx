import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link, NavLink, useNavigate} from 'react-router-dom'
import { logout } from '../features/UserSlice'
import {gsap} from 'gsap'
import { toast } from 'react-toastify'


const Navbar = () => {
  const [toggle, settoggle] = useState(false)
  const {user}= useSelector(state=>state.user)
  const dispatch= useDispatch()
  const navigate=useNavigate()

  const logoutUser=()=>{
   dispatch(logout())
   navigate("/signin")
   toast.success("User Logged out!!")
   console.log("User Logged out");
  }
  
  const handleToggle=()=>{
    settoggle(!toggle)
    console.log("anil");
    
  }

  
  const divRef= useRef(null)
  const iconRef= useRef(null)

  gsap.to(divRef.current,{
    y:80,
    duration:0.3
  })
  

useEffect(() => {
  const handleClickOutside = (event) => {
    if (
      divRef.current &&
      !divRef.current.contains(event.target) &&
      iconRef.current &&
      !iconRef.current.contains(event.target)
    ) {
      settoggle(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);

  

  return (
    <div className='flex items-center gap-10 lg:bg-black border-b-2 bg-white text-black lg:h-18 h-18 font-[poppins] lg:text-white lg:w-screen w-screen'>
      {user?<div className='w-full flex lg:justify-around justify-start gap-10 items-center lg:p-4 p-4'>
        <div>
          <NavLink className={` active:text-red-400 flex-none hidden lg:flex`} to='/'>Home</NavLink>
        </div>

        <div className='flex items-center gap-10 relative'> 
           <NavLink className={`active:scale-95 active:text-red-400 hidden lg:flex`} to='/profile'>Profile</NavLink>
           <NavLink className={`active:scale-95 active:text-red-400 hidden lg:flex`} to='/about'>About</NavLink>
           <NavLink className={`active:scale-95 active:text-red-400 flex lg:relative lg:left-0 relative -left-1/3 lg`} to='/cart'>
           <i className="ri-shopping-cart-fill text-5xl lg:text-4xl text-green-500"></i>
           </NavLink>
           <NavLink className={`active:scale-95 active:text-red-400 font-bold`} to={`/search`}>
            <i className="ri-search-line lg:text-3xl text-4xl"></i>
           </NavLink>
        </div>
        <div>
            <NavLink onClick={logoutUser} className='bg-red-400 text-white px-3 py-2 rounded lg:flex hidden'>Logout</NavLink>
        </div>
      
       <NavLink ref={iconRef} onClick={handleToggle} className='bg-black text-white px-1.5 py-0.5 rounded lg:hidden flex flex-col outline outline-white absolute right-3'>
          {toggle?<i className="ri-menu-3-line text-3xl"></i>: <i className="ri-menu-line text-3xl"></i> }
       </NavLink>
       <div ref={divRef} className='flex flex-col outline  absolute right-0 top-0'>
          <p className='hidden'></p>
           {toggle&&<div className='text-black flex flex-col bg-white w-full items-center p-6 lg:p-0 h-fit gap-4'>
              <NavLink onClick={() => settoggle(false)} className={` active:text-red-400 lg:hidden`} to='/profile'>Profile</NavLink>
              <NavLink onClick={() => settoggle(false)} className={` active:text-red-400 lg:hidden`} to='/'>Home</NavLink>
              <NavLink onClick={() => settoggle(false)} className={`active:scale-95 active:text-red-400 lg:hidden`} to='/about'>About</NavLink>
              <NavLink onClick={() => settoggle(false)} className={` active:text-red-400 lg:hidden`} to='/create'>Create Product</NavLink>
              <NavLink onClick={() => settoggle(false)} className={` active:text-red-400 lg:hidden`} to='/profile'>Profile</NavLink>
              <NavLink onClick={() =>{logoutUser(); settoggle(false)}} className='text-white bg-green-500 z-* p-2 rounded lg:hidden'>Logout</NavLink>
            </div>}
       </div>
      </div>
      :
      <div className='w-full flex lg:justify-around justify-between lg:p-4 p-4 items-center'>
        <div className='flex'>
          <h1 className='text-black font-mono font-bold text-4xl lg:text-white lg:text-6xl flex items-center gap-0.5 lg:gap-2'><p className='text-orange-600'>S</p>H <p className='text-orange-600'>O</p>P <p className='text-orange-600'>P</p>E <p className='text-orange-800'>?</p> </h1>
        </div>
        <div className='flex items-center lg:justify-between w-1/3 justify-center gap-2'>
          <NavLink className={`active:scale-95 active:text-red-400 lg:text-xl text-s font-[montserrat] lg:text-white hover:text-red-500 lg:flex `} to='/signin'>Signin</NavLink>
          <NavLink className={`active:scale-95 active:text-red-400 lg:text-xl text-s font-[montserrat] lg:text-white hover:text-red-500`} to='/users'>Users</NavLink>
        </div>
       
       {/* <NavLink className={`active:scale-95 active:text-red-400`} to='/signup'>Signup</NavLink> */}
         </div>}
        

       
        
    </div>
    
  )
}

export default Navbar