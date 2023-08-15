import React from "react";

function Detail() {
  const year = localStorage.getItem("year");
  const title = localStorage.getItem("title");
  const summary = localStorage.getItem("summary");
  const poster = localStorage.getItem("poster");
  const genres = localStorage.getItem("genres").split(",");

  localStorage.clear();

  return (
    <div>
      <img src={poster} alt={title} title={title}></img>
      <div>
        <h3>{title}</h3>
        <h3>{year}</h3>
        <ul>
          {genres.map((genre, index) => {
            return <li key={index} className="movie__genre">{genre}</li>
          })}
        </ul>
        <p>{summary}</p>
      </div>
    </div>
  );
}

export default Detail;