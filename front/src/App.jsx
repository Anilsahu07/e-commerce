import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import MainRoutes from './router/MainRoutes'
import { ToastContainer } from 'react-toastify'



function App() {


  return (
   <>
    <div className='flex flex-col items-center'>
      <Navbar/>
      <div className='flex'>
        <MainRoutes/>
      </div>
    </div>
    <ToastContainer position='top-center' autoClose='1000'/>
   </>
  )
}

export default App
