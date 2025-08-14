import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='container-nav'>
    <nav className="navbar">
     <p className='link2' ><Link className='line' to="/">Home</Link></p> 
      <p className='link1'><Link className='line' to="/profile">Profile</Link></p>
    </nav>
    </div>
  );
};

export default Navbar;