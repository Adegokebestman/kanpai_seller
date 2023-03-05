import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {IoIosArrowBack} from 'react-icons/io';
import {BsCamera} from 'react-icons/bs';
import axios from '../api/axios';


const CREATEPRODUCT = '/create/CreateNewProduct';
const AddProducts = () => {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [available, setAvailable] = useState('');
  const [description, setDescription] = useState('');
  const [minOrderAmount, setMinOrderAmount] = useState('');
  const [status, setStatus] = useState(false);
  const [image, setImage] = useState('');
  const [productImagePreview, setProductImagePreview] = useState('');

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleAvailableChange = (event) => {
    setAvailable(event.target.value);
  };


  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.checked);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleMinOrderAmountChange = (event) => {
    setMinOrderAmount(event.target.value);
  };




  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
    setProductImagePreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData =  new FormData()
       formData.append("productName", productName)
       formData.append("price", price)
       formData.append("available", available)
       formData.append("description", description)
       formData.append("minOrderAmount", minOrderAmount)
       formData.append("status", status)
       formData.append("image", image)



    const token = localStorage.getItem('accessToken');
console.log(formData);
    try {
      const response = await axios.post(CREATEPRODUCT, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      alert("Item created")
      // Reset Data
      productName('');
      price('');
      available('');
      description('');
      minOrderAmount('');
      status('');
      image('');
    } catch (error) {
      console.error(error);
    }
  };


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
      <form onSubmit={handleSubmit} novalidate="" action="" className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
        <fieldset className="grid grid-cols-4 gap-6 p-6 dark:bg-gray-900">

          {/* <div className="col-span-full space-y-2">
                        <label for="bio" className="text-sm">Photo</label>

                    </div> */}

          <div className="space-y-2 col-span-full lg:col-span-1">
          <div className=''>
          {productImagePreview && (
          <img src={productImagePreview} alt="Product Preview" style={{ maxWidth: '200px' }} className="w-32 h-32 mx-auto border rounded-full dark:bg-gray-500 aspect-square" />
        )}

  <div className=' border bg-white  w-10 h-10 p-2 ml-40 camera -mt-10  text-black rounded-full'>
  <label htmlFor="image"><BsCamera className='text-2xl' /></label>
        <input style={{display: 'none'}}
          type="file"
          id="image"
          accept="image/*"
          onChange={handleImageChange}
        />

           {/* <input style={{display:'none'}} type='file' id='productImage'  accept="image/*" value={productImage} onChange={handleImageChange} />
                    <label htmlFor='productImage'>
                    <BsCamera className='text-2xl'/>
                    </label>
                    {productImagePreview && (
                      <img src={productImagePreview} alt="Product image" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
)} */}
              </div>
 {/* <div className='w-14 h-14 bg-[#FF7E20] relative rounded-full'>
  <BsCamera className='text-2xl ml-24 camera'/>
  </div> */}
  </div>
        </div>

          <div className="grid grid-cols-4 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
            <label for="productName" className="block mb-1 ml-1">Product Name</label>
			<input id="productName" type="text"  required="" className="block w-full p-3   border-[#AF501A] rounded-xl focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"
				 value={productName} onChange={handleProductNameChange}
			/> </div>

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
            <label for="amountAvailable" className="block mb-1 ml-1">Amount Available </label>
			<input id="amountAvailable" type="number"  required="" className="block w-full p-4   border-[#AF501A] rounded-xl focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"
				 value={available} onChange={handleAvailableChange}
			/> </div>

            <div className="col-span-full sm:col-span-2">
            <label for="firstname" className="block mb-1 ml-1">Minimum Order Amount</label>
			<input id="firstname" type="number"  required="" className="block w-full p-4   border-[#AF501A] rounded-xl focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"
				 value={minOrderAmount} onChange={handleMinOrderAmountChange}
			/> </div>

            <div hidden className="col-span-full sm:col-span-2">
            <label for="delivery" className="block mb-1 ml-1">Delivery Cost</label>
			<input id="delivery" type="text"  required="" className="block w-full p-4   border-[#AF501A] rounded-xl focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"

			/></div>

<div  className='col-span-full sm:col-span-4'>
      <label for="Toggle1" className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100">
	{/* <span>Left</span> */}
	<span className="relative">
		<input id="Toggle1" checked={status} onChange={handleStatusChange} type="checkbox" className="hidden peer" />
		<div className="w-10 h-6 rounded-full shadow-inner bg-gray-400 peer-checked:bg-[#FF7E20]"></div>
		<div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-white"></div>
	</span>
	<span>CLICK TO MAKE AVAILABLE</span>
</label>
</div>

<div  className='col-span-full'>
<button type="submit" className="px-8 py-3 font-semibold rounded bg-[#FF7E20] text-2xl md:text-xl text-white dark:bg-gray-100 dark:text-gray-800">Confirm</button>
</div>

          </div>
        </fieldset>

      </form>
    </section>
    </div>
  )
}

export default AddProducts