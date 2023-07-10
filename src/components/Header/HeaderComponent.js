import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import './HeaderComponent.css';
import headerLogo from '../../assets/Asset 16@4x.png';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return(
        <>
            <header>
                <div className="logo">
                    <img src={headerLogo} alt="Little Lemon Restaurant" />
                </div>
                <nav>
                    {/* Desktop NavBar */}
                    <ul className="nav-links">
                        <Link to="/home" className="nav-item">Home</Link>
                        <HashLink to="/#About" smooth className="nav-item">About</HashLink>
                        <Link to="/specials" className="nav-item">Menu</Link>
                        <Link to="/reservations" className="nav-item">Reservations</Link>
                        <Link to="/order" className="nav-item">Order Online</Link>
                        <Link to="/login" className="nav-item">Login</Link>
                    </ul>

                    {/* Mobile NavBar */}
                    <div className="nav-hamburger">
                    <RxHamburgerMenu 
                        onClick={() => setToggleMenu(true)}
                    />
                        {
                            toggleMenu && (
                                <div className="nav-hamburger-menu">
                                    <AiOutlineClose className="nav-hamburger-close" onClick={() => { setToggleMenu(false) }} />
                                    <Link to="/home" className="nav-item">Home</Link>
                                    <HashLink to="/#about" smooth className="nav-item">About</HashLink>
                                    <Link to="/specials" className="nav-item">Menu</Link>
                                    <Link to="/reservations" className="nav-item">Reservations</Link>
                                    <Link to="/order" className="nav-item">Order Online</Link>
                                    <Link to="/login" className="nav-item">Login</Link>
                                </div>
                            )
                        }
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header;