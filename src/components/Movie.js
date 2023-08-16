import React from "react";
import PropTypes from 'prop-types';
import './Movie.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";

function Moive({ year, title, summary, poster, genres }) {
  const [movie, setMovie] = useState({
    year: year,
    title: title,
    summary: summary,
    poster: poster,
    genres: genres,
  });

  return (
    <div className="movie">
      <Link
        to={{ pathname: '/movie-detail' }}
        onClick={() => localStorage.setItem('movie', JSON.stringify(movie))}
      >
        <img src={poster} alt={title} title={title}></img>
        <div className="movie__data">
          <h3 className="movie__title">{title}</h3>
          <h3 className="movie__year">{year}</h3>
          <ul className="movie__genres">
            {genres.map((genre, index) => {
              return <li key={index} className="movie__genre">{genre}</li>
            })}
          </ul>
          <p className="movie__summary">{summary.slice(0, 180)}...</p>
        </div>
      </Link>
    </div>
  );
}

Moive.propTypes = {
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Moive;