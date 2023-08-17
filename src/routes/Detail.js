import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Detail.css";

function Detail() {
  const savedMovie = localStorage.getItem('movie');
  const navigate = useNavigate();

  useEffect(() => {
    if (!savedMovie) navigate('/');

    return () => {
      localStorage.removeItem('movie');
    };
  }, [savedMovie, navigate]);

  if (!savedMovie) return null;

  const { year, title, summary, poster, genres } = JSON.parse(savedMovie);

  return (
    <div className="detail">
      <img src={poster} alt={title} title={title}></img>
      <div>
        <h3>{title}</h3>
        <h3>{year}</h3>
        <div className="detail-genres">
          {genres === undefined ? false : genres.map((genre, index) => {
            return <div key={index}>{genre}</div>
          })}
        </div>
        <p className="detail-summary">{summary}</p>
      </div>
    </div>
  );
}

export default Detail;