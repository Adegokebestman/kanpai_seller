import React from 'react';
import "./Order.css";


const CustomerOrder = ({product}) => {
    return (
        <ul className='flex container flex-row mb-8 bg-white text-center sidebar  dark:text-gray-200 dark:bg-secondary-dark-bg md:w-full h-32 p-4 rounded-2xl'>
          <li className='flex-item md:pr-8'>
          <img src={product.CustomerImage} />

        </li>
        {/* <li key = {product.id} className="mr-4 mt-4 md:mr-20 md:mt-8"> {product.id}</li> */}

        <li className='mr-2 p-2 text-sm font-medium md:p-8 md:font-medium md:mr-16'>{data.name}

        <br/><span className='status'> Available {data.quantity} </span>
        </li>

        <li className='ml-2 mr-1 mt-8 md:ml-8 md:mr-16 md:mt-8 font-medium'> {data.price} </li>

        {/* Buttons */}
        {/* increase Product */}
        <button onClick={() => increase(product)} className=' md:ml-8 md:mr-4 ml-2 mr-2 mt-8 pr-2 pt-2 pl-2 pb-2 mb-8 border rounded-full bg-[#D0F4D0] text-[#147D30] '>
                    <BsPlusLg/>
                    </button>

                    <span className='pt-9'>{product.quantity}</span>






        <button style={{background: "linear-gradient(180deg, #2F86FB 0%, #004AAD 100%)"}} className='cartBtn3 text-lg md:text-xl px-2 md:px-7 text-white'> Modify  </button>
        <button className='cartBtn3 text-lg md:text-xl  px-2 md:px-7 border-2 border-[#FF7E20] text-[#FF7E20]'> Accept Order  </button>

        </ul>

          )
        }

export default CustomerOrder