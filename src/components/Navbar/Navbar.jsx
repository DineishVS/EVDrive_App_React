import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav'>
        <div className="nav-logo">EVDrive</div>
        <ul className="nav-menu">
            <li><a href="#home"></a>Home</li>
            <li><a href="#Explore"></a>Explore</li>
            <li><a href="#About"></a>About</li>
            <li className='nav-contact'><a href="#contact"></a>Contact</li>
        </ul>
        
      
    </div>
  )
}

export default Navbar
