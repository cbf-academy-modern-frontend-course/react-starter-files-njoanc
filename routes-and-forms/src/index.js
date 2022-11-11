import { React } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Ducklings from "./components/Ducklings";
import Puppies from "./components/Puppies";
import AboutUsPage from "./components/AboutUsPage";
import PetForm from "./components/PetForm";

export default function App() {
  return (
    <Router>
      <ul className="breadcrumb">
        <li>
          <Link to="/"> All Pets </Link>
        </li>
        <li>
          <Link to="/kittens"> Kittens </Link>
        </li>
        <li>
          <Link to="/puppies"> Puppies </Link>
        </li>
        <li>
          <Link to="/ducklings"> Ducklings </Link>
        </li>
        <li>
          <Link to="/aboutUsPage"> About Us </Link>
        </li>
        <li>
          <Link to="/register"> Save a new Pet </Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="kittens" element={<Kittens />} />
        <Route path="/puppies" element={<Puppies />} />
        <Route path="/ducklings" element={<Ducklings />} />
        <Route path="aboutUsPage" element={<AboutUsPage />} />
        <Route path="register" element={<PetForm />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return (
    <>
      <h1>All Pets</h1>
      <section>This is the page for all your pet needs</section>
      <img src="imgs/kitten.jpg" alt="Kitten" />
      <img src="imgs/puppy.jpg" alt="Puppy" />
      <img src="imgs/duckling.jpg" alt="Duckling" />
      <PetForm />
    </>
  );
}

function Kittens() {
  return (
    <>
      <h1>Kittens</h1>
      <section>This is the cats page</section>
      <img src="imgs/kitten.jpg" alt="Kitten" />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
