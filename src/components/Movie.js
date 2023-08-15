import React from "react";
import PropTypes from 'prop-types';
import './Movie.css';
import { Link } from 'react-router-dom';

function Moive({ year, title, summary, poster, genres }) {
  const saveStateValues = ( year, title, summary, poster, genres ) => {
    localStorage.setItem("year", year);
    localStorage.setItem("title", title);
    localStorage.setItem("summary", summary);
    localStorage.setItem("poster", poster);
    localStorage.setItem("genres", genres);
  };

  return (
    <div className="movie">
      <Link
        to={{ pathname: '/movie-detail' }}
        onClick={() => saveStateValues(year, title, summary, poster, genres)}
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