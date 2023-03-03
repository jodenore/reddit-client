import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Navbar from "./Components/NavBar/Navbar";
import FullPost from "./pages/FullPost";
import Home from "./pages/Home";
import "./App.css";
function App() {
  return (
    <div className="main-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comments/:id" element={<FullPost />} />
      </Routes>
    </div>
  );
}

export default App;
