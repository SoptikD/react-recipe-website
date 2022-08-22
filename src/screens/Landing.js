import React, { useState } from 'react';
import '../App.css';
import {useNavigate } from 'react-router-dom';

function Landing() {
  const [recipe,setRecipe] = useState(""); // whats typed into input
  const navigate = useNavigate(); // from reaact router

  const submitForm = (event) => {
    event.preventDefault();
    navigate('/recipe/' + recipe);
  }

  return (
    <div class="landing-body">
      
      <div class="centered">

        <h1 class='landing-title'>The Cutting Board</h1>
        <form>
          <input onChange={(event) => {setRecipe(event.target.value)}} class="search-input" type="search" placeholder='Find a Recipe'></input>
          <button onClick={submitForm} class='submit-btn' type='submit'>Search</button>
        </form>

      </div>

    </div>
  )
}

export default Landing
