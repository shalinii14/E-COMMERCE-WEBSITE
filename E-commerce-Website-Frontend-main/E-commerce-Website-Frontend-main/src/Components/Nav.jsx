import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeStore } from "./ThemeContext";
import { useSelector } from "react-redux";
import '../CSS for Components/navbar.css'
import {baseUrl, logoutUrl} from "../Utility/Constant"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteUser } from "../Store/UserSlice";

const Navbar = () => {
  const { Theme, setTheme } = useContext(ThemeStore);

  let darkTheme = "navbar bg-slate-950";
  let lightTheme = "navbar bg-slate-300 text-black flex items-center";

  let navigate = useNavigate();
  let dispatch = useDispatch();

  let changeTheme = () => {
    setTheme(Theme == 'light' ? 'dark' : 'light');
  }

  const handleLogout = async () => {
    try{
      let res = await axios.post(baseUrl+logoutUrl, {}, {withCredentials:true})
      let data = res.data;
  
      if(data.result == true){
        dispatch(deleteUser());
        navigate('/login');
      }
    }catch(err){
      console.log(err);
    }
  }
  

  const wishlistData = useSelector((Store)=> Store.wishlist.wishlist);

  console.log(wishlistData);
  
  const cartData = useSelector((Store)=> Store.cart.cart)
  console.log(cartData);
  

  return (
//     <div id="navbar">
//       <div className={Theme == 'light' ? lightTheme : darkTheme}>
//         <div className="flex-1">
//           <Link to={"/"} className="btn btn-ghost text-3xl text-navColor font-medium">
//           <img src="/images/shopping-cart.png" alt="Logo" width={40} />
//             SHOPIFY
//           </Link>
//         </div>
//         <div className="sm:flex-row  md:flex-none">
//           <ul className="menu menu-horizontal px-1">
//             <li>
//               <Link to={"/food"}>Food</Link>
//             </li>
//             <li>
//               <Link to={"/profile"}>Profile</Link>
//             </li>
//             <li>
//               <Link to={"/wishlist"}>WishList<sup className="text-sm">{wishlistData.length}</sup></Link>
//             </li>
//             <li>
//               <Link to={"/cart"}>Cart<sup className="text-sm">{cartData.length}</sup></Link>
//             </li>
//             <label className="grid cursor-pointer place-items-center">
//   <input
//   onClick={changeTheme}
//     type="checkbox"
//     value="synthwave"
//     className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1" />
//   <svg
//     className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
//     xmlns="http://www.w3.org/2000/svg"
//     width="14"
//     height="14"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round">
//     <circle cx="12" cy="12" r="5" />
//     <path
//       d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
//   </svg>
//   <svg
//     className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
//     xmlns="http://www.w3.org/2000/svg"
//     width="14"
//     height="14"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round">
//     <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
//   </svg>
// </label>
// <li><button onClick={handleLogout} className="btn btn-sm btn-outline btn-error ml-2">Logout</button></li>
//           </ul>
//         </div>
//       </div>
//     </div>
<div className={Theme == 'light' ? lightTheme : darkTheme}>
<div className="navbar-start">
  <div className="dropdown">
    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h8m-8 6h16" />
      </svg>
    </div>
    <ul
      tabIndex={0}
      className={Theme == 'light' ? "menu menu-sm dropdown-content bg-slate-300 text-black rounded-box z-[1] mt-3 w-52 p-2 shadow" : "menu menu-sm dropdown-content bg-slate-900 text-white rounded-box z-[1] mt-3 w-52 p-2 shadow"}>
    <li>
              <Link to={"/food"}>Food</Link>
            </li>
           <li>
             <Link to={"/profile"}>Profile</Link>
            </li>
            <li>
             <Link to={"/wishlist"}>WishList<sup className="text-sm">{wishlistData.length}</sup></Link>
           </li>
            <li>
             <Link to={"/cart"}>Cart<sup className="text-sm">{cartData.length}</sup></Link>
            </li>
    </ul>
  </div>
  <Link to={"/"} className="btn btn-ghost text-md md:text-3xl text-navColor font-medium">
          <img src="images\logo.jpg" alt="Logo-img" className="w-8 md:w-12 text-sm"/>
            SHOPIFY
          </Link>
</div>
<div className="navbar-center hidden lg:flex">
  <ul className="menu menu-horizontal px-1">
  <li>
              <Link to={"/food"}>Food</Link>
           </li>
            <li>
              <Link to={"/profile"}>Profile</Link>
            </li>
             <li>
               <Link to={"/wishlist"}>WishList<sup className="text-sm">{wishlistData.length}</sup></Link>
            </li>
             <li>
              <Link to={"/cart"}>Cart<sup className="text-sm">{cartData.length}</sup></Link>
            </li>
  </ul>
</div>
<div className="navbar-end">
<label className="grid cursor-pointer place-items-center">
  <input
  onClick={changeTheme}
    type="checkbox"
    value="synthwave"
    className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1" />
  <svg
    className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <path
      d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
  </svg>
  <svg
    className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
</label>
  <button onClick={handleLogout} className="btn btn-sm btn-outline btn-error mx-2 md:mx-4">Logout</button>
</div>
</div>
  );
};

export default Navbar;
