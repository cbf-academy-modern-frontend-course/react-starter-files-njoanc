import { Outlet, Link } from "react-router-dom";
import "../index.css";
const Header = () => {
  return (
    <>
      <h1 className="h1">My Bookcase</h1>
      <nav>
        <div className="navigation">
          <Link to="/">Home</Link>
          <br />
          <Link to="/about">About Us</Link>
          <br />
          <Link to="/bookcase" className="bookLink">
            Bookcase
          </Link>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Header;
