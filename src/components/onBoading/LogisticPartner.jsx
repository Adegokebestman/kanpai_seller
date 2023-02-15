import React from 'react'

const LogisticPartner = () => {
  return (
    <div className=' flex flex-col justify-center items-center'>
    <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
      <form novalidate="" action="" className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">

          <div className="grid grid-cols-4 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full ">
            <label for="firstname" className="block mb-1 ml-1">Product Name</label>
			<input id="product" type="text"  required="" className="block w-full p-3   border-[#AF501A] rounded-lg focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"
				 value={FormData.product} onChange={(event) => setFormData({...FormData, product: event.target.value})}
			/> </div>

<div className="col-span-full ">
            <label for="street" className="block mb-1 ml-1">Street, Street Address</label>
			<input id="product" type="text"  required="" className="block w-full p-3   border-[#AF501A] rounded-lg focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"
				 value={FormData.product} onChange={(event) => setFormData({...FormData, product: event.target.value})}
			/> </div>



            <div className="col-span-full sm:col-span-2">
            <label for="firstname" className="block mb-1 ml-1">Postal Code </label>
			<input id="firstname" type="text"  required="" className="block w-full p-4   border-[#AF501A] rounded-lg focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"
				 value={FormData.firstname} onChange={(event) => setFormData({...FormData, firstname: event.target.value})}
			/></div>

            <div className="col-span-full sm:col-span-2">
            <label for="firstname" className="block mb-1 ml-1">City/Country </label>
			<input id="firstname" type="text"  required="" className="block w-full p-4  border-[#AF501A] rounded-lg focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"
				 value={FormData.firstname} onChange={(event) => setFormData({...FormData, firstname: event.target.value})}
			/> </div>

<div className='col-span-full '>
<label for="firstname" className="block mb-1 ml-1">Payment Information </label>

        <input autoComplete="off" className="block w-full p-3   border-[#AF501A] rounded-lg focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"
        value="" onChange={(event) => setFormData({...FormData, name: event.target.value})}  />
</div>
<div className='col-span-full'>

<select class="form-select text-gray-600   mb-4  block w-full p-3 border-2  border-[#AF501A] rounded-lg ">
                <option className='text-gray-400'>Select Payment Method</option>
                <option>IBAN</option>
                <option>CARD</option>
                <option>PAYPAL</option>
              </select>
              </div>

          </div>

      </form>
    </section>
    </div>
  )
}

export default LogisticPartner