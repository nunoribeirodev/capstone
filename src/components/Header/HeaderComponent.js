import { Link } from "react-router-dom";
import './HeaderComponent.css';
import headerLogo from '../../assets/Asset 16@4x.png';

const Header = () => {
    return(
        <>
            <header>
                <div class="logo">
                    <img src={headerLogo} alt="Little Lemon Restaurant" />
                </div>
                <nav>
                    <ul class="nav-links">
                        <Link to="/home" className="nav-item">Home</Link>
                        <Link to="/about" className="nav-item">About</Link>
                        <Link to="/specials" className="nav-item">Menu</Link>
                        <Link to="/reservations" className="nav-item">Reservations</Link>
                        <Link to="/order" className="nav-item">Order Online</Link>
                        <Link to="/login" className="nav-item">Login</Link>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header;