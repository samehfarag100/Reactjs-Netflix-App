import "./home.scss";
import React from "react";
import NavbarComponents from "../../components/navbar/NavbarComponents";
import FeaturedComponents from "../../components/featured/FeaturedComponents";
import ListComponents from "../../components/list/ListComponents";
import requests from "../../Request";
const HomePage = () => {
  return (
    <div className="home">
      <NavbarComponents />
      <FeaturedComponents type="movie" />
      <ListComponents title={"Trending"} fetchURL={requests.fetchTrending} />
      <ListComponents
        title={"Netflix Originals"}
        fetchURL={requests.fetchNetflixOriginals}
      />
      <ListComponents title={"Top Rated"} fetchURL={requests.fetchTopRated} />
      <ListComponents
        title={"Action Movies"}
        fetchURL={requests.fetchActionMovies}
      />
      <ListComponents
        title={"Comedy Movies"}
        fetchURL={requests.fetchComedyMovies}
      />
      <ListComponents
        title={"Horror Movies"}
        fetchURL={requests.fetchHorrorMovies}
      />
      <ListComponents
        title={"Romance Movies"}
        fetchURL={requests.fetchRomanceMovies}
      />
      <ListComponents
        title={"Documentaries Movies"}
        fetchURL={requests.fetchDocumentaries}
      />
    </div>
  );
};

export default HomePage;
