import React, { useEffect, useState } from "react";
import axios from "../axios";
import requests from "../Request";
const useFeaturesHooks = () => {
  const [movie, setMovie] = useState([]);
  const [movieId, setMovieId] = useState("");
  const [movieTailer, setMovieTailer] = useState("");
  const [showTrailerBanner, setShowTrailerBanner] = useState(false);
  const API_KEY = "bea6398fcf027891e8c764af6e954cea";

  // To Get Random movie Poster
  useEffect(() => {
    const fetchDataImage = async () => {
      const request = await axios.get(requests.fetchActionMovies);

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    };
    fetchDataImage();
  }, []);
  // to get random movie id
  useEffect(() => {
    setMovieId(movie?.id);
  }, [movie]);

  // to get movie trailer
  const getMovieDetails = async () => {
    const request = await axios.get(
      `https://api.themoviedb.org/3/${
        movie.media_type === "tv" ? "tv" : "movie"
      }/${
        movieId && movieId
      }?api_key=${API_KEY}&language=en-US&append_to_response=videos`
    );

    const index = request?.data?.videos?.results?.findIndex(
      (e) => e.type === "Trailer"
    );
    setMovieTailer(request?.data?.videos?.results[index]?.key);
  };

  useEffect(() => {
    movieId && getMovieDetails();
  }, [movieId]);

  // function to play trailer
  const handelPlay = () => {
    setShowTrailerBanner(true);
  };

  return [showTrailerBanner, movieTailer, movie, handelPlay];
};

export default useFeaturesHooks;
