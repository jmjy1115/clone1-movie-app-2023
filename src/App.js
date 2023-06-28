import React from 'react';

function Movie({ title, image }) {
  return (
    <>
      <h1>'{title}'</h1>
      <img src={image} alt='moiveImage'/>
    </>
  );
}

const movieLike = [
  {
    title: 'Interstellar',
    image: '/image0.png',
  },
  {
    title: 'The Flash',
    image: '/image1.png',
  },
  {
    title: 'Elemental',
    image: '/image2.png',
  },
  {
    title: 'Transformers',
    image: '/image3.png',
  },
  {
    title: 'Guardians of the Galaxy',
    image: '/image4.png',
  },
]

function App() {
  return (
    <div>
      {movieLike.map(movie => (<Movie title={movie.title} image={movie.image} />))}
    </div>
  );
}

export default App;
