import { usePokemons } from '../Data/usePokemons';
import { Link } from 'react-router-dom';
import { useMyPokemons } from '../MyPokemonsProvider/useMyPokemons';
import { useEffect } from 'react';

function Pokemons(props) {
  const pokemons = usePokemons(props.params.page.data),
        myPokemons = useMyPokemons(),
        setIsLoadingPokemon = props.params.isLoading.updater,
        setPokemonArray = props.params.list.updater,
        pokemonArray = props.params.list.data,
        setIsDisplayLoadButton = props.params.loadButton.updater;

  useEffect(() => {
    if (pokemons === null) {
      setIsLoadingPokemon(true);
      return;
    }

    if (
      pokemonArray.map(value => value.name).indexOf(pokemons.list[0].name) > -1
    ) {
      return;
    }

    setPokemonArray(array => array.concat(pokemons.list));
    setIsLoadingPokemon(false);
    
    if (pokemons.isHideLoadButton) {
      setIsDisplayLoadButton(false);
    }
  }, [
    pokemons,
    setIsLoadingPokemon,
    setPokemonArray,
    pokemonArray,
    setIsDisplayLoadButton
  ]);

  return (
    <table className="table table-hover table-borderless table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Pokemon</th>
          <th scope="col">Name</th>
          <th scope="col">Owned Total</th>
        </tr>
      </thead>
      <tbody>
        {
          pokemonArray.map((pokemon, index) => {
            return (
              <tr key={pokemon.name}>
                <th scope="row" className="align-middle">{++index}</th>
                <td>
                  <img
                    src={pokemon.image}
                    className="img-thumbnail img-fluid"
                    alt={pokemon.name}
                  />
                </td>
                <td className="align-middle">
                  <Link
                    to={`/pokemonList/${pokemon.name}`}
                    className="btn btn-info text-capitalize"
                    role="button"
                  >
                    {pokemon.name}
                  </Link>
                </td>
                <td className="align-middle">
                  {myPokemons.getMyPokemons(pokemon.name).length}
                </td>
              </tr>
            );
          })
        }
      </tbody>
    </table>
  );
}

export { Pokemons };
