import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import MultipleItems from "../Home/MultipleItems";
import { useEffect, useState } from "react";
import { AiOutlinePlayCircle } from "@react-icons/all-files/ai/AiOutlinePlayCircle";
import { AiOutlineStar } from "@react-icons/all-files/ai/AiOutlineStar";
let ApiKey = "&api_key=f0d7f15a3599b62fa40f00749d3a9304";
let BaseApi = "https://api.themoviedb.org/3";
let url =
  BaseApi +
  "/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc" +
  ApiKey;
//
let img_url = "https://image.tmdb.org/t/p/w500/";
function Kids() {
  const [movies, setMovies] = useState([]);
  const [Url_set, setUrl] = useState(url);

  useEffect(() => {
    fetch(Url_set)
      .then((res) => res.json())
      .then((data) =>
        // console.log(data.results)
        setMovies(data.results)
      );
  }, []);

  return (
    <div className="Main">
      <MultipleItems />

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
      <h2 className="title">Kids Movies</h2>
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

export default Kids;
