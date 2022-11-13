import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  const padding = {
    padding: 5,
  };
  return (
    <>
      <nav>
        <ul className="breadcrumb">
          <li>
            <Link style={padding} to="/">
              {" "}
              All Pets{" "}
            </Link>
          </li>
          <li>
            <Link style={padding} to="/kittens">
              {" "}
              Kittens{" "}
            </Link>
          </li>
          <li>
            <Link style={padding} to="/puppies">
              {" "}
              Puppies{" "}
            </Link>
          </li>
          <li>
            <Link style={padding} to="/ducklings">
              {" "}
              Ducklings{" "}
            </Link>
          </li>
          <li>
            <Link style={padding} to="/aboutUsPage">
              {" "}
              About Us{" "}
            </Link>
          </li>
          <li>
            <Link style={padding} to="/register">
              {" "}
              Save a new Pet{" "}
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
