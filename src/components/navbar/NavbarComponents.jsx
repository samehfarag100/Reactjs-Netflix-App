import { ArrowDownward, Notifications, Search } from "@mui/icons-material";
import "./navbar.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/movieSlice";

const NavbarComponents = () => {
  const [isScrolled, setScrolled] = useState(false);
  const dispatch = useDispatch();
  window.onscroll = () => {
    setScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className={isScrolled ? `navbar scrolled` : "navbar"}>
      <div className="container">
        <div className="left_side">
          {/* Logo */}
          <Link to={"/"}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
              alt=""
            />
          </Link>
          {/* list */}
          <span>HomePage</span>
          <span>Tv Programs</span>
          <span>Action Movies</span>
          <span>Animation</span>
          <span>Series</span>
        </div>

        <div className="right_side">
          <Search className="icons" />
          <span>KID</span>
          <Notifications className="icons" />
          {/* Profile Image */}
          <img
            src="https://images.pexels.com/photos/17243147/pexels-photo-17243147/free-photo-of-nature.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <div className="profile">
            <ArrowDownward className="icons" />
            <div className="options">
              <span>Settings</span>
              <span onClick={() => dispatch(logout())}>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarComponents;
