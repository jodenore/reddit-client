import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Navbar from "./Components/NavBar/Navbar";
import SearchResults from "./pages/SearchResults";
import Home from "./pages/Home";
import "./App.css";
import { useContext } from "react";
import { TestContext } from "./TestContext";
function App() {
  const { query } = useContext(TestContext);
  return (
    <div className="main-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={`/search`} element={<SearchResults />} />
      </Routes>
    </div>
  );
}

export default App;
