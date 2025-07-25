import React, {useEffect, useState} from 'react'
import FoodCard from './FoodCard'

const FoodPage = () => {
  const [Recipes, setRecipes] = useState([])
    const [AllRecipes, setAllRecipes] = useState([])
    const [Search, setSearch] = useState([])

    const getData = async () => {
        const res =  await fetch("https://dummyjson.com/recipes");
        const data = await res.json();
        setRecipes(data.recipes);
        setAllRecipes(data.recipes);
    }

    useEffect(() => {
        getData();
    }, [])
    
  return (
    <div className='flex flex-wrap items-center justify-around m-5'>
      {
        Recipes.map((obj)=>{
            return (
                <FoodCard key={obj.id} data={obj}></FoodCard>
            )
        })
      }
    </div>
  )
}

export default FoodPage
