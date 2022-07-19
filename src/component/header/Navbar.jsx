import React,{useState} from 'react'
import '../header/navbar.css'

function Navbar() {
    const[active, setActive]=useState('nav-menu');
    const[toggleIcon, setToggleTcon]=useState("nav-toggle")

    const navToggle=()=>{
        active=='nav-menu'?setActive('nav-menu nav-active')
        :setActive("nav-menu");
        
        // toggleiCon
     toggleIcon === 'nav-toggle'?
     setToggleTcon('nav-toggle  toggle')
     :setToggleTcon("nav-toggle");


    }

  return (

    <nav className='nav'>
      <h1>
        <a href="" className="nav-brand">Connect.</a></h1>
        <ul className={active}>
            <li className="nav-item"><a href="" className="nav-link">Product</a></li>
            <li className="nav-item"><a href="" className="nav-link">Features</a></li>
            <li className="nav-item"><a href="" className="nav-link">Reviews</a></li>
            <li className="nav-item"><a href="" className="nav-link">Pricing</a></li>
            <li className="nav-item"><a href="" className="nav-link">FAQ</a></li>
            <button className='btn'>DOWNLOAD</button>
        </ul>
        <div onClick={navToggle} className={toggleIcon}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </div>
    </nav>
  )
}

export default Navbar