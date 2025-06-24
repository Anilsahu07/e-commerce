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
const Search= lazy(()=>import("../pages/Search"))
const Profile= lazy(()=>import("../pages/Profile"))


const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/create' element={<Auth> <CreateProducts/></Auth>}></Route>
       <Route path='/update/:id' element={<Auth> <Update/></Auth>}></Route>
        <Route path='/cart' element={<Auth> <Cart/></Auth>}></Route>
        <Route path='/' element={<Auth> <Home/></Auth>}></Route>
        <Route path='/about' element={<Auth><About/></Auth>}/>
        <Route path='/search' element={<Auth><Search/></Auth>}/>
        <Route path='/profile' element={<Auth><Profile/></Auth>}/>
        {/* <Route path='/users' element={<Auth><Users/></Auth>}/> */}

        {/* <Route path='/update' element={<Update/>}/> */}
        {/* <Route path='/settings' element={<Settings/>}/> */}
        <Route path='/userupdate/:id' element={<UserUpdate/>}/>
        {/* <Route path='/' element={<Home/>} /> */}
        <Route path='/users' element={<UnAuth><Users/></UnAuth>}/>
        <Route path='/signup' element={<UnAuth><Signup/></UnAuth>}/>
        {/* <Route path='/about' element={<About/>} /> */}
        <Route path='/signin' element={<UnAuth><Signin/></UnAuth>}/>
        <Route path='*' element={<PageNotFound/>} />
    </Routes>
  )
}

export default MainRoutes