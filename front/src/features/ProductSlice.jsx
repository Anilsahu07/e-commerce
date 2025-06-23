import { createSlice } from "@reduxjs/toolkit";


const initialState=({
    products:[
      
    ]
})

const productSlice= createSlice({
    name:"product",
    initialState,
    reducers:{
        getProducts: (state, action) => {
        state.products = action.payload;
        },

        deleteProducts:(state,action)=>{
          state.products= state.products.filter(e=>e.id !== action.payload)
        },
        addProduct: (state, action) => {
        state.products.push(action.payload) 
        },
        updateProduct:(state,action)=>{
          const {id,product}=action.payload
           state.products = state.products.map(e => e.id ===id? product:e);
         
        },
        searchProduct:(state,action)=>{
          state.products= action.payload
        }
    }
})
export default productSlice.reducer
export const {deleteProducts, getProducts,addProduct,updateProduct} = productSlice.actions