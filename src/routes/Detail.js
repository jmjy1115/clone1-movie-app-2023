import React, { useEffect } from "react";

function Detail() {
  const savedMovie = localStorage.getItem('movie');
  const { year, title, summary, poster, genres } = savedMovie
    ? JSON.parse(savedMovie)
    : { year: null, title: '', summary: '', poster: '', genres: [] };

  useEffect(() => {
    return () => {
      localStorage.removeItem('movie');
    };
  }, []);

  return (
    <div>
      <img src={poster} alt={title} title={title}></img>
      <div>
        <h3>{title}</h3>
        <h3>{year}</h3>
        <ul>
          {genres === undefined ? false : genres.map((genre, index) => {
            return <li key={index} className="movie__genre">{genre}</li>
          })}
        </ul>
        <p>{summary}</p>
      </div>
    </div>
  );
}

export default Detail;