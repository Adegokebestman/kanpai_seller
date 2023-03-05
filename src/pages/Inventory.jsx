import React, { useState, useEffect } from 'react';
// import { productList } from '../data/dummy';
// import Product from '../components/product';
import { BsPlusLg } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import "./Order.css";
import axios from '../api/axios';

const PRDUCTLIST = '/products/getAllProducts'

 export const Order = () => {
  const [products, setProducts] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      const token = localStorage.getItem('accessToken');

      try {
        const response = await axios.get(PRDUCTLIST,{
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        console.log(response.data)
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);


  return (
    <div className='btn-count mt-24 p-4 md:mt-10'>
    <span className='border rounded-full border-white boxShadow p-4 font-semibold text-black'> All items </span>
  <Link to='../AddProducts'>
    <button className="cartBtn text-sm md:text-xl" style={{background: "linear-gradient(180deg, #2F86FB 0%, #004AAD 100%)"}}>
{/* <BsPlusLg/> */}
          Add Product
        </button>
        </Link>
{/* <div className='mt-10 border rounded-2xl h-52 border-white sidebar p-4 '>
</div> */}
<div className='mt-10 flex flex-wrap lg:flex-nowrap justify-center'>
    <div className='flex  justify-center items-center absolute'>
<div className='flex m-3 flex-wrap justify-center gap-8 items-center '>

{/* map  */}
{products.map((product) => (
  <div key={product._id}>
  <ul className="flex container flex-row bg-white text-center boxShadow  dark:text-gray-200 dark:bg-secondary-dark-bg md:w-full h-32 p-4 rounded-2xl">
      <li className="flex-item pr-2 md:pr-4">
        <img src={product.photo} />
      </li>
      <li className="mr-2 mt-4 md:mr-8 md:mt-8"> {product.available}</li>

      <li className="pt-4 leading-5 mr-2 md:font-medium  md:p-8 md:mr-8">
        {product.name} <br />
        {/* <span className="status"> Available {product.quantity} </span> */}
      </li>

      <li className="ml-2 mr-3 md:ml-8 md:mr-16 mt-8 md:font-medium"> {product.price} </li>

      <li className="ml-2 mr-3 md:ml-8 md:mr-16 mt-8 md:font-medium"> {product.minOrderAmount} </li>

      <span className="rounded-full border-white bg-[#D0F4D0] text-[#147D30] mt-6 mr-5 pt-2 pb-4 pr-2 pl-2 mb-8
      md:mt-8 md:pt-2 md:mr-10 md:mb-8 md:pb-8 md:pr-4 md:pl-4 md:rounded-full ">
        {product.status}
      </span>






    </ul>
 </div>

))}

</div>
</div>


</div>

</div>

  )
}

export default Order;