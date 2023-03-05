import React, {useState} from 'react'

const CREATEPRODUCT = '/register/CreateNewProduct';
const AddProduct = () => {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [available, setAvailable] = useState('false');
  const [amountAvailable, setAmountAvailable] = useState('')
  const [description, setDescription] = useState('');
  const [minOrderAmount, setMinOrderAmount] = useState('');
  const [status, setStatus] = useState('');
  const [productImage, setProductImage] = useState('');

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleAmountAvailable = (event) => {
    setAmountAvailable(event.target.value);
  };


  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleAvailableChange = (event) => {
    setAvailable(event.target.checked);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleMinOrderAmountChange = (event) => {
    setMinOrderAmount(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleProductImageChange = (event) => {
    setProductImage(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      productName,
      price,
      available,
      description,
      minOrderAmount,
      status,
      productImage,
    };
    axios.post(CREATEPRODUCT, data, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => {
        console.log('Product created successfully:', response.data);
        // Reset the form inputs
        setProductName('');
        setPrice('');
        setAvailable(false);
        setDescription('');
        setMinOrderAmount('');
        setStatus('');
        setProductImage('');
      })
      .catch((error) => {
        console.error('Error creating product:', error);
      });
  };

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
            <label for="productName" className="block mb-1 ml-1">Product Name</label>
			<input id="productName" type="text"  required="" className="block w-full p-3   border-[#AF501A] rounded-xl focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"
				 value={productName} onChange={handleProductNameChange}
			/> </div>
            {/* <div className="col-span-full sm:col-span-3">
              <label for="lastname" className="text-sm">Last name</label>
              <input id="lastname" type="text" placeholder="Last name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
            </div> */}
            <div className="col-span-full sm:col-span-3">
            <label for="description" className="block mb-1 ml-1">Product Description</label>
			<textarea id="description" type=""  required="" className="block w-full p-5 border-2 border-[#AF501A] rounded-xl focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"
				 value={description} onChange={handleDescriptionChange}
			/>
      </div>

            <div className="col-span-full sm:col-span-2">
            <label for="price" className="block mb-1 ml-1">Unit Price </label>
			<input id="price" type="number"  required="" className="block w-full p-4   border-[#AF501A] rounded-xl focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"
				value={price} onChange={handlePriceChange}
			/></div>

            <div className="col-span-full sm:col-span-2">
            <label for="firstname" className="block mb-1 ml-1">Amount Available </label>
			<input id="firstname" type="text"  required="" className="block w-full p-4   border-[#AF501A] rounded-xl focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"
				 value={amountAvailable} onChange={handleAmountAvailable}
			/> </div>

            <div className="col-span-full sm:col-span-1">
            <label for="minOrder" className="block mb-1 ml-1">Minimum Order Amount</label>
			<input id="minOrder" type="number"  required="" className="block w-full p-4   border-[#AF501A] rounded-xl focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"
				 value={minOrderAmount} onChange={handleMinOrderAmountChange}
			/> </div>


          </div>
        </fieldset>

      </form>
    </section>
    </div>
  )
}

export default AddProduct