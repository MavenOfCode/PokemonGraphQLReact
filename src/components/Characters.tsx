/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Data, Pokemon, Evolution } from "../hooks/useInfo";

type Props = {
	data: Data;
};

function renderEvolution(evolutions: Evolution[]) {
	if (!evolutions || evolutions.length === 0) return <p></p>;
	else
		return (
			<>
				<h4>
					<em>Evolutions:</em>
				</h4>
				{evolutions.map((evo, indx) => (
					<p key={indx}>{evo.name}</p>
				))}
			</>
		);
}
function renderPokemon(pokemons: Pokemon[]) {
	if (!pokemons || pokemons.length === 0)
		return <div>No Pokemon Found :(</div>;
	return (
		<>
			{pokemons.map((pokemon, index) => (
				<div key={index} className="card">
					<img src={pokemon.image} />
					<div className="card-body">
						<h3>{pokemon.name}</h3>
						{renderEvolution(pokemon.evolutions)}
					</div>
				</div>
			))}
		</>
	);
}

export default function Character({ data: { pokemons } }: Props) {
	return <div className="container">{renderPokemon(pokemons)}</div>;
}
