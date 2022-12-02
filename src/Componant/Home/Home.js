import React from "react";
import Carousel from "react-bootstrap/Carousel";
import MultipleItems from "./MultipleItems";
import { AiOutlineStar } from "@react-icons/all-files/ai/AiOutlineStar";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import { AiOutlinePlayCircle } from "@react-icons/all-files/ai/AiOutlinePlayCircle";
let ApiKey = "&api_key=f0d7f15a3599b62fa40f00749d3a9304&";
let BaseApi = "https://api.themoviedb.org/3";
let url = BaseApi + "/discover/movie?sort_by=popularity.desc" + ApiKey;
//
let img_url = "https://image.tmdb.org/t/p/w500/";
function Home() {
  const [movies, setMovies] = useState([]);
  const [Url_set, setUrl] = useState(url);

  useEffect(() => {
    fetch(Url_set)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, []);

  return (
    <div className="Main">
      <div className="container-b">
        <div className="c-banner">
          <div className="H-banner">
            <h1 className="L1">
              <span>C</span>
            </h1>
            <h1 className="L2">ima</h1>
            <h1 className="L3">
              <span>4</span>
            </h1>
            <h1 className="L4">Ever</h1>
          </div>
          <h1 className="L5">For Movies</h1>
        </div>
        <Carousel>
          <Carousel.Item>
            <img className="banner" src="./imgs/bannerm7.jpg" alt="Movies" />
            <div className="blur-banner"></div>
          </Carousel.Item>
          <Carousel.Item>
            <img className="banner" src="./imgs/bannerm1.jpg" alt="Movies" />
            <div className="blur-banner"></div>
          </Carousel.Item>
          <Carousel.Item>
            <img className="banner" src="./imgs/bannerm2.jpg" alt="Movies" />
            <div className="blur-banner"></div>
          </Carousel.Item>
          <Carousel.Item>
            <img className="banner" src="./imgs/bannerm.jpg" alt="Movies" />
            <div className="blur-banner"></div>
          </Carousel.Item>
        </Carousel>
      </div>
      <div>
        {" "}
        <MultipleItems />
      </div>
      <div className="buttons">
        <Link to="/highrate">
          {" "}
          <button className="buttoon">High Rate</button>
        </Link>
        <Link to="/bestmovies">
          {" "}
          <button className="buttoon">Best Movies</button>
        </Link>
      </div>
      <div className="Containe-cards">
        {movies.map((movie) => {
          return (
            <Link to={`/details/${movie.id}`}>
              <div className="Card">
                <div className="img-Card">
                  <img src={img_url + movie.poster_path} alt="" />
                  <div className="blur-m"></div>
                </div>
                <Card.ImgOverlay className="d-flex flex-column justify-content-center align-item-center">
                  <div className="rate">
                    {movie.vote_average} <AiOutlineStar />
                  </div>
                  <AiOutlinePlayCircle className="play" />
                  <div className="movie-T">
                    <h5>{movie.title}</h5>
                  </div>
                </Card.ImgOverlay>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
