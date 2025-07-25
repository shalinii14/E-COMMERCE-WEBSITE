import React from 'react'
import { useDispatch } from 'react-redux'
import { removeCart } from '../Store/CartSlice'
import { quantityIncrease } from '../Store/CartSlice'
import { quantityDecrease } from '../Store/CartSlice'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Cartitems = ({cartObj}) => {

  let dispatch = useDispatch()

    let {quantity , data } = cartObj

    let {thumbnail , title, price, id } = data

    let navigate = useNavigate();

    const handleNavigation = () => {
      navigate(`/product/${id}`)
    }

  return (
    <>
        <tr className=''>
        <th>
        </th>
        <td>
          <div className="flex items-center  gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <Link onClick={handleNavigation}><img
                  src={thumbnail}
                  alt="Avatar Tailwind CSS Component" /></Link>
              </div>
            </div>
          </div>
        </td>
        <td className='overflow-ellipsis text-sm'>
         {title}
        </td>
        <td>$ {quantity > 1 ? Math.trunc(price * quantity ): price }</td>
        <td><span className='mx-1 cursor-pointer' onClick={()=> dispatch(quantityIncrease(id))}>➕</span>{quantity}<span className='mx-1 cursor-pointer' onClick={()=> dispatch(quantityDecrease(id))}>➖</span></td>
        <button onClick={()=> dispatch(removeCart(id))} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-outline btn-error my-3">Remove</button>
      </tr>
      </>
  )
}

export default Cartitems
