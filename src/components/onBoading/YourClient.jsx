import React from 'react'

const YourClient = () => (
  <div>
<section className="justify-center flex  dark:text-gray-100">
	<form novalidate="" className=" w-full max-w-xl pl-20 pr-20 mx-auto space-y-6 dark:bg-gray-900 ng-untouched ng-pristine ng-valid">
		<div>
			<label for="firstname" className="block mb-1 ml-1">First Name</label>
			<input id="firstname" type="text"  required="" className="block w-full p-2   border-[#AF501A] rounded-lg focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"
				 value={FormData.firstname} onChange={(event) => setFormData({...FormData, firstname: event.target.value})}
			/>
		</div>

		<div>
			<label for="lastname" className="block mb-1 ml-1"> Name</label>
			<input id="lastname" type="text" required="" className="block w-full p-2   border-[#AF501A] rounded-lg focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"
				 value={FormData.lastname} onChange={(event) => setFormData({...FormData, lastname: event.target.value})}
			/>
		</div>

		<div>
			<label for="text" className="block mb-1 ml-1">Product Of Interest</label>
			<input id="text" type="text"  required="" className="block w-full p-2  border-[#AF501A]  rounded-lg focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"
				 value={FormData.product} onChange={(event) => setFormData({...FormData, email: event.target.value})}
			/>
		</div>

    <div>
			<label for="email" className="block mb-1 ml-1">Address</label>
			<input id="email" type="email"  required="" className="block w-full p-2  border-[#AF501A]  rounded-lg focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"
				 value={FormData.email} onChange={(event) => setFormData({...FormData, email: event.target.value})}
			/>
		</div>

		<div>
			<label for="phone" className="block mb-1 ml-1">Phone</label>
			<input id="phone" type="tel"  required="" className="block w-full p-2  border-[#AF501A]  rounded-lg focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"
				 value={FormData.phone} onChange={(event) => setFormData({...FormData, phone: event.target.value})}
			/>
		</div>

    <div>
			<label for="email" className="block mb-1 ml-1">Email</label>
			<input id="email" type="email"  required="" className="block w-full p-2  border-[#AF501A]  rounded-lg focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"
				 value={FormData.email} onChange={(event) => setFormData({...FormData, email: event.target.value})}
			/>
		</div>

		{/* <div>
			<button type="submit" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-violet-400 focus:ring-violet-400 hover:ring-violet-400 dark:text-gray-900">Send</button>
		</div> */}
	</form>
</section>

  </div>
)

export default YourClient