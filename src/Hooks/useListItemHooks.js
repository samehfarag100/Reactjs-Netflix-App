import axios from "axios";
import React, { useEffect, useState } from "react";

const useListItemHooks = (movie) => {
  const API_KEY = "bea6398fcf027891e8c764af6e954cea";

  const [isHovered, setIsHovered] = useState(false);
  const image_base_url = "https://image.tmdb.org/t/p/original/";
  const [movieId, setMovieId] = useState("");
  const [movieTailer, setMovieTailer] = useState("");

  const getMovieId = async () => {
    await setMovieId(movie.id);
  };

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

  return [getMovieId, isHovered, setIsHovered, image_base_url, movieTailer];
};

export default useListItemHooks;
