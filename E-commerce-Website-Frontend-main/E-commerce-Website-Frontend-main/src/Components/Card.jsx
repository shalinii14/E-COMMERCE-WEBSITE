import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { ThemeStore } from "./ThemeContext";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../Store/CartSlice";

const Card = ({Obj}) => {
  let dispatch = useDispatch()
  let { title, category, price, thumbnail, rating , id} = Obj;
  let {Theme} = useContext(ThemeStore)

  
  const cartData = useSelector((Store)=> Store.cart.cart)

  let itemInCart = () => {
    let idx = cartData.findIndex((cartObj)=> {
      return cartObj.data.id == id
    })

    if(idx == -1){
      return false
    }else{
      return true
    }
  }


  let navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/product/${id}`)
  }

  const handleAddCart = (event) => {
    event.stopPropagation()
    dispatch(addCart(Obj))
  }

  return (
    <div>
      <div className={ Theme == 'light' ? 'card bg-slate-100 lg:w-72 m-2 text-black cursor-pointer border-x-4 rounded-md' :  "card bg-slate-800 w-72 m-2 text-white cursor-pointer rounded-md"} onClick={handleNavigation}>
      {
        itemInCart() ? <div className={Theme == 'light' ? "bg-slate-600 text-white px-1 py-3 rounded-3xl w-36 flex items-center justify-center" : "bg-slate-300 text-black px-1 py-3 rounded-3xl w-36 flex items-center justify-center"}>Added To Cart</div> : ""
      }
      
        <div className="">
        <figure>
          <img
            src={thumbnail}
            alt={title}
            width={250}
          />
        </figure>
        </div>
        <div className={Theme == "light" ? "card-body w-full bg-slate-200" : "card-body w-full bg-slate-700"}>
          <div className={Theme == 'light' ? "flex flex-col justify-center items-center" : "flex flex-col justify-center items-center"}>
          <p className="card-title text-center text-sm">{title}</p>
          <p>Category: {category}</p>
          <p>Price: ${price}</p>
          <p>Rating: {rating}/5</p>
          <div className="card-actions justify-end">
            <button className={ Theme == 'light' ?  "btn btn-active mt-3" : "btn btn-outline mt-3"} onClick={handleAddCart}>Add to Cart</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
