import axios from '../api/ApiConfig'
import { deleteUser, login,updateUser, usersData } from '../features/UserSlice';
import {toast,} from 'react-toastify'


export const signUpUser=(user)=>async(dispatch,getState)=>{
    try {
       const {data}= await axios.post("/users",user)
       dispatch(usersData(data))
       console.log("User Registered");
       toast.success("User Created")
      } catch (error) {
        console.log(error);
      }
    }
    
    
    export const signInUser=(user)=>async(dispatch,getState)=>{
      
      try {
        const {data}= await axios.get("/users")
        const matchedUser= data.find(
        (cred)=>cred.email===user.email && cred.password=== user.password
      )
      console.log(matchedUser);
      
      if (matchedUser) {
        dispatch(login(matchedUser))
        toast.success("User Logged in")
        console.log("user Logged in");
        
      }else{
        toast.success("User Not Found")
        console.log("User not found");
        
      }

    } catch (error) {
        console.log(error);
        
    }
}


export const deleteUsers=(id)=>async(dispatch)=>{  
    try {
        await axios.delete(`/users/${id}`)
        dispatch(deleteUser(id))
        console.log("user Deleted");
    } catch (error) {
        console.log(error);
        
    }
}

export const updatedUsers=(users,id)=>async(dispatch)=>{    
  try {
    const {data}=await axios.patch(`/users/${id}`,users)
    dispatch(updateUser({id:id,updatedUser:data}))
  } catch (error) {
    console.log(error);
    
  }
}