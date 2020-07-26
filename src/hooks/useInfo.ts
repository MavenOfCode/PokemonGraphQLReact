import { useQuery } from "@apollo/react-hooks";
import { QueryResult } from "@apollo/react-common";
import gql from "graphql-tag";

const GET_POKEMON_INFO = gql`
	{
		pokemons(first: 416) {
			id
			number
			name
			image
			evolutions {
				id
				number
				name
				image
			}
		}
	}
`;

export type Data = {
	pokemons: Pokemon[];
};

export type Pokemon = {
	id: string;
	image: string;
	name: string;
	evolutions: Evolution[];
};

export type Evolution = {
	name: string;
};

export function useInfo(): QueryResult {
	const result = useQuery<QueryResult>(GET_POKEMON_INFO);
	return result;
}
