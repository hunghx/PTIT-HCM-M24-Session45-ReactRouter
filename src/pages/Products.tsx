import React from 'react'
import { Outlet } from 'react-router-dom'

const Products = () => {
  return (
    <div>
      <h1>Trang sản phẩm</h1>
      {/*  sử dung component Outlet để chỉ định vị trí component con xuất hiện */}
      <Outlet/>
    </div>
  )
}

export default Products
