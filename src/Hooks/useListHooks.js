import React, { useEffect, useRef, useState } from "react";
import axios from "../axios";

const useListHooks = (fetchURL) => {
  const [sliderNumber, setSliderNumber] = useState(0);
  const [isMoved, setISMoved] = useState(false);
  const listRef = useRef();

  const handelClick = (direction) => {
    setISMoved(true);
    const distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && sliderNumber > 0) {
      setSliderNumber(sliderNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && sliderNumber < 21) {
      setSliderNumber(sliderNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };
  // Fetch All Movies Data
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
    };
    fetchData();
  }, [fetchURL]);

  return [handelClick, isMoved, listRef, movies];
};

export default useListHooks;
