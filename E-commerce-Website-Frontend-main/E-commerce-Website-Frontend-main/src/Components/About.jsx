import React from 'react'
import { ThemeStore } from './ThemeContext'

const About = () => {
  const theme = React.useContext(ThemeStore)


  return (
    <div>
      <div className={theme == "light" ? 'bg-slate-200 h-96 w-full text-black flex justify-center items-center flex-col' :
        'bg-slate-700 h-96 w-full text-white flex justify-center items-center flex-col'
      }>
      <h1 className='text-5xl'>About</h1>
      <hr />
      <p className='text-2xl w-1/2 mt-5 text-center'>Welcome to <span className='font-bold'>Shopify</span>, your one-stop shop for all your products of daily needs. We are committed to providing you with the best shopping experience, offering a wide selection of high-quality products at competitive prices. Whether you're looking for the latest trends or timeless classics, we've got something for everyone.
      </p>
      </div>
    </div>
  )
}

export default About
