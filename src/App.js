import React from 'react';

function Movie({ title, image }) {
  return (
    <>
      <h1>'{title}'</h1>
      <img src={image} alt={title} />
    </>
  );
}

const movieList = [
  {
    id: 1,
    title: 'Interstellar',
    image: '/image0.png',
  },
  {
    id: 2,
    title: 'The Flash',
    image: '/image1.png',
  },
  {
    id: 3,
    title: 'Elemental',
    image: '/image2.png',
  },
  {
    id: 4,
    title: 'Transformers',
    image: '/image3.png',
  },
  {
    id: 5,
    title: 'Guardians of the Galaxy',
    image: '/image4.png',
  },
]

function App() {
  return (
    <div>
      {movieList.map(movie => (
      <Movie key={movie.id} title={movie.title} image={movie.image} />
      ))}
    </div>
  );
}

export default App;
