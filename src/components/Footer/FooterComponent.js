import { Link } from "react-router-dom";
import './FooterComponent.css';

const doormatNavigationLinks = ['Home', 'About', 'Menu', 'Reservations', 'Order Online', 'Login'];
const contactLinks = ['Address', 'Phone Number', 'Email'];
const socialMediaLinks = ['Facebook', 'Instagram'];

const FooterLinks = (props) => {
    return(
        <div className="footer-column">
            <h1>{props.columnName}</h1>
            <ul>
                {
                    props.linksList.map((link) => {
                        return(
                            <li key={link}>
                                <Link to='' className="footer-link">{link}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

const Footer = () => {
    return(
        <footer>
            <div className="footer-img" />
            <div className="footer-links-container">
                <FooterLinks columnName='Doormat Navigation' linksList={doormatNavigationLinks} />
                <FooterLinks columnName='Contacts' linksList={contactLinks} />
                <FooterLinks columnName='Social Media' linksList={socialMediaLinks} />
            </div>
        </footer>
    )
}

export default Footer;