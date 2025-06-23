import {configureStore} from '@reduxjs/toolkit'
import UserSlice from '../features/UserSlice'
import ProductSlice from '../features/ProductSlice'

export const store= configureStore({
    reducer:{
        user: UserSlice,
        product: ProductSlice
    }
})