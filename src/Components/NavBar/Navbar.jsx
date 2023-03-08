import React from "react";
import { FaRedditAlien } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./NavBar.css";
import SearchBar from "../SearchBar/SearchBar";
const Navbar = () => {
  return (
    <header className="header-main">
      <nav className="nav-container">
        <Link to={"/"}>
          <div className="logo-flex">
            <div className="logo">
              <FaRedditAlien className="logo-sign" /> <span>Up</span>votely
            </div>
          </div>
        </Link>
        <SearchBar />
        <div title="Github" className="header-git transition">
          <a href="https://github.com/jodenore" target="_blank">
            <AiFillGithub />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
