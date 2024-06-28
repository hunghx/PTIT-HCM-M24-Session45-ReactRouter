
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Products from '../pages/Products'
import Profile from '../pages/Profile'
import NotFound from '../pages/NotFound'
import List from '../components/List'
import Add from '../components/Add'
import ProductDetails from '../components/ProductDetails'
import Edit from '../components/Edit'

const Router = () => {
  return (
    <Routes>
         {/* định nghia các đường dẫn con */}
         <Route path='/' element={<Home/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/products' element={<Products/>}>
            {/* khia báo các đường dẫn cón */}
            <Route index element={<List/>}/> 
            <Route path='add' element={<Add/>}/>
            <Route path='details' element={<ProductDetails/>}/>
            <Route path='edit' element={<Edit/>}/>
         </Route>
         {/*  tham số trên đường dẫn : đường dẫn động */}
         <Route path='/product-details/:id/:name' element={<ProductDetails/>}/>
         <Route path='/profile' element={<Profile/>}/>
         <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}

export default Router
