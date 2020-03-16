import React from 'react';

import {useInfo} from './hooks/useInfo'

import './App.css';
import Characters from './components/Characters'

function App() {
  const {
    data,
    loading,
    error
  } = useInfo();
    return ( 
      <>
      {loading && <p> Loading... </p> }
      {error && <p> Error: {error && <p>{error}</p>}</p>}
      <React.Fragment>
        <h1 > Pokémons </h1>
        <p>
        <a href = "https://en.wikipedia.org/wiki/List_of_Pok%C3%A9mon" >
        The Pokémon franchise </a>{" "}
        revolves around 832 fictional species of collectible monsters, each having unique designs and skills.Conceived by Satoshi Tajiri in early 1989,
        Pokémon are creatures that inhabit the fictional Pokémon World.This is the list of the first 150 Pokémon as they appear in Pokémon Stadium,
        starting with Bulbasaur in the top left corner and ending with Mewtwo in
        the bottom right corner. 
        </p> 
        { data ?  
        (<Characters data = {data}/>) :
        (<p>data missing</p>)
        }
      </React.Fragment>
      </>
  );
}

export default App;