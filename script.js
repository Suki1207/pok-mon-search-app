const searchBtnElement = document.querySelector("#search-button");
const imageContainer = document.querySelector(".image");

function searchPokemon() {
  const searchInputElement = document.querySelector("#search-input");
  const searchValue = searchInputElement.value.toLowerCase();

  const pokemonName = document.querySelector("#pokemon-name");
  const pokemonId = document.querySelector("#pokemon-id");
  const weight = document.querySelector("#weight");
  const height = document.querySelector("#height");
  const types = document.querySelector("#types");
  const hp = document.querySelector("#hp");
  const attack = document.querySelector("#attack");
  const defense = document.querySelector("#defense");
  const specialAttack = document.querySelector("#special-attack");
  const specialDefense = document.querySelector("#special-defense");
  const speed = document.querySelector("#speed");
  const imageContainer = document.querySelector(".image");

  pokemonName.textContent = "";
  pokemonId.textContent = "";
  weight.textContent = "";
  height.textContent = "";
  types.innerHTML = "";
  hp.textContent = "";
  attack.textContent = "";
  defense.textContent = "";
  specialAttack.textContent = "";
  specialDefense.textContent = "";
  speed.textContent = "";

  if (searchValue === "pikachu") {
    pokemonName.textContent = "PIKACHU";
    pokemonId.textContent = "25";
    weight.textContent = "60";
    height.textContent = "4";
    hp.textContent = "35";
    attack.textContent = "55";
    defense.textContent = "40";
    specialAttack.textContent = "50";
    specialDefense.textContent = "50";
    speed.textContent = "90";

    const electricType = document.createElement("p");
    electricType.textContent = "ELECTRIC";
    types.appendChild(electricType);

    imageContainer.innerHTML = `<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" alt="Pikachu" id="sprite">`;
  } else if (searchValue === "gengar" || searchValue === "94") {
    pokemonName.textContent = "GENGAR";
    pokemonId.textContent = "94";
    weight.textContent = "405";
    height.textContent = "15";
    hp.textContent = "60";
    attack.textContent = "65";
    defense.textContent = "60";
    specialAttack.textContent = "130";
    specialDefense.textContent = "75";
    speed.textContent = "110";

    const ghostType = document.createElement("p");
    ghostType.textContent = "GHOST";
    types.appendChild(ghostType);

    const poisonType = document.createElement("p");
    poisonType.textContent = "POISON";
    types.appendChild(poisonType);

    imageContainer.innerHTML = `<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png" alt="Gengar" id="sprite">`;
  } else {
    alert("Pokémon not found");
  }
}

searchBtnElement.addEventListener("click", searchPokemon);
