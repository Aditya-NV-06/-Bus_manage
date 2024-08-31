import "./a.css"
const Navbar = ()=>{
    return (
    <>
         <header>
      <div className="top">
        <div className='navbar'>
        <nav>
          <ul className="nav-ul">
            <li ><a href="#">Routes</a></li>
            <li><a href="#">Ticketing</a></li>
            <li><a href="#">Home</a></li>
            <li><a href="#">Queries</a></li>
            <li><a href="#">Contact</a></li>
            
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