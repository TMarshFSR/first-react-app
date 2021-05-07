import {Link} from 'react-router-dom';

const Nav = () => {
    return(
    <>
    <Link to="/">Home</Link>
    <Link to="/users">Users</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/page404">404</Link>
    </>
    )
}

export default Nav;