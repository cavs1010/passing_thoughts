import React, { useEffect } from 'react';

export function Thought(props) {
  const { thought, removeThought, addLongTerm } = props;


  useEffect(()=>{
    const timeRemaining = thought.isPerm ? 99999999:thought.expiresAt - Date.now();
    const timeout = setTimeout(()=>{
      removeThought(thought.id);
    }, timeRemaining);
    return () =>{
      (clearTimeout(timeout));
    }
  }, [thought]);

  const handleRemoveClick = () => {
    console.log(thought.id);
    removeThought(thought.id);
  };
  
  const handleLongTermClick = () =>{
    addLongTerm(thought);
  };

  return (
    <li className="Thought">
      <button
        aria-label="Remove thought"
        className="remove-button"
        onClick={thought.isPerm?handleRemoveClick:handleLongTermClick}
      >
        {thought.isPerm?'x':'+'}
      </button>
      <div className="text">{thought.text}</div>
    </li>
  );
}
