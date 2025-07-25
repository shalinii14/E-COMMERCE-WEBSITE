import React, { useContext } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import SingleProductShimmer from "./SingleProductShimmer";
import ProductsData from "../CustomHooks/ProductsData";
import { ThemeStore } from "./ThemeContext";
import Comments from './Comments'
import { useDispatch } from "react-redux";
import { addProductToWishlist } from "../Store/WishlistSlice";
import { removeProductFromWishlist } from "../Store/WishlistSlice";
import { addCart } from "../Store/CartSlice";
import ProductImages from "./ProductImagesCarousel";
import { useSelector } from "react-redux";

const ProductPage = () => {
  
  let dispatch = useDispatch()
  let {Theme} = useContext(ThemeStore)
  let { id } = useParams();

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
    
    let itemInWishList = ()=>{
    
    }
    
    
    const [WishList, setWishList] = useState(false)
    const [OpenIdx, setOpenIdx] = useState(null)
    
    let ProductData = ProductsData(id);
    
    if(ProductData == null){
      return <SingleProductShimmer></SingleProductShimmer>
    }
    
    let { title, category, price, thumbnail, rating , reviews, brand, weight, returnPolicy, images, description, warrantyInformation
    } = ProductData;


  
    const toggleWishList = () => {
      setWishList(!WishList)
      if(WishList){
        dispatch(removeProductFromWishlist(id));
      }else{
        dispatch(addProductToWishlist(ProductData));
      }
    }
  return (
    <>
    <div className={Theme == 'light' ? 'bg-slate-100 min-h-screen w-full p-6 text-black ' : 'bg-slate-800 min-h-screen w-full p-6 text-white'}>
      <div className="flex lg:justify-start flex-col-reverse items-center justify-center lg:flex-row flex-wrap lg:flex-nowrap">
        {
          <ProductImages img={images}></ProductImages>
        }
      <div className={ Theme == 'light' ? 'card lg:card-side bg-slate-100 w-full  lg:w-1/2 m-auto  text-black h-1/2' : "card lg:card-side bg-slate-900 w-full lg:w-1/2 m-auto  text-white h-1/2"}>
      
      <div className={Theme == 'light' ? "border-x border-black w-1/2 p-5 lg:p-10" : "border-x border-white w-1/2 p-5 lg:p-10" }>
      {
        itemInCart() == true ? <div className={Theme == 'light' ? "bg-slate-600 text-white lg:px-1 lg:py-4 py-2 w-full px-10 rounded-3xl lg:w-36 flex items-center justify-center" : "bg-slate-300 text-black lg:px-1 lg:py-4 py-2 px-10 rounded-3xl w-full  lg:w-36 flex items-center justify-center"}>Added To Cart</div> : ""
      }
        <figure>
          <img
            src={thumbnail}
            alt={title}
          />
        </figure>
        </div>
        <div className="card-body flex justify-center items-start  flex-col">
          <h2 className="card-title text-1xl">{title}</h2>
          <p>Category: {category}</p>
          <p>Price: ${price}</p>
          <p>Rating: {rating}</p>
          {/* <input type="number" id="quantity" className="bg-slate-50 p-2 h-8 w-16 border border-black flex items-center rounded-md"/> */}
          <div className="card-actions justify-end flex items-center">
            <button onClick={()=> dispatch(addCart(ProductData))} className={ Theme == 'light' ?  "btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-active lg:btn-wide" : "btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-outline lg:btn-wide"}>Add to Cart</button>
            {WishList == false ? <svg onClick={toggleWishList}  className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"></path></svg>: <svg  className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(236,15,15,1)"><path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853Z"></path></svg>}
          </div>
          </div>
        </div>
      </div>
      <div className={Theme == 'light' ? 'bg-slate-400 hw-full p-10 h-1/2 mt-5 text-black' : 'bg-slate-900  hw-full p-10 h-1/2 mt-5 text-white'}>
        <h4 className="text-3xl font-bold text-center mt-4 mb-3">Product Description</h4>
        <p className={Theme == 'light' ?  "text-xl text-center m-auto my-4 text-black" : "text-xl text-center m-auto my-4 text-white" }>{description}</p>
        <hr />
        <div className="mt-4">
          <p className="text-lg">Brand : {brand}</p>
          <p className="text-lg">Weight : {weight}</p>
          <p className="text-lg">Return Policy : {returnPolicy}</p>
          <p className="text-lg">Warranty Information : {warrantyInformation}</p>
        </div>
      </div>
      <div className={Theme == 'light' ? 'bg-slate-400 hw-full p-10 h-1/2 mt-5 text-black' : 'bg-slate-900  hw-full p-10 h-1/2 mt-5 text-white'}>
        <h4 className="text-3xl font-bold text-center mt-4 mb-3">Comment & Review Section</h4>
        <hr />
        {
          reviews.map((review, idx)=>{
            return <Comments reviews={review} OpenIdx={OpenIdx} setOpenIdx={setOpenIdx} idx={idx}></Comments>
          })
        }
      </div>
    </div>
    </>
  );
};

export default ProductPage;
