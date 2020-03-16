/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import {Data} from '../hooks/useInfo';

type Props ={
  data: Data;
}

export default function Character({data} :Props){
	console.log(data)
	const pokemons = data.pokemons
	console.log(pokemons)
	return(
	<div className="container">
      {data &&
        data.pokemons &&
        data.pokemons.map((pokemon, index) => (
          <div key={index} className="card">
            <img src={pokemon.image}/>
            <div className="card-body">
              <h3>{pokemon.name}</h3>
              <p>
                {pokemon.evolutions && pokemon.evolutions.length !== 0 && (
                  <p>
                    {" "}
                    Evolutions:
                    {pokemon.evolutions.map((e, indx) => {
                      return <p key={indx}> {e.name} </p>;
                    })}
                  </p>
                )}
              </p>
            </div>
          </div>
        ))}
		</div>
	)
}