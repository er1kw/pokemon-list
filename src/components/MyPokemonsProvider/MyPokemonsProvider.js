import { useState } from 'react';
import { MyPokemonsContext } from './my-pokemons-context';

function MyPokemonsProvider(props) {  
  let myInitialPokemons = [];

  const [myPokemons, setMyPokemons] = useState(() => {
    if (typeof(Storage) !== 'undefined') {
      if (localStorage.getItem('myPokemons') === null) {
        localStorage.setItem('myPokemons', JSON.stringify(myInitialPokemons));
      }
      
      return JSON.parse(localStorage.getItem('myPokemons'));
    }
    
    return myInitialPokemons;
  });

  if (typeof(Storage) === 'undefined') {
    return <p>Sorry! No Web Storage support..</p>;
  }
      
  const addMyPokemons = (
    pokemonName = '',
    pokemonNickname = '',
    pokemonImage = '',
    callback = (message, isPokemonExceptionOccurred = false) => message
  ) => {
    if (pokemonName.length === 0) {
      return callback('Pokemon name required.', true);
    }

    if (pokemonNickname.length === 0) {
      return callback('Pokemon nick name required.', true);
    }

    const filteredPokemonIdxArr = [];

    myPokemons.forEach((value, index) => {
      if (
        value.name.toLowerCase() === pokemonName.toLowerCase()
        && value.nickname.toLowerCase() === pokemonNickname.toLowerCase()
      ) {
        filteredPokemonIdxArr.push(index);
      }
    });

    if (filteredPokemonIdxArr.length > 0) {
      return callback(
        'That Pokemon nickname already exists, please create another one.',
        true
      );
    }

    const filteredPokemonNthArr = [];
    
    myPokemons.forEach(value => {
      if (value.name.toLowerCase() === pokemonName.toLowerCase()) {
        filteredPokemonNthArr.push(value.nth);
      }
    });

    let nextPokemonNth = 1;

    if (filteredPokemonNthArr.length > 0) {
      nextPokemonNth = Math.max.apply(null, filteredPokemonNthArr) + 1;
    }

    myPokemons.push({
      name: pokemonName,
      nickname: pokemonNickname,
      nth: nextPokemonNth,
      image: pokemonImage,
    });
    
    localStorage.setItem('myPokemons', JSON.stringify(myPokemons));
    setMyPokemons(JSON.parse(localStorage.getItem('myPokemons')));
    return callback(`${pokemonNickname} has been added.`);
  };
  
  const removeMyPokemons = (
    pokemonName = '',
    pokemonNickname = '',
    callback = message => message
  ) => {
    if (pokemonName.length === 0) {
      return callback('Pokemon name required.');
    }

    if (pokemonNickname.length === 0) {
      return callback('Pokemon nick name required.');
    }

    const filteredPokemonIdxArr = [];

    myPokemons.forEach((value, index) => {
      if (
        value.name.toLowerCase() === pokemonName.toLowerCase()
        && value.nickname.toLowerCase() === pokemonNickname.toLowerCase()
      ) {
        filteredPokemonIdxArr.push(index);
      }
    });

    if (filteredPokemonIdxArr.length > 0) {
      myPokemons.splice(filteredPokemonIdxArr[0], 1);
    } else {
      return callback('Pokemon not found.');
    }
    
    localStorage.setItem('myPokemons', JSON.stringify(myPokemons));
    setMyPokemons(JSON.parse(localStorage.getItem('myPokemons')));
    return callback(`${pokemonNickname} has been removed.`);
  };
  
  const getMyPokemons = (
    pokemonName = '',
    callback = message => message
  ) => {
    if (pokemonName.length === 0) {
      if (myPokemons.length === 0) {
        return callback('Pokemon not found.');
      }
            
      return myPokemons;
    }

    const filteredPokemonArr = [];
    
    myPokemons.forEach(value => {
      if (value.name.toLowerCase() === pokemonName.toLowerCase()) {
        filteredPokemonArr.push(value);
      }
    });

    return filteredPokemonArr;
  };

  const value = { myPokemons, addMyPokemons, removeMyPokemons, getMyPokemons };
  
  return (
    <MyPokemonsContext.Provider value={value}>
      {props.children}
    </MyPokemonsContext.Provider>
  );
}

export { MyPokemonsProvider };
