import { Link } from 'react-router-dom';
import { useMyPokemons } from '../MyPokemonsProvider/useMyPokemons';
import { useEffect } from 'react';
import { Toast as bootstrapToast } from 'bootstrap';

function MyPokemons(props) {
  const myPokemons = useMyPokemons(),
        toastElement = props.params.messenger.element,
        setToastMessage = props.params.messenger.updater,
        myPokemonList = myPokemons.getMyPokemons();

  useEffect(() => {
    if (myPokemonList.constructor !== Array) {
      const toast = new bootstrapToast(toastElement.current);
      setToastMessage(myPokemonList);
      toast.show();
    }
  }, [myPokemonList, setToastMessage, toastElement]);

  return (
    <table className="table table-hover table-borderless table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Pokemon</th>
          <th scope="col">Name</th>
          <th scope="col">Nickname</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {
          myPokemonList.constructor === Array
            && myPokemonList.map((myPokemon, index) => {
              return (
                <tr key={`${myPokemon.name}-${index}`}>
                  <th scope="row" className="align-middle">{++index}</th>
                  <td>
                    <img
                      src={myPokemon.image}
                      className="img-thumbnail img-fluid"
                      alt={myPokemon.name}
                    />
                  </td>
                  <td className="align-middle">
                    <Link
                      to={`/pokemonList/${myPokemon.name}`}
                      className="btn btn-info text-capitalize"
                      role="button"
                    >
                      {myPokemon.name}
                    </Link>
                  </td>
                  <td className="align-middle">
                    {myPokemon.nickname}
                  </td>
                  <td className="align-middle">
                  <button
                    type="button"
                    className="btn RemoveButton"
                    onClick={
                      () => {
                        myPokemons.removeMyPokemons(
                          myPokemon.name,
                          myPokemon.nickname,
                          message => {
                            const toast = new bootstrapToast(
                              toastElement.current
                            );
                            
                            setToastMessage(message);
                            toast.show();
                          }
                        );
                      }
                    }
                  >
                    Remove
                  </button>
                  </td>
                </tr>
              );
            })
        }
      </tbody>
    </table>
  );
}

export { MyPokemons };
