const container = document.querySelector(".container--pokemons")
const todosPokemons = [
  {
    id: 1,
    nome: "Pikachu",
    tipo: "Elétrico",
    img: "pika.png",
    hp: 50,
    attack: 36,
    def: 48,
    specialAtt: 72,
    specialDef: 66,
    speed: 88,
    colores: {
        primaria: "#FAD961",
        secundaria: "#F76B1C",
    }
  },
  {
    id: 2,
    nome: "Bulbasaur",
    tipo: "Mato",
    img: "bulba.webp",
    hp: 50,
    attack: 36,
    def: 48,
    specialAtt: 72,
    specialDef: 66,
    speed: 88,
    colores: {
        primaria: "#11998e",
        secundaria: "#38ef7d",
    }
  },
  {
    id: 3,
    nome: "Charmander",
    tipo: "Fogo",
    img: "char.webp",
    hp: 50,
    attack: 36,
    def: 48,
    specialAtt: 72,
    specialDef: 66,
    speed: 88,
    colores: {
        primaria: "#FAD961",
        secundaria: "#F76B1C",
    }
  }
];

const timeAtual = [];


const criarCard = (pokemon) => {
    const estiloGradient = `background-image: radial-gradient(${pokemon.colores.primaria} 0%, ${pokemon.colores.secundaria} 100%)`
    const fillColor = `background-color: ${pokemon.colores.primaria}`
    return `<article class="card" style="${estiloGradient}">
    <header>
        <h2 class="card--title">${pokemon.nome}</h2>
        <div class="container--img">
            <img class="card--img" src="${pokemon.img}" alt="Imagem do Pokémon">
            <img class="floating--icon" src="Pokeball.webp" alt="">
        </div>
    </header>
    <div class="card--details">
        <nav>
            <h3>Desc</h3>
            <h3 class="selected">Stats</h3>
            <h3>Habilidades</h3>
            <h3>Evoluções</h3>
            <h3>Local</h3>
        </nav>
        <section class="container--stats">
            <p class="stats--hp">HP</p>
            <div class="bar--hp">
                <div class="hp--fill" style="width: ${pokemon.hp}%; ${fillColor}"></div>
            </div>
            <p class="stats--att">Attack</p>
            <div class="bar--att">
                <div class="att--fill" style="width: ${pokemon.attack}%; ${fillColor}"></div>
            </div>
            <p class="stats--def">Defense</p>
            <div class="bar--def">
                <div class="def--fill" style="width: ${pokemon.def}%; ${fillColor}"></div>
            </div>
            <p class="stats--satt">Sp. Attack</p>
            <div class="bar--satt">
                <div class="satt--fill" style="width: ${pokemon.specialAtt}%; ${fillColor}"></div>
            </div>
            <p class="stats--sdef">Sp. Defense</p>
            <div class="bar--sdef">
                <div class="sdef--fill" style="width: ${pokemon.specialDef}%; ${fillColor}"></div>
            </div>
            <p class="stats--spd">Speed</p>
            <div class="bar--spd">
                <div class="spd--fill" style="width: ${pokemon.speed}%; ${fillColor}"></div>
            </div>
        </section>
        <div class="container--btns">
            <button class="bn632-hover"><span class="material-symbols-outlined">
                add_circle
                </span> Add</button>
        </div>
    </div>
</article>`
}

// const carregarCards = () => {
//     for (let i = 0; i < todosPokemons.length; i++) {
//       container.insertAdjacentHTML("afterbegin",criarCard(todosPokemons[i])  );
//     }
// }

const carregarCards = () => {
    for (const pokemon of todosPokemons) {
        container.insertAdjacentHTML("afterbegin", criarCard(pokemon))
    }
    }

const adicionarPokemon = (nomePokemon) => {
    if (timeAtual.length < 6) {
        timeAtual.push(nomePokemon)
    } else {
        alert("Time está cheio!")
    }
}


// Time começa sempre com o primeiro Pokemon da lista.
adicionarPokemon(todosPokemons[0]);

// const addBtn = document.querySelectorAll(".bn632-hover");
