import { lazy } from 'react'
import {Routes, Route} from 'react-router-dom'
import Auth from './Auth'
import UnAuth from './UnAuth'


const Home= lazy(()=> import("../pages/Home"))
const About= lazy(()=> import("../pages/About"))
const Signin= lazy(()=> import("../pages/Signin"))
const Signup= lazy(()=> import("../pages/Signup"))
const PageNotFound= lazy(()=> import("../pages/PageNotFound"))
const CreateProducts=lazy(()=> import("../admin/createProducts"))
const Update= lazy(()=>import("../pages/Update"))
const Users= lazy(()=>import("../pages/Users"))
const Cart= lazy(()=>import("../pages/Cart"))
const UserUpdate= lazy(()=>import("../pages/UserUpdate"))


const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/create' element={<Auth> <CreateProducts/></Auth>}></Route>
       <Route path='/update/:id' element={<Auth> <Update/></Auth>}></Route>
        <Route path='/cart' element={<Auth> <Cart/></Auth>}></Route>
        <Route path='/' element={<Auth> <Home/></Auth>}></Route>

        {/* <Route path='/update' element={<Update/>}/> */}
        {/* <Route path='/settings' element={<Settings/>}/> */}
        <Route path='/userupdate/:id' element={<UserUpdate/>}/>
        {/* <Route path='/' element={<Home/>} /> */}
        <Route path='/users' element={<UnAuth><Users/></UnAuth>}/>
        <Route path='/signin' element={<UnAuth><Signin/></UnAuth>}/>
        <Route path='/signup' element={<UnAuth><Signup/></UnAuth>}/>
        <Route path='/' element={<UnAuth><Home/></UnAuth>}/>
        {/* <Route path='/signup' element={<Signup/>}/> */}
        <Route path='/about' element={<About/>} />
        {/* <Route path='/signin' element={<Signin/>}/> */}
        <Route path='*' element={<PageNotFound/>} />
    </Routes>
  )
}

export default MainRoutes