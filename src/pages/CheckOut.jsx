import React from "react";
import { useState } from 'react';
import ShippingInfo from '../components/ShippingInfo';
import UserPayment from '../components/UserPayment';
import "../components/CheckOut.css";
import {TbCalendarTime} from 'react-icons/tb';
import SupplierInfo from "../components/onBoading/SupplierInfo";
import YourClient from "../components/onBoading/YourClient";
import AddProduct from "../components/onBoading/AddProduct";
import PaymentInfo from "../components/onBoading/PaymentInfo";
import ShippingAddress from "../components/onBoading/ShippingAddress";
import Delivery from "../components/onBoading/Delivery";
import LogisticPartner from "../components/onBoading/LogisticPartner";

export default function MyModal({visible, onClose}) {

  const [page, setPage] = useState(0);

    const FormTitles = ["Supplier's Info", "Add Product to your Catalogue", "Your Client", "Payment Information", "Shipping Address", "Delivery info", "Your Logistic Partner"];

    const setTime = ["Preferred Time & Date"]

    const DetailsTitles = ["Use Default Info", "Use Account Information"]

    const [FormData, setFormData] = useState({
      name: "",
      street: "",
      city: "",
      email: "",
      surname: "",
      companyname : "",
      billingaddress: ""

    });

    const PageDisplay = () => {
if (page === 0) {
return  <SupplierInfo FormData={FormData} setFormData={setFormData} />
} else if (page === 1) {
  return <AddProduct FormData={FormData} setFormData={setFormData} />
}
else if (page === 2) {
  return <YourClient FormData={FormData} setFormData={setFormData} />
}
else if (page === 3) {
  return <PaymentInfo FormData={FormData} setFormData={setFormData} />
} else if (page === 4) {
  return <ShippingAddress FormData={FormData} setFormData={setFormData} />
}
else if (page === 5) {
  return <Delivery FormData={FormData} setFormData={setFormData} />
} else if (page === 6) {
  return <LogisticPartner FormData={FormData} setFormData={setFormData} />
}

    }

  const handleOnClose = (e) => {
    if(e.target.id  === "container")
    onClose();
  }
  if(!visible) return null;

  return (
    <div id="container" onClick={handleOnClose} className="absolute md:fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white p-2 rounded w-3/4 md:w-2/4">
     <div className=" flex flex-col justify-center items-center">
      <div className='progressbar mt-4 flex max-w-xs space-x-3 '>

          <div style={{width: page === 0 ? "10%"  : "20%"}}> </div>
        </div>




        <h1 className="font-semibold text-center  mb-4 text-xl md:text-2xl text-[#5B5856]">
        {FormTitles[page]}
        </h1>
        {/* <div className="px-10 py-2 flex flex-col  font-semibold text-xl md:text-2xl ">
      <span className="text-[#FF7E20] md:px-4 flex justify-between md:py-2 bg-[#FFF1E8]">

       <TbCalendarTime className="mr-4"/>
         { setTime[page]}</span>
        </div> */}
        {/* USE DEFAULT INFO */}
        {/* <button className='cartBtn  text-lg md:text-xl px-10'> {DetailsTitles[page]} </button> */}
        </div>
        {/* <div className="date text-orange-400 ">
    <span className="">
 <h1 className="border-8 border-orange-200"> Prefered Date & Time</h1>
    </span>

        </div> */}

<div className='form-container flex flex-col'></div>
{/* <div className='header'>
    <h1 className="text-center">{FormTitles[page]}</h1>
</div> */}
<div className='body formbody'>
{PageDisplay()}
</div>
<div className='footer flex mt-8 mb-8 justify-center items-center'>
<button className="px-5 py-2 mr-8 bg-[#FF7E20]  text-white rounded" disabled={page === 0} onClick={() => {setPage((currPage) => currPage -1);}}>prev</button>

    <button className="px-5 py-2 formbtn text-white rounded" onClick={() => {
      if( page == FormTitles.length -1) {
      alert("form submitted")
    }
    else {
      setPage((currPage) => currPage +1);
    }
      }}
      >
      {page === FormTitles.length -1 ? "submit" : "Next"}
    </button>

</div>

        <div className="text-center">
          {/* <button className="px-5 py-2 bg-gray-700 text-white rounded">
            Sign in
          </button> */}
        </div>
      </div>
    </div>
  );
}