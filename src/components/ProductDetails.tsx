import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {

    // sử dụng useParams để lấy ra tham số trên đường dẫn động 
    // const {id,name} = useParams(); 
    let id = useParams().id;
    let name = useParams().name;

  return (
    <div>
      Details : {id} + Name : {name}
    </div>
  ) 
}

export default ProductDetails
