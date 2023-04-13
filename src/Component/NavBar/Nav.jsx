import React, { useContext } from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import { GlobalData } from '../Context'

const Nav = () => {
  const { addtocart } = useContext(GlobalData)
  return (
    <div className='Nav'>
      <h2>Routing</h2>
      <Link to="/">Home</Link>
      <Link to="/product">Product</Link>
      <Link to='/cart'>
        <button>Add Cart</button>
      </Link>
      <p className='count'>{addtocart.length}</p>
    </div>
  )
}

export default Nav