import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";
import "./list_item.scss";
import React from "react";
import ReactPlayer from "react-player/youtube";
import useListItemHooks from "../../Hooks/useListItemHooks";
const ListItemComponents = ({ index, movie }) => {
  const [getMovieId, isHovered, setIsHovered, image_base_url, movieTailer] =
    useListItemHooks(movie);

  return (
    <div
      onClick={getMovieId}
      className="list_item"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ left: isHovered && index * 225 - 50 }}
    >
      <img src={`${image_base_url}${movie.poster_path}`} alt="" />

      {isHovered && (
        <>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${movieTailer}`}
            width="100%"
            height="100%"
            style={{ position: "absolute", top: "0", left: "0" }}
            playing
          />
          <div className="list_item_info">
            <div className="list_item_icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownAltOutlined className="icon" />
            </div>

            <div className="list_item_info_top">
              <span>{movie.original_name || movie.title}</span>
              <span className="limit">+16</span>
              <span>{movie.release_date}</span>
            </div>
            <div className="description">{movie.overview}</div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
};

export default ListItemComponents;
