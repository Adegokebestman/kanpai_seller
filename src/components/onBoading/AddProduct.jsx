import React from 'react'

const AddProduct = () => {
  return (
    <div>
      <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
      <form novalidate="" action="" className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">

          {/* <div className="col-span-full space-y-2">
                        <label for="bio" className="text-sm">Photo</label>

                    </div> */}

          <div className="space-y-2 col-span-full lg:col-span-1">
          <div className="flex items-center space-x-2">
						<img src="https://source.unsplash.com/30x30/?random" alt="" className="w-10 h-10 rounded-full dark:bg-gray-500 dark:bg-gray-700" />
						<button type="button" className="px-4 py-2 border rounded-md dark:border-gray-100">Change</button>
					</div>
        </div>

          <div className="grid grid-cols-4 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
            <label for="firstname" className="block mb-1 ml-1">Product Name</label>
			<input id="product" type="text"  required="" className="block w-full p-3   border-[#AF501A] rounded-xl focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"
				 value={FormData.product} onChange={(event) => setFormData({...FormData, product: event.target.value})}
			/> </div>
            {/* <div className="col-span-full sm:col-span-3">
              <label for="lastname" className="text-sm">Last name</label>
              <input id="lastname" type="text" placeholder="Last name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
            </div> */}
            <div className="col-span-full sm:col-span-3">
            <label for="firstname" className="block mb-1 ml-1">Product Description</label>
			<textarea id="firstname" type=""  required="" className="block w-full p-5 border-2 border-[#AF501A] rounded-xl focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"
				 value={FormData.firstname} onChange={(event) => setFormData({...FormData, firstname: event.target.value})}
			/>
      </div>

            <div className="col-span-full sm:col-span-2">
            <label for="firstname" className="block mb-1 ml-1">Unit Proce </label>
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

export default AddProduct