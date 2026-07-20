import React from 'react'
import {Route, Routes} from 'react-router'
import Shop from '../pages/Shop'
import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Deals from '../pages/Deals'
import Categories from '../pages/Categories'
import NotFound from '../pages/NotFound'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Profile from '../pages/Profile'
import ProductDetails from '../pages/ProductDetails'
import ProtectedRoute from '../pages/ProtectedRoute'
import Favorite from '../pages/Favorite'

const AppRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={
              <ProtectedRoute> <Home/></ProtectedRoute>
            }></Route>
            <Route path='/shop' element={<Shop/>}></Route>
            <Route path='/deals' element={<Deals/>}></Route>
            <Route path='/category' element={<Categories/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/favorite' element={<Favorite/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/profile' element={<Profile/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
            <Route path='/details/:id' element={<ProductDetails/>}></Route>
            <Route path='*' element={<NotFound/>}></Route>
        </Routes>
    </div>
  )
}

export default AppRoutes