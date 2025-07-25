import React , {useState, useEffect, useContext} from 'react'
import Card from './Card'
import Shimmer from './Shimmer';
import { ThemeStore } from './ThemeContext';
import About from './About';
import Hero from './Hero';

const Home = () => {
    
    const [Products, setProducts] = useState(null);
    const [AllProducts, setAllProducts] = useState(null);
    const [Search, setSearch] = useState('');
    
    let {Theme, setTheme} = useContext(ThemeStore);

    const getData = async () => {
      let data = await fetch('https://dummyjson.com/products?limit=40');
      let productsData = await data.json();
      console.log(productsData);
      
      setProducts(productsData.products);
      setAllProducts(productsData.products);
    }
    
    useEffect(() => {
        getData()
    }, [])


    const topRated = () => {
      let topRatedItems = AllProducts.filter((items)=>{
        return items.rating >= 4
      });
      setProducts(topRatedItems);
    }

    const handleCategory = (c) => {
      let fillItems = AllProducts.filter((items)=>{
        return items.category === c
      })
      setProducts(fillItems);
    }
    
    const searchBtn = () => {
      let fillData = AllProducts.filter((obj)=>{
            return obj.thumbnail.toLowerCase().includes(Search.toLowerCase().trim());
          })
          setProducts(fillData);
          setSearch('')
    }
    
    return (
    <div className={Theme == 'light' ? 'bg-slate-100' : 'bg-slate-900'}>
            <div className="search flex w-full lg:w-2/5 m-1 lg:m-auto pt-3">
                <input value={Search} onChange={(e)=> {setSearch(e.target.value)}}  type="text"placeholder="Type here" className="input input-bordered w-full max-w-lg"/>
                <button onClick={searchBtn} className={ Theme == 'light' ?  "btn btn-active mx-3" : "btn btn-outline mx-3"} >Search</button>
            </div>
      {
        Products == null ? "" : <Hero productsData={AllProducts}></Hero>
      }
      
      <div className='flex justify-between items-center w-full py-5'>
      <h3 className={Theme == "light" ? 'text-sm lg:text-3xl text-center ml-4 text-black' : 'text-sm lg:text-3xl text-center ml-4 text-white'}>Filters</h3>
        <div className='flex justify-around'>
            <button onClick={topRated}  className={ Theme == 'light' ?  "btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-active mx-1 lg:mx-4" : "btn btn-xs sm:btn-sm md:btn-md lg:btn-lg  btn-outline  mx-1 lg:mx-4"} >Top Rated</button>
            <button onClick={()=> {handleCategory('furniture')}} className={ Theme == 'light' ?  "btn btn-xs sm:btn-sm md:btn-md lg:btn-lg  btn-active mx-1 lg:mx-4" : "btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-outline mx-1 lg:mx-4"} >Furniture</button>
            <button  onClick={() => {handleCategory("beauty")}} className={ Theme == 'light' ?  "btn btn-xs sm:btn-sm md:btn-md lg:btn-lg  btn-active mx-1 lg:mx-4" : "btn btn-xs sm:btn-sm md:btn-md lg:btn-lg  btn-outline mx-1 lg:mx-4"} >Beauty</button>
            <button  onClick={() => {handleCategory("groceries")}}className={ Theme == 'light' ?  "btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-active mx-1 lg:mx-4" : "btn btn-xs sm:btn-sm md:btn-md lg:btn-lg  btn-outline mx-1 lg:mx-4"} >Groceries</button>
        </div>
        </div>
        <h1 className={Theme == "light" ? 'text-sm lg:text-3xl text-center mb-4 text-black' : 'text-sm lg:text-3xl text-center mb-4 text-white'}>Our Latest Deals This Week</h1>
        <div className='flex justify-around items-center flex-wrap m-2 lg:m-4'>
              {
                Products == null ? <Shimmer></Shimmer>:
                Products.map((obj)=>{
                  return <Card key={obj.id}  Obj={obj}/>
                })
              }
        </div>
        <About></About>
    </div>
  )
}

export default Home
