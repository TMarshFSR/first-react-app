import {Link} from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const Navbar = () => {
    return(
    <Nav>
    <Link to="/" className="nav-link">Home</Link>
    <Link to="/users" className="nav-link">Users</Link>
    <Link to="/contact" className="nav-link">Contact</Link>
    <Link to="/page404" className="nav-link">404</Link>
    </Nav>

    )
}

export default Navbar;