import { StrictMode } from 'react'
import { Suspense, lazy } from "react"
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home.jsx';
import Profile from './Components/Profile.jsx'
import Cart from './Components/Cart.jsx'
import Shimmer from './Components/Shimmer.jsx'
import ProductPage from './Components/ProductPage.jsx'
import Error from './Components/Error.jsx'
const FoodPage = lazy(()=> import ('./Components/FoodPage.jsx'))
import ThemeContext from './Components/ThemeContext.jsx'
import { Provider } from 'react-redux'
import Store from './Store/Store.js'
import WishList from './Components/WishList.jsx'
import Login from './Components/Login.jsx'
import SignUp from './Components/SignUp.jsx'
import AuthWrapper from './Components/AuthWrapper.jsx'




const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthWrapper><App></App></AuthWrapper>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>
      },
      {
        path: '/cart',
        element: <Cart></Cart>
      },
      {
        path: '/food',
        element: <Suspense fallback={<Shimmer></Shimmer>}>
                      <FoodPage></FoodPage>
                </Suspense>
      },
      {
        path: '/product/:id',
        element: <ProductPage></ProductPage>
      },
      {
        path: '/wishlist',
        element: <WishList></WishList>
      }
    ],
    errorElement : <Error></Error>
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>
  }
]);

createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
  <ThemeContext>
  <RouterProvider router={router}/>
  </ThemeContext>
  </Provider>
)
