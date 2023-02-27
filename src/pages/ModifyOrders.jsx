import React from 'react';
import {IoIosArrowBack} from 'react-icons/io';
import { Link } from 'react-router-dom';


const ModifyOrders = () => {
  return (
    <div className=' mt-10'>
        <div>

<button className='font-medium mr-4 text-black text-2xl border border-white sidebar rounded-lg p-2'>
<Link to='../Order' >
<IoIosArrowBack/>
</Link>
 </button>
 <p className='font-semibold text-2xl inline-block ml-2'>
  Requested Orders </p>

  </div>

  {/* Modify Orders */}
  <div className=' boxShadow mt-10 w-11/12 rounded-xl'>
  <div className='pt-8'>
  <span className='p-10 text-xl font-medium'>Order Details</span>
<span className='p-10'> <button className='rounded-xl py-4 border bg-[#D9D9D9] px-4 text-xl font-medium text-white'>Modify order</button></span>
<label for="Toggle1" className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100">
	{/* <span>Left</span> */}
	<span className="relative">
		<input id="Toggle1" type="checkbox" className="hidden peer" />
		<div className="w-10 h-6 rounded-full shadow-inner bg-gray-400 peer-checked:bg-[#FF7E20]"></div>
		<div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-white"></div>
	</span>
	<span className='uppercase font-bold'>CLick To Make Unavailable</span>
</label>


<br/> <br></br>
<hr className='pt-10'/>
</div>
<form className=''>
<div className='flex justify-between m-5'>
<div className="">
            <label for="firstname" className="block mb-1 ml-1">Product</label>
			<input id="firstname" type="text"  required="" className="block w-full p-4   border-[#D9D9D9] rounded-xl focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"
				 value={FormData.firstname} onChange={(event) => setFormData({...FormData, firstname: event.target.value})}
			/> </div>

            <div className="">
            <label for="firstname" className="block mb-1 ml-1">QTY</label>
			<input id="firstname" type="text"  required="" className="block w-full p-4   border-[#D9D9D9] rounded-xl focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"
				 value={FormData.cost} onChange={(event) => setFormData({...FormData, cost: event.target.value})}
			/></div>

<div className="">
            <label for="firstname" className="block mb-1 ml-1">Date</label>
			<input id="firstname" type="text"  required="" className="block w-full p-4   border-[#D9D9D9] rounded-xl focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"
				 value={FormData.cost} onChange={(event) => setFormData({...FormData, cost: event.target.value})}
			/></div>

<div className="">
            <label for="firstname" className="block mb-1 ml-1">Time</label>
			<input id="firstname" type="text"  required="" className="block w-full p-4   border-[#D9D9D9] rounded-xl focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"
				 value={FormData.cost} onChange={(event) => setFormData({...FormData, cost: event.target.value})}
			/></div>
            </div>

<hr className='pb-4 pt-10'/>
<div className='flex justify-end mr-4 pb-8'>
<buttton className='rounded-xl bg-[#FF7E20] text-xl font-medium text-white py-6 px-4'> Accept Order</buttton>
</div>
</form>


  </div>
    </div>
  )
}

export default ModifyOrders