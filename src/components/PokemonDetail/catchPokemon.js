function catchPokemon(callback) {
  const randomNumber = Math.random(),
        isSuccessCatch = randomNumber < 0.5 ? true : false,
        message = isSuccessCatch ? 'Well done!' : 'Sorry, you failed.',
        callbackRandomNumber = (Math.floor(Math.random() * 5) + 1) * 1000;

  setTimeout(() => callback(message, isSuccessCatch), callbackRandomNumber);
}

export { catchPokemon };
