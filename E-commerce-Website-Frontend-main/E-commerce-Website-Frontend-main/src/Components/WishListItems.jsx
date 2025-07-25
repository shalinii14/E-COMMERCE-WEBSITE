import React from 'react'
import { useDispatch } from 'react-redux'
import { removeProductFromWishlist } from '../Store/WishlistSlice';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const WishListItems = ({WishListObj}) => {

   let dispatch = useDispatch();

   let {thumbnail, price, title, id} = WishListObj

   let navigate = useNavigate();

    const handleNavigation = () => {
      navigate(`/product/${id}`)
    }
   

  return (
    <tr className=''>
        <th>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <Link onClick={handleNavigation}>
                <img
                  src={thumbnail}
                  alt="Avatar Tailwind CSS Component" />
                  </Link>
              </div>
            </div>
          </div>
        </td>
        <td>
         {title}
        </td>
        <td>$ {price}</td>
        <button onClick={()=> dispatch(removeProductFromWishlist(id))} className="btn btn-outline btn-error mt-3">Remove</button>
      </tr>
  )
}

export default WishListItems
