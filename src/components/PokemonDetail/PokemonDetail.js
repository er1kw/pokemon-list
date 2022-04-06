import { useParams } from 'react-router-dom';
import { usePokemonDetail } from '../Data/usePokemonDetail';
import { Spinner } from '../Spinner/Spinner';
import { catchPokemon } from './catchPokemon';
import { useState, useRef } from 'react';
import { PlusLgIcon } from '../PlusLgIcon/PlusLgIcon';
import { Toast as bootstrapToast } from 'bootstrap';
import { useMyPokemons } from '../MyPokemonsProvider/useMyPokemons';
import { Logo } from '../Logo/Logo';
import styles from './PokemonDetail.module.scss';
import styled from '@emotion/styled';

function PokemonDetail(props) {
  const params = useParams(),
        pokemonDetail = usePokemonDetail(params.pokemonName),
        [isCatchingPokemon, setIsCatchingPokemon] = useState(false),
        myPokemons = useMyPokemons(),
        [isPokemonCatched, setIsPokemonCatched] = useState(false),
        logoElement = useRef(null),
        pokemonNicknameFormElement = useRef(null),
        pokemonElement = useRef(null),
        toastElement = props.params.messenger.element,
        setToastMessage = props.params.messenger.updater,
        pokemonNicknameElement = useRef(null);

  const PokeBallContainer = styled('div')`
    width: ${props => props.width};
    height: ${props => props.height};
    className: ${props => props.className};
  `;

  return (
    <>
      {
        pokemonDetail !== null
          && (
            <>
              <div className="text-center pt-2 pb-2">
                <h2 className="text-uppercase">{params.pokemonName}</h2>

                <div className="position-relative pt-3 pb-3">
                  <img
                    src={pokemonDetail.pokemon.sprites.front_default}
                    className="img-thumbnail img-fluid"
                    alt={params.pokemonName}
                    ref={pokemonElement}
                  />

                  <PokeBallContainer
                    className="position-absolute top-50 start-50 translate-middle"
                    width="96px"
                  >
                    <Logo
                      classes={
                        `${styles.Logo}
                        animate__animated
                        animate__flipInY
                        ${styles['Animation-paused']}`
                      }
                      logoRef={logoElement}
                    />
                    
                    <div className="position-absolute top-0 end-0 bottom-0 start-0">
                      <form
                        onSubmit={e => {
                          e.preventDefault();
                          
                          const toast = new bootstrapToast(
                            toastElement.current
                          );
                          
                          myPokemons.addMyPokemons(
                            params.pokemonName,
                            pokemonNicknameElement.current.value,
                            pokemonDetail.pokemon.sprites.front_default,
                            (message, isPokemonExceptionOccurred) => {
                              const cleanUpToastMessenger = () => {
                                if (!isPokemonExceptionOccurred) {
                                  pokemonElement.current.classList.remove(
                                    styles['Animation-forwardsFillMode'],
                                    'animate__animated',
                                    'animate__flipOutY'
                                  );
  
                                  setIsPokemonCatched(false);
                                } else {
                                  pokemonNicknameFormElement.current
                                    .classList.remove(
                                      'animate__animated',
                                      'animate__flipInX',
                                      styles['Animation-paused'],
                                      styles['Animation-running']
                                    );

                                  logoElement.current.classList.remove(
                                    'animate__animated',
                                    'animate__flipInY',
                                    styles['Animation-paused'],
                                    styles['Animation-running']
                                  );
                                }

                                toastElement.current.removeEventListener(
                                  'shown.bs.toast',
                                  cleanUpToastMessenger
                                );
                              };

                              toastElement.current.addEventListener(
                                'shown.bs.toast',
                                cleanUpToastMessenger,
                                { once: true }
                              );

                              setToastMessage(message);
                              toast.show();
                            }
                          );
                        }}
                        className={
                          `position-absolute
                          top-0
                          end-0
                          bottom-0
                          start-0
                          animate__animated
                          animate__flipInX
                          ${styles['Animation-paused']}`
                        }
                        ref={pokemonNicknameFormElement}
                      >
                        <div
                          className={
                            `input-group
                            position-absolute
                            top-50
                            start-50
                            translate-middle
                            ${styles.InputGroupDivision}`
                          }
                        >
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Nickname"
                            aria-label="Nickname"
                            aria-describedby="button-addon-nickname"
                            ref={pokemonNicknameElement}
                          />

                          <button
                            className="btn AddButton"
                            type="submit"
                            id="button-addon-nickname"
                          >
                            <PlusLgIcon />
                          </button>
                        </div>
                      </form>
                    </div>
                  </PokeBallContainer>
                </div>

                <button
                  type="button"
                  className="btn CatchButton"
                  onClick={() => {
                    const toggleCSSclasses = (el, ...cls) => {
                      return cls.map(cl => el.classList.toggle(cl));
                    };

                    const cleanUpPokemonNicknameForm = () => {
                      pokemonNicknameFormElement.current.classList.remove(
                        'animate__animated',
                        'animate__flipInX',
                        styles['Animation-paused'],
                        styles['Animation-running']
                      );

                      pokemonNicknameFormElement.current.removeEventListener(
                        'webkitAnimationEnd',
                        cleanUpPokemonNicknameForm
                      );

                      pokemonNicknameFormElement.current.removeEventListener(
                        'animationend',
                        cleanUpPokemonNicknameForm
                      );
                    };

                    const cleanUpLogo = () => {
                      logoElement.current.classList.remove(
                        'animate__animated',
                        'animate__flipInY',
                        styles['Animation-paused'],
                        styles['Animation-running']
                      );

                      pokemonNicknameFormElement.current.classList.add(
                        styles['Animation-running']
                      );
                      
                      logoElement.current.removeEventListener(
                        'webkitAnimationEnd',
                        cleanUpLogo
                      );

                      logoElement.current.removeEventListener(
                        'animationend',
                        cleanUpLogo
                      );

                      pokemonNicknameFormElement.current.addEventListener(
                        'webkitAnimationEnd',
                        cleanUpPokemonNicknameForm,
                        { once: true }
                      );
    
                      pokemonNicknameFormElement.current.addEventListener(
                        'animationend',
                        cleanUpPokemonNicknameForm,
                        { once: true }
                      );  
                    };

                    const cleanUpPokemon = () => {
                      pokemonElement.current.classList.remove(
                        'animate__animated',
                        'animate__shakeY',
                        'animate__infinite'
                      );
    
                      logoElement.current.addEventListener(
                        'webkitAnimationEnd',
                        cleanUpLogo,
                        { once: true }
                      );
    
                      logoElement.current.addEventListener(
                        'animationend',
                        cleanUpLogo,
                        { once: true }
                      );
                      
                      logoElement.current.classList.add(
                        styles['Animation-running']
                      );
                      
                      pokemonElement.current.removeEventListener(
                        'webkitAnimationEnd',
                        cleanUpPokemon
                      );

                      pokemonElement.current.removeEventListener(
                        'animationend',
                        cleanUpPokemon
                      );
                    };

                    pokemonElement.current.addEventListener(
                      'webkitAnimationEnd',
                      cleanUpPokemon,
                      { once: true }
                    );

                    pokemonElement.current.addEventListener(
                      'animationend',
                      cleanUpPokemon,
                      { once: true }
                    );

                    if (isPokemonCatched) {
                      pokemonNicknameFormElement.current.classList.add(
                        styles['Animation-forwardsFillMode'],
                        'animate__animated',
                        'animate__flipOutX'
                      );

                      const resetPokemonNicknameForm = () => {
                        pokemonNicknameFormElement.current.classList.remove(
                          styles['Animation-forwardsFillMode'],
                          'animate__animated',
                          'animate__flipOutX'
                        );

                        pokemonNicknameFormElement.current.classList.add(
                          'animate__animated',
                          'animate__flipInX',
                          styles['Animation-paused']
                        );

                        logoElement.current.classList.add(
                          styles['Animation-forwardsFillMode'],
                          'animate__animated',
                          'animate__flipOutY'
                        );

                        pokemonNicknameFormElement.current.removeEventListener(
                          'webkitAnimationEnd',
                          resetPokemonNicknameForm
                        );
    
                        pokemonNicknameFormElement.current.removeEventListener(
                          'animationend',
                          resetPokemonNicknameForm
                        );
                      };

                      const resetLogo = () => {
                        logoElement.current.classList.remove(
                          styles['Animation-forwardsFillMode'],
                          'animate__animated',
                          'animate__flipOutY'
                        );

                        logoElement.current.classList.add(
                          'animate__animated',
                          'animate__flipInY',
                          styles['Animation-paused']
                        );

                        pokemonElement.current.classList.remove(
                          styles['Animation-forwardsFillMode'],
                          'animate__animated',
                          'animate__flipOutY'
                        );

                        setIsPokemonCatched(false);
                        
                        logoElement.current.removeEventListener(
                          'webkitAnimationEnd',
                          resetLogo
                        );
    
                        logoElement.current.removeEventListener(
                          'animationend',
                          resetLogo
                        );
                      };
    
                      logoElement.current.addEventListener(
                        'webkitAnimationEnd',
                        resetLogo,
                        { once: true }
                      );
    
                      logoElement.current.addEventListener(
                        'animationend',
                        resetLogo,
                        { once: true }
                      );

                      pokemonNicknameFormElement.current.addEventListener(
                        'webkitAnimationEnd',
                        resetPokemonNicknameForm,
                        { once: true }
                      );
    
                      pokemonNicknameFormElement.current.addEventListener(
                        'animationend',
                        resetPokemonNicknameForm,
                        { once: true }
                      );
                    } else {
                      toggleCSSclasses(
                        pokemonElement.current,
                        'animate__animated',
                        'animate__shakeY',
                        'animate__infinite'
                      );

                      setIsCatchingPokemon(true);
                      const toast = new bootstrapToast(toastElement.current);

                      catchPokemon((message, isSuccessCatch) => {
                        if (isSuccessCatch) {
                          toggleCSSclasses(
                            pokemonElement.current,
                            styles['Animation-forwardsFillMode'],
                            'animate__animated',
                            'animate__flipOutY'
                          );

                          setIsPokemonCatched(isSuccessCatch);
                        } else {
                          pokemonElement.current.classList.remove(
                            'animate__animated',
                            'animate__shakeY',
                            'animate__infinite'
                          );
      
                          setIsPokemonCatched(false);
                        }
                        
                        setIsCatchingPokemon(false);
                        setToastMessage(message);
                        toast.show();
                      });
                    }
                  }}
                  disabled={isCatchingPokemon ? true : false}
                >
                  {
                    isCatchingPokemon
                      && (
                        <>
                          <span
                            className="spinner-border spinner-border-sm"
                            role="status" 
                            aria-hidden="true"
                          >
                          </span> Catching...
                        </>
                      )
                  }

                  {
                    !isCatchingPokemon && !isPokemonCatched
                      && <>Catch me if you can!</>
                  }

                  {
                    !isCatchingPokemon && isPokemonCatched
                      && <>Let go and try again?</>
                  }
                </button>
              </div>
              
              <dl className="row pt-2 pb-2">
                <dt className="col-sm-3 col-md-2 col-lg-1">Moves</dt>

                <dd className="col-sm-9 col-md-10 col-lg-5">
                  <ol className="list-group list-group-numbered">
                    {
                      pokemonDetail.pokemon.moves.map(value => (
                        <li className="list-group-item" key={value.move.name}>
                          {value.move.name}
                        </li>
                      ))
                    }
                  </ol>
                </dd>

                <dt className="col-sm-3 col-md-2 col-lg-1">Types</dt>

                <dd className="col-sm-9 col-md-10 col-lg-5">
                  <ol className="list-group list-group-numbered">
                    {
                      pokemonDetail.pokemon.types.map(value => (
                        <li className="list-group-item" key={value.type.name}>
                          {value.type.name}
                        </li>
                      ))
                    }
                  </ol>
                </dd>
              </dl>
            </>
          )
      }

      {
        pokemonDetail === null
          && (
            <div
              className={
                `d-flex
                justify-content-center
                align-items-center
                ${styles.SpinnerContainer}`
              }
            >
              <Spinner />
            </div>
          )
      }
    </>
  );
}

export { PokemonDetail };
