import React from 'react'
import Search from './Search'
import { Link } from 'react-router-dom'


function Header() {
    return (
        <header style={{ background:'#282c34',color:'#fff',padding:'10px' }}>
            <div style={headerStyle}>
                <Link className="linkStyle" to="/"><h1 style={{color:'Crimson',fontSize:'40px'}}>AnimalShop</h1></Link>
                <Search />
            </div>
            <div style={navbarStyle}>
                <Link className="linkStyle" to="/">Home</Link> |
                <Link className="linkStyle" to='/dog'>Dog</Link> |
                <Link className="linkStyle" to='/cat'>Cat</Link> |
                <Link className="linkStyle" to='/bird'>Bird</Link> |
                <Link className="linkStyle" to='/smallPet'>SmallPet</Link> ||
                <Link className="linkStyleBtn" to="/"><i className="fas fa-user-circle"></i></Link>
                <Link className="linkStyleBtn" to="/favori"><i className="fas fa-star"></i></Link>
                <Link className="linkStyleBtn" to="/panier"><i className="fas fa-shopping-cart"></i></Link>

            </div>
        </header>
    )
}

const headerStyle = {
    display:'flex',
    justifyContent:'space-evenly',
    alignItems: 'center'
}
const navbarStyle = {
    paddingTop:'20px',

}
export default Header