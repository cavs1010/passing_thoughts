import React, {useState} from 'react';
import { generateId, getNewExpirationTime } from './utilities';

export function AddThoughtForm(props) {
  const [text, setText] = useState('');

  const handleTextChange = (event) => setText(event.target.value);

  const handleSubmit = (event) =>{
    event.preventDefault();
    if (text === ''){
      return;
    }
    const newThought = 
    {
      id : generateId(),
      text : text,
      expiresAt : getNewExpirationTime(),
      isPerm: false
    }
    props.addThought(newThought);
    setText("");
  };

  return (
    <form className="AddThoughtForm" onSubmit={handleSubmit}>
      <input
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
        onChange={handleTextChange}
        value = {text}
      />
      <input type="submit" value="Add"  />
    </form >
  );
}
