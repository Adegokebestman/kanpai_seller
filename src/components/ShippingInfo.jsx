import React from 'react';


function ShippingInfo ({FormData, setFormData}) {

  return (
    <div className='ship flex flex-col justify-center items-center'>
 <input  placeholder='Contact Info (Name & Surname)' type= ''  className="text-gray-600 dark:text-gray-400 focus:outline-none  dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-3/4 md:w-2/4 mb-4 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
 value={FormData.name} onChange={(event) => setFormData({...FormData, name: event.target.value})} />


 <input  placeholder='Street, Street Number' autoComplete="off" className="text-gray-600 dark:text-gray-400 focus:outline-none  dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-3/4 md:w-2/4 mb-4 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
 value={FormData.street} onChange={(event) => setFormData({...FormData, street: event.target.value})} />

 <input  placeholder='City, Postal Code, Country Info' autoComplete="off" className="text-gray-600 dark:text-gray-400 focus:outline-none  dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-3/4 md:w-2/4 mb-4 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
 value={FormData.city} onChange={(event) => setFormData({...FormData, city: event.target.value})}  />

 <input type='email' placeholder='Enter Email' autoComplete="on" className="text-gray-600 dark:text-gray-400 focus:outline-none  dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-3/4 md:w-2/4 mb-4 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
    value={FormData.email} onChange={(event) => setFormData({...FormData, email: event.target.value})}
 />

    </div>
  )
}

export default ShippingInfo