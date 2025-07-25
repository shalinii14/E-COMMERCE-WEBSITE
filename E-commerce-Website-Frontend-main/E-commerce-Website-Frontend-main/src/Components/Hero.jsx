import React, {useContext} from 'react'
import { Link} from 'react-router-dom'
import { ThemeStore } from './ThemeContext'


const Hero = ({productsData}) => {

  const {Theme} = useContext(ThemeStore)

    let {id} = productsData;

    let thumbnailArray = []

    productsData.map((product) => {
        thumbnailArray.push(product.thumbnail)
    });

  return (
    <div className='lg:flex justify-around items-center m-4 hidden'>
        <div className=' w-full md:w-1/2 h-20 md:h-72 bg-[url("/images/hero-sale.jpg")] bg-cover bg-center bg-no-repeat '>
        </div>
        <div className="carousel carousel-center cursor-pointer">

  <div className="carousel-item relative">
  <Link to={`/product/${10}`}><img src={thumbnailArray[9]} alt="Pizza"/></Link>
        <div className='absolute left-10 top-32 bg-red-500 text-white'>On 75% Discount</div>
  </div>
  <div className="carousel-item relative cursor-pointer">
      <Link to={`product/${15}`}><img src={thumbnailArray[14]} alt="Pizza"/></Link>
      <div className='absolute left-10 top-32 bg-red-500 text-white'>On 50% Discount</div>
  </div>
  <div className="carousel-item relative cursor-pointer">
    <Link to={`product/${8}`}>
    <img
      src={thumbnailArray[7]}
      alt="Pizza" />
    </Link>
      <div className='absolute left-10 top-32 bg-red-500 text-white'>On 25% Discount</div>
  </div>
  </div>
    </div>
  )
}

export default Hero
