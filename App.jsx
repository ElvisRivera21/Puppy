import React, { useState } from 'react';
import { puppyList } from './data.js';
import './App.css';


function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  const handlePuppyClick = (id) => {
    setFeatPupId(id);
  };

  const featuredPup = puppies.find((pup) => pup.id === featPupId);

  return (
    <>
      <div className="App">
        {puppies.map((puppy) => (
          <p onClick={() => handlePuppyClick(puppy.id)} key={puppy.id}>
            {puppy.name}
          </p>
        ))}
      </div>

      {/* Display selected puppy information */}
      {featPupId && <p>Selected Puppy ID: {featPupId}</p>}

      <div>
        {featuredPup && (
          <>
            <h2>{featuredPup.name}</h2>
            <p>Breed: {featuredPup.breed}</p>
            <p>Age: {featuredPup.age}</p>
            {/* Add more details as needed */}
          </>
        )}
      </div>
    </>
  );
}

export default App;