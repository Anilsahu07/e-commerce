import {useForm} from 'react-hook-form'
import {useDispatch,useSelector} from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { signInUser} from '../actions/UserAction'



const Signin = () => {
  const navigate= useNavigate()
  const {register, handleSubmit}= useForm()
  const dispatch= useDispatch()

   const formSubmitHandler=(user)=>{
    dispatch(signInUser(user))
    navigate("/")
  }


  return (
    <div className='w-screen flex flex-col justify-center gap-5 items-center bg-slate-950 h-[90.5vh]'>
      <form className=' flex flex-col gap-3 items-center justify-center p-5 w-full' action="" onSubmit={handleSubmit(formSubmitHandler)}>
          <input className='rounded border-b-2 p-2 border-black lg:w-1/3 w-full' {...register("email", {required:true})} type="email" placeholder='Enter email' />
          <input className='rounded border-b-2 p-2 border-black lg:w-1/3 w-full' {...register("password", {required:true})} type="password" placeholder='Enter password' />
          <div className='flex lg:gap-3 items-center gap-4'>
           <button className='px-3 py-2 bg-red-500 rounded text-white lg:px-4 lg:py-2.5'>Signin</button>
           <p className='flex gap-1 lg:text-xl text-[12px] text-white'>Dont have an account?<Link to='/signup' className='text-blue-500'>Signup</Link></p>
          </div>
      </form>
    </div>
  )
}

export default Signin