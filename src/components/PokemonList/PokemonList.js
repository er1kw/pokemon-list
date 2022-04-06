import { Spinner } from '../Spinner/Spinner';
import { useState } from 'react';
import { Pokemons } from '../Pokemons/Pokemons';
import { LovePokemonSvg } from '../LovePokemonSvg/LovePokemonSvg';

function PokemonList(props) {
  const [isLoadingPokemon, setIsLoadingPokemon] = useState(false),
        pokemonListPage = props.params.page.data,
        setPokemonListPage = props.params.page.updater,
        [isDisplayLoadButton, setIsDisplayLoadButton] = useState(true);

  const pokemonsParams = {
    isLoading: {
      updater: setIsLoadingPokemon,
    },
    page: {
      data: pokemonListPage,
    },
    list: {
      data: props.params.list.data,
      updater: props.params.list.updater,
    },
    loadButton: {
      updater: setIsDisplayLoadButton,
    },
  };
      
  return (
    <div className="row">
      <div className="col pt-2 pb-2">
        <div className="table-responsive">
          <Pokemons params={pokemonsParams} />

          <div className="d-flex justify-content-center">
            {
              isDisplayLoadButton
                && (
                  <button
                    type="button"
                    className="btn LoadButton"
                    onClick={() => setPokemonListPage(pokemonListPage + 1)}
                    disabled={isLoadingPokemon ? true : false}
                  >
                    {isLoadingPokemon && <><Spinner /> Loading...</>}
                    {!isLoadingPokemon && <>Load more</>}
                  </button>
                )
            }
          </div>
        </div>
      </div>
      
      <div className="col">
        <div className="sticky-top StickyTopDivision d-flex justify-content-center align-items-center">
          <LovePokemonSvg />
        </div>
      </div>
    </div>
  );
}

export { PokemonList };
