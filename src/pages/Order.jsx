import React, { useState } from 'react';
import {IoIosArrowBack} from 'react-icons/io';
import { customersData } from '../data/dummy';
import "./Order.css";
import MyModal from './CheckOut';
import CustomerOrder from "../components/CustomerOrder";
import CartContext from '../contexts/Cart/CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

// import Checkout from "../components/CheckOut";



const Order = () => {
  const { cartItems, checkout, clearCart } = useContext(CartContext);

  // const [showMyModal, setShowMyModal] = useState(false);
  // const handleOnClose = () => setShowMyModal(false);

  return (
    <div className='btn-count mt-24 ml-2 md:mt-10'>
<div>

<button className='font-medium mr-4 text-black text-2xl border border-white sidebar rounded-lg p-2'>
<Link to='../Inventory' >
<IoIosArrowBack/>
</Link>
 </button>
 <p className='font-semibold text-2xl inline-block ml-2'>
  Requested Orders </p>

  </div>
<div className='mt-10 flex flex-wrap lg:flex-nowrap justify-center'>
    <div className='flex justify-center items-center absolute'>
<div className='flex m-3 flex-wrap justify-center gap-8 items-center '>


<div>
                  {customersData.map((product) => (
                    <ul className='flex container flex-row mb-8 bg-white text-center sidebar  dark:text-gray-200 dark:bg-secondary-dark-bg md:w-full h-32 p-4 rounded-2xl' key={product.id} product={product}>
                    <li className='flex-item md:pr-8'>
          <img className='rounded-full' src={product.CustomerImage} />

        </li>
        {/* <li key = {product.id} className="mr-4 mt-4 md:mr-20 md:mt-8"> {product.id}</li> */}

        <div className='mr-2 p-2 grid text-sm font-medium  md:p-8 md:font-medium md:mr-10'>{product.CustomerName}

        <p className='bar'>  {product.BarName} </p>
        </div>

        <li className='ml-2 border rounded-full  mb-8 w-10 pt-1 bg-[#FF7E20] text-white mr-1 mt-8 md:ml-8 md:mr-16 md:mt-8 font-medium'> {product.Quantity} </li>


        <li className='ml-2 mr-1 mt-8 md:ml-8 md:mr-16 md:mt-8 font-medium'> {product.Date} </li>

        {/* Buttons */}
        {/* increase Product */}
        {/* <button onClick={() => increase(product)} className=' md:ml-8 md:mr-4 ml-2 mr-2 mt-8 pr-2 pt-2 pl-2 pb-2 mb-8 border rounded-full bg-[#D0F4D0] text-[#147D30] '>
                    <BsPlusLg/>
                    </button> */}






<Link to='../ModifyOrders'>
        <button style={{background: "linear-gradient(180deg, #2F86FB 0%, #004AAD 100%)"}} className='cartBtn3 text-lg md:text-xl px-2 md:px-7 text-white'> Modify  </button>
</Link>
        <button className='cartBtn3 text-lg md:text-xl  px-2 md:px-7 border-2 border-[#FF7E20] text-white md:text-[#FF7E20]'> Accept Order  </button>

        </ul>
                  ))}
                </div>


{/*  */}


{/*
<div className=' flex justify-between'>
<Link to="../Inventory">
          <button
        class="py-2 px-10 mr-10 md:mr-20 text-xl md:text-2xl bg-[#FF7E20] text-[#ffffff] font-semibold border border-[#FF7E20] rounded hover:bg-[#FF7E20] hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
      >Add Item</button>
      </Link>

<button onClick={() => setShowMyModal(true)}
        class="py-2 px-10 bg-transparent text-xl md:text-2xl text-[#FF7E20] font-semibold border border-[#FF7E20] rounded hover:bg-[#FF7E20] hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
      >Check Out</button>



</div>

<MyModal onClose={handleOnClose} visible={showMyModal} /> */}

</div>
</div>


</div>

</div>

  )
}

export default Order


