import { Link } from "react-router-dom";

const AboutUsPage = (props) => {
  return (
    <div className="header">
      <h1>About Us</h1>
      <div className="breadcrumb">
        <Link to="/">Home</Link>
      </div>
      <div className="page">
        <h2>Welcome to the Bookcase Application</h2>
        <p>
          his React application allows a user to add a set of books to a
          collection of books. It connects to the Google Books API and...
        </p>
      </div>
    </div>
  );
};

export default AboutUsPage;
