import React from 'react';

import {
  readFile,
  writeFile,
} from '../helpers/file-helpers';

// read file
const DATABASE_PATH = '/src/database.json';
let {hits} = JSON.parse(readFile(DATABASE_PATH));

hits++;

// write file
writeFile(
  DATABASE_PATH,
  JSON.stringify({hits})
);

function Home() {
  return (
    <main>
      <h1>Welcome!</h1>
      <p>You are visitor number {hits}.</p>
    </main>
  );
}

export default Home;
