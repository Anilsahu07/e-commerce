import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate} from 'react-router-dom'

const Auth = ({children}) => {
  const {user}= useSelector(state=>state.user)
  
  
  return user?children :<Navigate to='/signin'/>
}

export default Auth