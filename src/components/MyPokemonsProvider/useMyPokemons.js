import { MyPokemonsContext } from './my-pokemons-context';
import React from 'react';

function useMyPokemons() {
  return React.useContext(MyPokemonsContext);
}

export { useMyPokemons };
