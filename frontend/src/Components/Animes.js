import React, { useState, useEffect } from "react";
import Anime from "./Anime";

function Animes() {
  //fetch all animes from the backend and render them as a list using the Anime component. Make sure to style the animes to look like the screenshot from the README. Feel free to use axios to grab data

  const [animes, setAnimes] = useState([]);
  const API = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    fetch(`${API}/animes`)
    .then(res => res.json())
    .then(res => {
      console.log(res)
      setAnimes(res)
    })
    .catch(err => {
      console.error(err);
    })
  }, [])

  return (
    <section className="index" id="anime-list">
      {animes.map(anime => {
        return <Anime key={anime.id} name={anime.name} description={anime.description}/>
      })}
      <p>No animes to display</p>
    </section>
  );
}

export default Animes;
