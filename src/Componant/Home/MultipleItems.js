import React from "react";
import { AiOutlineStar } from "@react-icons/all-files/ai/AiOutlineStar";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { AiOutlinePlayCircle } from "@react-icons/all-files/ai/AiOutlinePlayCircle";
import { AiFillCaretLeft } from "@react-icons/all-files/ai/AiFillCaretLeft";
import { AiFillCaretRight } from "@react-icons/all-files/ai/AiFillCaretRight";
let ApiKey = "&api_key=f0d7f15a3599b62fa40f00749d3a9304";
let BaseApi = "https://api.themoviedb.org/3";
let url =
  BaseApi +
  "/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc" +
  ApiKey;
let img_url = "https://image.tmdb.org/t/p/w500/";

function MultipleItems() {
  const [movies, setMovies] = useState([]);
  const [Url_set, setUrl] = useState(url);
  const [width, setwidth] = useState(0);
  // to catch the element like java script quaryselector
  const sliderref = useRef();

  useEffect(() => {
    // to get the slider width
    console.log(sliderref.current.scrollWidth);
    console.log(sliderref.current.offsetWidth);
    setwidth(sliderref.current.scrollWidth - sliderref.current.offsetWidth);
  }, []);

  useEffect(() => {
    fetch(Url_set)
      .then((res) => res.json())
      .then((data) =>
        // console.log(data.results)
        setMovies(data.results)
      );
  }, []);
  const slideLeft = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 300;
  };

  const slideRight = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 300;
  };
  return (
    <div className="slider-com">
      <div className="slider-btn">
        <button
          className="btn-s"
          onClick={() => {
            slideRight();
          }}>
          <AiFillCaretLeft style={{ fontSize: "60px" }} />
        </button>
        <button
          className="btn-s"
          onClick={() => {
            slideLeft();
          }}>
          <AiFillCaretRight style={{ fontSize: "60px" }} />
        </button>
      </div>
      <motion.div
        ref={sliderref}
        className="Slider"
        id="slider"
        whileTap={{ cursor: "grabbing" }}>
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -3000 }}
          className="Inner-Slider">
          {movies.map((movie) => {
            return (
              <motion.div className="Card-slider">
                <Link to={`/details/${movie.id}`}>
                  <div className="s-cards">
                    <div className="img-slider">
                      <img src={img_url + movie.poster_path} alt="" />
                      <div className="blur-m"></div>
                    </div>
                    <div className="">
                      <AiOutlinePlayCircle className="play-slider" />
                    </div>
                    <div className="movie-T">
                      <h5>{movie.title}</h5>
                    </div>
                    <div className="rate">
                      {movie.vote_average} <AiOutlineStar />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default MultipleItems;
