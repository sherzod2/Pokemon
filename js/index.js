let elPokemonList = document.querySelector(".pokemons__list");

for (let poke of pokemons) {
  let newItem = document.createElement("li");
  let newPokeSec = document.createElement("div");
  let newPokeImg = document.createElement("img");
  let newPokeAbout = document.createElement("div");
  let newPokeHeart = document.createElement("img");
  let newPokeItemHead = document.createElement("h3");
  let newPokeItemDesc = document.createElement("p");
  let newPokeItemInfo = document.createElement("p");

  newItem.setAttribute("class", "pokemons__item");
  newPokeSec.setAttribute("class", "pokemons__sec");
  newPokeImg.setAttribute("class", "pokemons__img text-center");
  newPokeImg.setAttribute("src", poke.img);
  newPokeImg.setAttribute("alt", poke.name);
  newPokeImg.setAttribute("width", "157");
  newPokeImg.setAttribute("height", "157");
  newPokeAbout.setAttribute("class", "pokemons__about");

  newPokeHeart.setAttribute("class", "pokemons__heart");
  newPokeHeart.setAttribute("src", "./images/heart.svg");
  newPokeHeart.setAttribute("alt", "heart logosi");
  newPokeHeart.setAttribute("width", "30");
  newPokeHeart.setAttribute("height", "30");
  newPokeItemHead.setAttribute("class", "pokemons__item-title");
  newPokeItemDesc.setAttribute("class", "pokemons__item-desc");
  newPokeItemInfo.setAttribute("class", "pokemons__item-info");

  newPokeItemHead.textContent = poke.name;
  newPokeItemDesc.textContent = poke.type;
  newPokeItemInfo.textContent = `${poke.weight} ${Math.round(
    Math.random() * 100
  )} age`;

  elPokemonList.appendChild(newItem);
  newItem.appendChild(newPokeSec);
  newPokeSec.appendChild(newPokeImg);
  newItem.appendChild(newPokeAbout);
  newPokeAbout.appendChild(newPokeHeart);
  newPokeAbout.appendChild(newPokeItemHead);
  newPokeAbout.appendChild(newPokeItemDesc);
  newPokeAbout.appendChild(newPokeItemInfo);
}
