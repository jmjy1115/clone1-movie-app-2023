import React from 'react';

function Movie(info) {
  const { title } = info;
  return <h1>'{title}'</h1>
}

function App() {
  return (
    <div>
      <h1>Hello World!</h1>
      <Movie title='Interstellar' />
      <Movie title='The Flash' />
      <Movie title='Elemental' />
      <Movie title='Transformers' />
      <Movie title='Guardians of the Galaxy' />
    </div>
  );
}

export default App;
