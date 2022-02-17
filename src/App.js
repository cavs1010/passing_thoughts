import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { AddThoughtForm } from './AddThoughtForm';
import { Thought } from './Thought';

import { generateId, getNewExpirationTime } from './utilities';

function  App() {
   const [thoughts, setThoughts] = useState([
  ]);

  const [permThoughts, setPermThoughts] = useState([
    {
    }
  ])
   //2.
  const addThought = (thought) =>{
    setThoughts((prev) => [thought, ...prev]);
  };

  const removeThought = (thoughtIdToRemove) =>{
    setThoughts(thoughts.filter((thought) => thought.id !== thoughtIdToRemove))
    setPermThoughts(permThoughts.filter((thought) => thought.id !== thoughtIdToRemove))
  };

  const becomeLongTerm = (thought) =>{
    thought.isPerm = true;
    setPermThoughts((prev) => [...prev, thought]);
    setThoughts(thoughts.filter((thoughtMine) => thoughtMine.id !== thought.id));
    //console.log(thought.id)
  };

  return (
    <div className="App">
      <header>
        <h1>Passing Thoughts</h1>
      </header>
      <main>
        <AddThoughtForm addThought={addThought}/>
        <div className='gridContainer'>
         
          <ul className="thoughts">
            <h3>Temporary</h3>
            {thoughts.map((thought) => (
              <Thought key={thought.id} thought={thought} removeThought={removeThought} addLongTerm={becomeLongTerm}/>
            ))}
          </ul>
          <ul className='permThought'>
            <h3>Long Term</h3>
          {permThoughts.map((permThought) => (
              <Thought key={permThought.id} thought={permThought} removeThought={removeThought} addLongTerm={becomeLongTerm}/>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
ReactDOM.render(<App />, document.getElementById('app'));

