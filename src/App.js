import React from 'react';
import PropTypes from 'prop-types';

function Movie({ title, image, rating }) {
  return (
    <>
      <h1>'{title}'</h1>
      <h4>평점: {rating.toFixed(1)}/5.0</h4>
      <img src={image} alt={title} />
    </>
  );
}

const movieList = [
  {
    id: 1,
    title: 'Interstellar',
    image: '/image0.png',
    rating: 3.0,
  },
  {
    id: 2,
    title: 'The Flash',
    image: '/image1.png',
    rating: 4.3,
  },
  {
    id: 3,
    title: 'Elemental',
    image: '/image2.png',
    rating: 3.7,
  },
  {
    id: 4,
    title: 'Transformers',
    image: '/image3.png',
    rating: 4.5,
  },
  {
    id: 5,
    title: 'Guardians of the Galaxy',
    image: '/image4.png',
    rating: 4.2,
  },
]

function App() {
  return (
    <div>
      {movieList.map(movie => (
      <Movie key={movie.id} title={movie.title} image={movie.image} rating={movie.rating} />
      ))}
    </div>
  );
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
}

export default App;
