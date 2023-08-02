import { Routes , Route , Outlet } from "react-router-dom"

import Home from "./pages/Home"
import Products from "./pages/Products"
import Users from "./pages/Users"
import Menu from "./components/Menu"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Login from "./pages/Login"

import './styles/global.scss'
import User from "./pages/User"
import Product from "./pages/Product"


function App() {

  const Layout = () => {
    return (
      <div className="main">
        <Navbar/>
        <div className="container">
          <div className="menuContainer">
            <Menu/>
          </div>
          <div className="contentContainer">
            <Outlet/>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>} >
          <Route path="/" element={<Home/>} />
          <Route path="/users" element={<Users/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/users/user/:id" element={<User/>} />
          <Route path="/products/product/:id" element={<Product/>} />
        </Route>
        <Route path="/login" element={<Login/>} />
      </Routes>
    </>
  )
}

export default App
