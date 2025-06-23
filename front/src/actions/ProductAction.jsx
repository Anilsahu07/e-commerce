import axios from "../api/ApiConfig"
import { addProduct, deleteProducts, getProducts, updateProduct} from "../features/ProductSlice"


export const getProduct = () => async (dispatch) => {
  try {
  const {data}= await axios.get("/products");
    dispatch(getProducts(data))
  } catch (error) {
    console.log(error);
  }
};


export const fetchAllProducts = (product) => async (dispatch) => {
  try {
      const {data}= await axios.post("/products", product);
      dispatch(addProduct(data));
      const existingProduct= JSON.parse(localStorage.getItem("products")) || []
      const updatedProducts= [...existingProduct, product]
      localStorage.setItem("products", JSON.stringify(updatedProducts));
  } catch (error) {
    console.log(error);
    
  }

};


export const updateProducts=(id,product)=>async(dispatch)=>{
  try {
  const {data}= await axios.patch(`/products/${id}`,product)
   dispatch(updateProduct({id:id,product:data}))
  } catch (error) {
    console.log(error);
  }
}


export const deleteProduct=(id)=>async(dispatch)=>{
    try {
        await axios.delete(`/products/${id}`)
        dispatch(deleteProducts(id))
       const existingProducts= JSON.parse(localStorage.getItem("products"))|| []
       const updatedProducts= existingProducts.filter(p=>p.id !==id)
       localStorage.setItem("products", JSON.stringify(updatedProducts))
    } catch (error) {
        console.log(error);    
    }
}