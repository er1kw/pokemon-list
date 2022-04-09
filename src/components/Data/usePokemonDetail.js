import { gql, useQuery } from '@apollo/client';

const GET_POKEMON_DETAIL = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      sprites {
        front_default
      }
      moves {
        move {
          name
        }
      }
      types {
        type {
          name
        }
      }
    }
  }
`;

function usePokemonDetail(pokemonName) {
  const { loading, error, data } = useQuery(GET_POKEMON_DETAIL, {
    variables: {name: pokemonName},
  });

  if (loading) return null;
  if (error) return `Error! :( ${error.message}`;

  return data;
}

export { usePokemonDetail };
