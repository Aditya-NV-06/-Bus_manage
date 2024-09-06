
const Navbar = ()=>{
    return (
    <>
         <header>
      <div className="top">
        <div className='navbar'>
          <div className="nav-title">DTC</div>
        <nav>
          <ul className="nav-ul">
            <div className="nav-item"><li><a className="nav-link" href="#">Home</a></li></div>
            <div className="nav-item"><li ><a className="nav-link" href="#">Routes</a></li></div>
            <div className="nav-item"> <li><a className="nav-link" href="#">Ticketing</a></li></div>
            <div className="nav-item"><li><a  className="nav-link"href="#">Queries</a></li></div>
            <div className="nav-item"><li><a className="nav-link"href="#">Contact</a></li></div>
            
          </ul>
          </nav>
          </div>
         <div className="title">Delhi Transport Commission</div>
        </div>
     </header>
    </>

    );
}

export default Navbar;