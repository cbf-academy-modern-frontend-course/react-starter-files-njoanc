import "../index.css";
import { Link } from "react-router-dom";
const AboutUsPage = (props) => {
  const color = {
    color: "blue",
  };
  return (
    <div className="breadcrumb">
      <h1 className="about">About</h1>
      <div className="aboutPage">
        <h2>Welcome to the Bookcase Application</h2>
        <p>The following application was created by Jeanne d'Arc NYIRAMWIZA.</p>
        <p>
          This bookcase app displays a list of books that a user can save to a
          local bookcase.
        </p>
        <p>
          Click on the "Add+" button to add a book to your bookcase. Use the
          serach bar to find the latest books by name, author,or description
        </p>
        <div className="link">
          <Link style={color} to="/">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
