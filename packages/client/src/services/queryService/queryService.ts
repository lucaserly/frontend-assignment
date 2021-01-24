import { gql } from '@apollo/client';
import { DocumentNode } from 'graphql';

const GET_POKEMONS_BY_TYPE = (type: String, limit?: Number): DocumentNode => gql`
query GetPokemonsByType {
  pokemonsByType (type: "${type}", limit: ${limit}) {
    edges {
      node {
        id
        name
        types
        classification
      }
    }
    pageInfo {
      hasNextPage
    }
  }
}
`;

const GET_POKEMON_BY_NAME = (q: String, limit?: Number): DocumentNode => gql`
query GetPokemons {
  pokemons (q: "${q}", limit: ${limit}) {
    edges {
      node {
        id
        name
        types
        classification
      }
    }
    pageInfo {
      hasNextPage
    }
  }
}
`;

const queryService = {
  GET_POKEMONS_BY_TYPE,
  GET_POKEMON_BY_NAME
};

export default queryService;