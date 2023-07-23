import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import "./featured.scss";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";
import useFeaturesHooks from "../../Hooks/useFeaturesHooks";

const FeaturedComponents = ({ type }) => {
  const [showTrailerBanner, movieTailer, movie, handelPlay] =
    useFeaturesHooks();
  return (
    <div className="featured">
      <div className="category">
        <span>{type === "movie" ? "Movies" : "Series"}</span>
        <select name="genre" id="genre">
          <option>Genre</option>
          <option value="adventure">Adventure</option>
          <option value="comedy">Comedy</option>
          <option value="crime">Crime</option>
          <option value="fantasy">Fantasy</option>
          <option value="historical">Historical</option>
          <option value="horror">Horror</option>
          <option value="romance">Romance</option>
          <option value="sci-fi">Sci-fi</option>
          <option value="thriller">Thriller</option>
          <option value="western">Western</option>
          <option value="animation">Animation</option>
          <option value="drama">Drama</option>
          <option value="documentary">Documentary</option>
        </select>
      </div>
      {showTrailerBanner ? (
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${movieTailer}`}
          width="100%"
          height="100%"
          style={{ position: "absolute", top: "0", left: "0" }}
          playing
          progressInterval={1000}
        />
      ) : (
        <img
          src={`https://image.tmdb.org/t/p/original/${
            movie?.backdrop_path || movie?.poster_path
          }`}
          alt=""
        />
      )}
      <div className="featured_info">
        <h3>{movie?.title}</h3>
        <span className="featured_description">{movie?.overview}</span>

        <div className="buttons">
          <button className="paly" onClick={handelPlay}>
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedComponents;
