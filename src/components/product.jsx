import React, { useContext } from "react";
import { BsPlusLg } from "react-icons/bs";
import { FaMinus } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Order.css";
import CartContext from "../contexts/Cart/CartContext";

const Product = ({ product }) => {
  const { addToCart, increase, cartItems, sumItems, itemCount } =  useContext(CartContext);

  //Check whether the product is in the cart or not
  const isInCart = (product) => {
    return !!cartItems.find((item) => item.id === product.id);
  };

  return (
    <ul className="flex container flex-row bg-white text-center boxShadow  dark:text-gray-200 dark:bg-secondary-dark-bg md:w-full h-32 p-4 rounded-2xl">
      <li className="flex-item pr-2 md:pr-4">
        <img src={product.image} />
      </li>
      <li className="mr-2 mt-4 md:mr-8 md:mt-8"> {product.available}</li>

      <li className="pt-4 leading-5 mr-2 md:font-medium  md:p-8 md:mr-8">
        {product.name} <br />
        {/* <span className="status"> Available {product.quantity} </span> */}
      </li>

      <li className="ml-2 mr-3 md:ml-8 md:mr-16 mt-8 md:font-medium"> {product.price} </li>

      <li className="ml-2 mr-3 md:ml-8 md:mr-16 mt-8 md:font-medium"> {product.quantity} </li>

      <span className="rounded-full border-white bg-[#D0F4D0] text-[#147D30] mt-6 mr-5 pt-2 pb-4 pr-2 pl-2 mb-8
      md:mt-8 md:pt-2 md:mr-10 md:mb-8 md:pb-8 md:pr-4 md:pl-4 md:rounded-full ">
        {product.status}
      </span>


        {isInCart(product) && (
          <button
            onClick={() => {
              increase(product);
            }}
            className="cartBtn2 rounded text-sm md:text-lg"
          >
            {/* Add More */} Make Unavailable
          </button>
        )}

      {!isInCart(product) && (
        <button onClick={() => addToCart(product)} className="cartBtn2 rounded text-sm md:text-xl">
          Make Unavailable
        </button>
      )}
    </ul>
  );
};

export default Product;
