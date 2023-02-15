import React from 'react'

const Delivery = () => {
  return (
    <div className=' flex flex-col justify-center items-center'>
      <div className="flex flex-col max-w-md gap-2 p-6 justify-center dark:bg-gray-900 dark:text-gray-100">
	<h2 className="flex items-center gap-2  ml-14 text-2xl font-semibold leading-tight tracking-wide">
		D0 YOU MAKE YOUR OWN DELIVERIES?
	</h2>
	<div className="flex flex-col justify-center gap-3 mt-6 sm:flex-row">
		<button className="px-6 py-2 rounded-sm border-2 bg-border-grey-400 shadow-sm dark:bg-violet-400 dark:text-gray-900">NO</button>
		<button className="px-6 py-2 rounded-sm border-2 bg-border-grey-400 shadow-sm dark:bg-violet-400 dark:text-gray-900">YES</button>
	</div>
</div>
    </div>
  )
}

export default Delivery