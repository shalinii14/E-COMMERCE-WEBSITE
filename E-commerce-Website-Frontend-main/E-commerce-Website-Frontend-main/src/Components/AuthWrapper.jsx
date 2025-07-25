import React,{useEffect, useState} from 'react'
import { getUserUrl, baseUrl } from '../Utility/Constant'
import axios from 'axios'
import { Navigate } from 'react-router-dom'
import LoginShimmer from './LoginShimmer'
import { useDispatch } from 'react-redux'
import { addUser } from '../Store/UserSlice'

const AuthWrapper = ({ children }) => {

const [User, setUser] = useState(false)
const [Loading, setLoading] = useState(true)

let dispatch = useDispatch()

let getUser = async () => {
  try{
    setLoading(true)
    let res = await axios.get(baseUrl+getUserUrl , {withCredentials: true})
    
    let data = res?.data;
    
    if(data.result == true){
      setUser(true)
      dispatch(addUser(data.data))
    }else{
      setUser(false)
    }
  }catch(err){
    console.log(err)
  }finally{
    setLoading(false)
  }
}

useEffect(() => {
  getUser()
}, [])

if(Loading){
  return <LoginShimmer></LoginShimmer>
}

if(User == false){
  return <Navigate to="/login"/>
}

return children

}
 
export default AuthWrapper

