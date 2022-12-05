import axios from "axios";
import { AiOutlineStar } from "@react-icons/all-files/ai/AiOutlineStar";
import Card from "react-bootstrap/Card";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function Moviedetails(props) {
  const location = useLocation();
  console.log(location);
  const params = useParams([]);
  console.log(params);
  let ApiKey = "&api_key=f0d7f15a3599b62fa40f00749d3a9304&";
  let BaseApi = "https://api.themoviedb.org/3";
  let url = BaseApi + `/movie/${params.id}?` + ApiKey;
  let img_url = "https://image.tmdb.org/t/p/w500/";

  const [Movie, setMovie] = useState([]);
  const [Url_set, setUrl] = useState(url);

  useEffect(() => {
    axios
      .get(Url_set)
      .then((res) => {
        console.log(res);
        setMovie(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="d-page">
        <Card
          className="Container-d"
          style={{
            border: "none",
            borderTopLeftRadius: "50px",
            borderBottomRightRadius: "50px",
          }}>
          <div classNmae="" style={{ height: "500px", overflow: "hidden" }}>
            <Card.Img
              classNmae="img-d"
              style={{
                height: "100%",
                borderTopLeftRadius: "50px",
                borderBottomRightRadius: "50px",
              }}
              src={img_url + Movie.backdrop_path}
              alt="Card image"
            />
          </div>
          <Card.ImgOverlay>
            <div className="blur"></div>
            <div>
              <div className="Card-d">
                <img src={img_url + Movie.poster_path} alt="" />
              </div>
            </div>
            <div>
              <div className="content-d">
                <div className="Text">
                  <div className="genres-data">
                    <h1>{Movie.title}</h1>
                    <h3 className="mx-2">({Movie.release_date})</h3>
                  </div>
                  <div className="genres">
                    <h3 className="mx-2">
                      {Movie.vote_average}
                      <AiOutlineStar style={{ color: "yellow" }} />
                    </h3>
                    <h3>{Movie.vote_count}</h3>
                  </div>
                  <div className="genres">
                    <h3 className="mx-2">{Movie.popularity}</h3>
                    <h3 className="mx-2">{Movie.runtime}</h3>
                  </div>
                  <div className="genres">
                    <h3>Original language :</h3>
                    <h3 className="mx-2">{Movie.original_language}</h3>
                  </div>
                  <div className="Overview">
                    <h4>{Movie.overview}</h4>
                  </div>
                  <a href={Movie.homepage}>Watch</a>
                </div>
              </div>
            </div>
          </Card.ImgOverlay>
        </Card>
      </div>
    </>
  );
}
