import { MyPokemons } from '../MyPokemons/MyPokemons';
import { PikachuCaptainAmericaSvg } from '../PikachuCaptainAmericaSvg/PikachuCaptainAmericaSvg';

function MyPokemonList(props) {
  const myPokemonsParams = {
    messenger: {
      updater: props.params.messenger.updater,
      element: props.params.messenger.element,
    },
  };

  return (
    <div className="row">
      <div className="col pt-2 pb-2">
        <div className="table-responsive">
          <MyPokemons params={myPokemonsParams} />
        </div>
      </div>
      
      <div className="col order-lg-first">
        <div className="sticky-top StickyTopDivision d-flex justify-content-center align-items-center">
          <PikachuCaptainAmericaSvg />
        </div>
      </div>
    </div>
  );
}

export { MyPokemonList };
