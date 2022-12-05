import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { useState } from "react";
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu";
import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose";
import { AiFillHome } from "@react-icons/all-files/ai/AiFillHome";
let ApiKey = "&api_key=f0d7f15a3599b62fa40f00749d3a9304";
let BaseApi = "https://api.themoviedb.org/3";
let url = BaseApi + "/discover/movie?sort_by=popularity.desc" + ApiKey;

function Header() {
  // console.log(history);
  // const getcolor = (curr) => {
  //   if (history.location.pathname === curr) {
  //     return "#150050";
  //   }
  // };

  const [buttonlist, setbuttonlist] = useState(false);

  function updateMenu() {
    buttonlist ? setbuttonlist(false) : setbuttonlist(true);
    console.log(buttonlist);
  }

  return (
    <div className="Main">
      <div className="Header">
        <div className="Head">
          <div className="logo-social">
            <h1 className="Logo">
              <Link to="/" style={{ color: "#FFF", textDecoration: "none" }}>
                <span>C</span>ima<span>4</span>Ever
              </Link>
            </h1>
            <div className="Social">
              <FaFacebookF className="mx-3" />
              <FaTwitter className="mx-1" />
            </div>
          </div>
          <div className="List">
            <NavLink
              className="link-w"
              to="/"
              style={{ display: "flex", alignItems: "baseline" }}>
              {" "}
              <AiFillHome className="mx-1" style={{ fontSize: "22px" }} />
              Home
            </NavLink>
            <NavLink className="link-w" to="/kids">
              {" "}
              Kids
            </NavLink>
            <NavLink className="link-w" to="/drama">
              {" "}
              Drama
            </NavLink>{" "}
            <NavLink className="link-w" to="/science">
              {" "}
              science
            </NavLink>{" "}
            <NavLink className="link-w" to="/comedia">
              {" "}
              comedies
            </NavLink>
          </div>
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
              <AiOutlineClose />
            </button>
          </div>
          <div className="Thelist">
            <NavLink to="/" className="link mx-3">
              Home
            </NavLink>
            <NavLink to="/kids" className="link mx-3">
              Kids
            </NavLink>
            <NavLink to="/drama" className="link mx-3">
              Drama
            </NavLink>
            <NavLink to="/science" className="link mx-3">
              Science
            </NavLink>
            <NavLink to="/comedia" className="link mx-3">
              comedies
            </NavLink>
            <div className="Social-w">
              <FaFacebookF className="mx-3" />
              <FaTwitter className="mx-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
