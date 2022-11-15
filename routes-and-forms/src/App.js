import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Ducklings from "./components/Ducklings";
import Puppies from "./components/Puppies";
import AboutUsPage from "./components/AboutUsPage";
import PetForm from "./components/PetForm";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Kittens from "./components/Kittens";
import NoPage from "./components/NoPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/kittens" element={<Kittens />} />
          <Route path="/puppies" element={<Puppies />} />
          <Route path="/ducklings" element={<Ducklings />} />
          <Route path="/aboutUsPage" element={<AboutUsPage />} />
          <Route path="/register" element={<PetForm />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
