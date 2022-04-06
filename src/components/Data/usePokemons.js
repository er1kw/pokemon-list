import { gql, useQuery } from '@apollo/client';

const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      status
      message
      results {
        url
        name
        image
      }
    }
  }
`;

function usePokemons(page = 1) {
  const gqlVariables = {
    limit: 10,
    offset: 1,
  };
  
  gqlVariables.offset = (page - 1) * gqlVariables.limit + 1;

  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: gqlVariables,
  });

  if (loading) return null;
  if (error) return `Error! :( ${error.message}`;

  console.log('Response from server', data);
  return {
    list: data.pokemons.results,
    isHideLoadButton: Math.ceil(data.pokemons.count / gqlVariables.limit) === page,
  };
}

export { usePokemons };
