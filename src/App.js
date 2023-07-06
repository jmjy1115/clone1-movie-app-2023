import React from 'react';

function Movie({ title, image }) {
  return (
    <>
      <h1>'{title}'</h1>
      <img src={image} alt='moiveImage'/>
    </>
  );
}

const movieList = [
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

function renderMovie(movie) {
  return <Movie title={movie.title} image={movie.image} />
}

function App() {
  return (
    <div>
      {movieList.map(renderMovie)}
    </div>
  );
}

export default App;
