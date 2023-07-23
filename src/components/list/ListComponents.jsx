import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import "./list.scss";
import React, { useEffect, useRef, useState } from "react";
import ListItemComponents from "../listitem/ListItemComponents";
import useListHooks from "../../Hooks/useListHooks";

const ListComponents = ({ title, fetchURL }) => {
  const [handelClick, isMoved, listRef, movies] = useListHooks(fetchURL);

  return (
    <div className="list">
      <span className="list_title">{title}</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="slider_arrow left"
          onClick={() => handelClick("left")}
          style={{ display: !isMoved && "none" }}
        />
        <div className="container" ref={listRef}>
          {movies.map((movie, index) => (
            <ListItemComponents key={index} index={index} movie={movie} />
          ))}
        </div>
        <ArrowForwardIosOutlined
          className="slider_arrow right"
          onClick={() => handelClick("right")}
        />
      </div>
    </div>
  );
};

export default ListComponents;
