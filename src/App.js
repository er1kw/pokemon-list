import { Routes, Route, Navigate } from 'react-router-dom';
import { PokemonList } from './components/PokemonList/PokemonList';
import { PokemonDetail } from './components/PokemonDetail/PokemonDetail';
import { MyPokemonList } from './components/MyPokemonList/MyPokemonList';
import { Layout } from './components/Layout/Layout';
import { useState, useRef } from 'react';
import { Toast } from './components/Toast/Toast';
import { NoMatchRoute } from './components/NoMatchRoute/NoMatchRoute';

function App() {
  const [pokemonListPage, setPokemonListPage] = useState(1),
        [pokemonListArray, setPokemonListArray] = useState([]),
        toastElement = useRef(null),
        [toastMessage, setToastMessage] = useState('');

  const pokemonListParams = {
    page: {
      data: pokemonListPage,
      updater: setPokemonListPage,
    },
    list: {
      data: pokemonListArray,
      updater: setPokemonListArray,
    },
  };

  const myPokemonListParams = {
    messenger: {
      updater: setToastMessage,
      element: toastElement,
    },
  };

  const noMatchRouteParams = {
    messenger: {
      updater: setToastMessage,
      element: toastElement,
    },
  };

  const pokemonDetailParams = {
    messenger: {
      updater: setToastMessage,
      element: toastElement,
    },
  };

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={<Navigate to="/pokemonList" replace={true} />}
          />

          <Route
            path="pokemonList"
            element={<PokemonList params={pokemonListParams} />}
          />
          
          <Route
            path="pokemonList/:pokemonName"
            element={<PokemonDetail params={pokemonDetailParams} />}
          />

          <Route
            path="myPokemonList"
            element={<MyPokemonList params={myPokemonListParams} />}
          />
          
          <Route
            path="*"
            element={<NoMatchRoute params={noMatchRouteParams} />}
          />
        </Route>
      </Routes>

      <Toast toastRef={toastElement} message={toastMessage} />
    </>
  );
}

export default App;
