import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { useState } from "react";
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu";
import { AiOutlineSearch } from "@react-icons/all-files/ai/AiOutlineSearch";
let ApiKey = "&api_key=f0d7f15a3599b62fa40f00749d3a9304";
let BaseApi = "https://api.themoviedb.org/3";
let url = BaseApi + "/discover/movie?sort_by=popularity.desc" + ApiKey;

function Header() {
  const [search, setsearch] = useState();
  const [Url, setUrl] = useState(url);
  const [buttonlist, setbuttonlist] = useState(false);

  function updateMenu() {
    buttonlist ? setbuttonlist(false) : setbuttonlist(true);
    console.log(buttonlist);
  }

  function searchmovies(event) {
    if (event.key == "Enter") {
      url =
        BaseApi +
        "/search/movie?api_key=f0d7f15a3599b62fa40f00749d3a9304&query=" +
        search;
      setUrl(url);
      setsearch(" ");
    }
  }

  return (
    <div className="Main">
      <div className="Header">
        <h1>
          <span>C</span>ima<span>4</span>Ever
        </h1>
        <div className="List">
          <Link className="link-w" to="/">
            {" "}
            Home
          </Link>
          <Link className="link-w" to="/kids">
            {" "}
            Kids
          </Link>
          <Link className="link-w" to="/drama">
            {" "}
            Drama
          </Link>{" "}
          <Link className="link-w" to="/science">
            {" "}
            science
          </Link>{" "}
          <Link className="link-w" to="/comedia">
            {" "}
            comedies
          </Link>
        </div>
        <div className="search">
          <div className="d-flex">
            <input
              type="search"
              placeholder="Search For Movies"
              className="input me-2"
              onChange={(e) => {
                setsearch(e.target.value);
              }}
              value={search}
              onKeyPress={searchmovies}
            />
            <AiOutlineSearch className="searchicon" />
          </div>
        </div>
        <div className="Social">
          <FaFacebookF className="mx-3" />
          <FaTwitter className="mx-1" />
        </div>
        <div className="h-list-mop">
          <button
            className="h-list"
            onClick={() => {
              updateMenu();
            }}>
            <GiHamburgerMenu />
          </button>
        </div>
        <div
          className={buttonlist ? "nav-list visible" : "nav-list notvisible"}>
          <div className="h-list-mop">
            <button
              className="h-list"
              onClick={() => {
                updateMenu();
              }}>
              <GiHamburgerMenu />
            </button>
          </div>
          <div className="Thelist">
            <Link to="/" className="link mx-3">
              Home
            </Link>
            <Link to="/kids" className="link mx-3">
              Kids
            </Link>
            <Link to="/drama" className="link mx-3">
              Drama
            </Link>
            <Link to="/science" className="link mx-3">
              Science
            </Link>
            <Link to="/comedia" className="link mx-3">
              comedies
            </Link>
            <div className="Social-w">
              <FaFacebookF className="mx-3" />
              <FaTwitter className="mx-1" />
            </div>
          </div>
        </div>
      </div>
      <div className="search-m">
        <div className="d-flex">
          <input
            type="search"
            placeholder="Search For Movies"
            className="input me-2"
            onChange={(e) => {
              setsearch(e.target.value);
            }}
            value={search}
            onKeyPress={searchmovies}
          />
          <AiOutlineSearch className="searchicon" />
        </div>
      </div>
    </div>
  );
}

export default Header;
