import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState=({
     users: JSON.parse(localStorage.getItem("users")) || [],
     user: JSON.parse(localStorage.getItem("user")) || null,
})


const userSlice= createSlice({
    name:"user",
    initialState,
    reducers:{
        login:(state,action)=>{
            state.user=action.payload
            localStorage.setItem("user", JSON.stringify(action.payload))
        },
        
        logout:(state)=>{
            state.user=null
            localStorage.removeItem("user")
        },
        usersData:(state,action)=>{
            state.users.push(action.payload)
              localStorage.setItem("users", JSON.stringify(state.users));
        },
        deleteUser:(state,action)=>{
            state.users= state.users.filter(user=>user.id !== action.payload)
            localStorage.setItem("users", JSON.stringify(state.users))
        },
        updateUser:(state,action)=>{
            const {id,updatedUser}= action.payload
            state.users = state.users.map(user =>user.id ===id? updatedUser:user)
            localStorage.setItem("users", JSON.stringify(state.users))
           
        },
        addToCartFunctionality:(state,action)=>{
            const item= action.payload
            const price=Number(item.price)

            const isExist= state.user.cart.find(p=> p.id=== item.id)
        
            if (isExist) {
                // isExist.price+=price
             }else{
                 state.user.cart.push({...item, quantity:1,price:price,totalPrice:price})
                 toast.success("Added to Cart")
            }
            localStorage.setItem("user", JSON.stringify(state.user))
        },

        addtheQuantity:(state,action)=>{
        
                 const item = action.payload;
                 const price= Number(item.price)
                 const isExist = state.user.cart.find(p => p.id === item.id);

                 if (isExist) {
                   isExist.quantity += 1;
                   isExist.totalPrice = isExist.quantity * price;
                 }
              localStorage.setItem("user", JSON.stringify(state.user))
        },
        removetheQuantity:(state,action)=>{
            const item= action.payload
            const price= Number(item.price)
            const isExist=state.user.cart.find(p=>p.id===item.id)

            if (isExist) {
                isExist.totalPrice= isExist.totalPrice- price
                isExist.quantity-=1
            }
              localStorage.setItem("user", JSON.stringify(state.user))
        },
        removeFromtheCart:(state,action)=>{
            state.user.cart= state.user.cart.filter(e=>e.id !== action.payload)
            localStorage.setItem("user", JSON.stringify(state.user))
        }
    }
})
 
export default userSlice.reducer
export const{login, logout,deleteUser,updateUser,usersData,addToCartFunctionality, addtheQuantity,removetheQuantity,removeFromtheCart}= userSlice.actions