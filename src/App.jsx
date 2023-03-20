// Routes and Components
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Navbar from "./Components/NavBar/Navbar";
import SearchResults from "./pages/SearchResults";
import Home from "./pages/Home";
import "./App.css";
import NotFound from "./pages/NotFound";
import FullPostContainer from "./pages/FullPost/FullPostContainer";

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={`/search`} element={<SearchResults />} />
        <Route
          path={`/FullPost/r/:subreddit/comments/:id/:title`}
          element={<FullPostContainer />}
        />
        <Route path={`*`} element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
