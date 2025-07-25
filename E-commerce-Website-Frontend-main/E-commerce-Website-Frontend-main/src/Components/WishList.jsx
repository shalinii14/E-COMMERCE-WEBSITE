import React, {useContext} from 'react'
import {ThemeStore} from './ThemeContext'
import { useSelector, useDispatch} from 'react-redux';
import WishListItems from './WishListItems';

const WishList = () => {
  let {Theme, setTheme} = useContext(ThemeStore);

  const wishlistData = useSelector((Store)=> Store.wishlist.wishlist);
  console.log("wishlist data", wishlistData);
  

  const dispatch = useDispatch();



  return (
    <div>
    <div>
      <div className={Theme == 'light' ? 'bg-slate-100 text-black min-h-screen' : 'bg-slate-900 text-slate-100 min-h-screen'}>
      <div className="overflow-x-auto">
  <table className="table">
    <thead className={Theme == 'light' ? 'text-black p-3' : 'text-slate-100'}>
      <tr>
        <th>
        </th>
        <th>Product</th>
        <th>Name</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      {
        wishlistData.map((obj)=> <WishListItems WishListObj={obj}></WishListItems>)
      }
    </tbody>
  </table>
    </div>
    </div>
    </div>
    </div>
  )
}

export default WishList

