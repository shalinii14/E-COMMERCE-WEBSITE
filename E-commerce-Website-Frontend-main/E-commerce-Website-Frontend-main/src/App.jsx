import React from "react"
import Navbar from "./Components/Nav.jsx"
import { Outlet } from "react-router-dom"
import Footer from "./Components/Footer.jsx"

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
  )
}

export default App