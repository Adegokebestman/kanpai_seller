import React from 'react';
import { Link } from 'react-router-dom';
import {IoIosArrowBack} from 'react-icons/io';
import {BsCamera} from 'react-icons/bs';

const AddProducts = () => {
  return (
    <div className='mt-10'>
<div>

<button className='font-medium mr-4 text-[#5B5856] text-2xl border border-white sidebar rounded-lg p-2'>
<Link to='../Inventory' >
<IoIosArrowBack/>
</Link>
 </button>

 <p className='font-semibold text-2xl inline-block ml-2'>
   Add Product </p>

  </div>
{/* Add product */}
<section className="p-6 dark:bg-gray-800 dark:text-gray-50">
      <form novalidate="" action="" className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
        <fieldset className="grid grid-cols-4 gap-6 p-6 dark:bg-gray-900">

          {/* <div className="col-span-full space-y-2">
                        <label for="bio" className="text-sm">Photo</label>

                    </div> */}

          <div className="space-y-2 col-span-full lg:col-span-1">
          <div>
	<img src="https://source.unsplash.com/150x150/?portrait?3" alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
  <div className=' border bg-white  w-10 h-10 p-2 ml-40 camera -mt-10  text-black rounded-full'>
           <button type='submit'>    <BsCamera className='text-2xl'/> </button>
              </div>
 {/* <div className='w-14 h-14 bg-[#FF7E20] relative rounded-full'>
  <BsCamera className='text-2xl ml-24 camera'/>
  </div> */}
  </div>
        </div>

          <div className="grid grid-cols-4 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
            <label for="firstname" className="block mb-1 ml-1">Product Name</label>
			<input id="product" type="text"  required="" className="block w-full p-3   border-[#AF501A] rounded-xl focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"
				 value={FormData.product} onChange={(event) => setFormData({...FormData, product: event.target.value})}
			/> </div>

            <div className="col-span-full sm:col-span-3">
            <label for="firstname" className="block mb-1 ml-1">Product Description</label>
			<textarea id="firstname" type=""  required="" className="block w-full p-5 border-2 border-[#AF501A] rounded-xl focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"
				 value={FormData.firstname} onChange={(event) => setFormData({...FormData, firstname: event.target.value})}
			/>
      </div>

            <div className="col-span-full sm:col-span-2">
            <label for="firstname" className="block mb-1 ml-1">Unit Price </label>
			<input id="firstname" type="text"  required="" className="block w-full p-4   border-[#AF501A] rounded-xl focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"
				 value={FormData.firstname} onChange={(event) => setFormData({...FormData, firstname: event.target.value})}
			/></div>

            <div className="col-span-full sm:col-span-2">
            <label for="firstname" className="block mb-1 ml-1">Amount Available </label>
			<input id="firstname" type="text"  required="" className="block w-full p-4   border-[#AF501A] rounded-xl focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"
				 value={FormData.firstname} onChange={(event) => setFormData({...FormData, firstname: event.target.value})}
			/> </div>

            <div className="col-span-full sm:col-span-2">
            <label for="firstname" className="block mb-1 ml-1">Minimum Order Amount</label>
			<input id="firstname" type="text"  required="" className="block w-full p-4   border-[#AF501A] rounded-xl focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"
				 value={FormData.firstname} onChange={(event) => setFormData({...FormData, firstname: event.target.value})}
			/> </div>

            <div className="col-span-full sm:col-span-2">
            <label for="firstname" className="block mb-1 ml-1">Delivery Cost</label>
			<input id="firstname" type="text"  required="" className="block w-full p-4   border-[#AF501A] rounded-xl focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"
				 value={FormData.cost} onChange={(event) => setFormData({...FormData, cost: event.target.value})}
			/></div>

<div  className='col-span-full sm:col-span-2'>
      <label for="Toggle1" className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100">
	{/* <span>Left</span> */}
	<span className="relative">
		<input id="Toggle1" type="checkbox" className="hidden peer" />
		<div className="w-10 h-6 rounded-full shadow-inner bg-gray-400 peer-checked:bg-[#FF7E20]"></div>
		<div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-white"></div>
	</span>
	<span>CLICK TO MAKE AVAILABLE</span>
</label>
</div>

<div  className='col-span-full'>
<button type="submit" className="px-8 py-3 font-semibold rounded bg-[#FF7E20] text-2xl md:text-xl text-white dark:bg-gray-100 dark:text-gray-800">Confirm</button>
</div>
       {/* <div className="col-span-full sm:col-span-2">
            <label for="zip" className="text-sm">ZIP / Postal</label>
            <input id="zip" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
        </div> */}
          </div>
        </fieldset>

      </form>
    </section>
    </div>
  )
}

export default AddProducts