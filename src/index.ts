// Định nghĩa Interface (Y2 - Model) [cite: 15]
interface Pokemons { name: string; url: string; }
interface Pokemon {
    id: number;
    name: string;
    sprites: { front_default: string; };
}

const startBtn = document.getElementById('start-btn');
const usernameInput = document.getElementById('username') as HTMLInputElement;

// Hàm xáo trộn và lấy dữ liệu API [cite: 15]
async function shuffle() {
    let res: Response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
    let data = await res.json();
    let doubleData = [...data.results, ...data.results];

    let pokemonPromises = doubleData.map(async (pokemon: Pokemons) => {
        let res = await fetch(pokemon.url);
        return await res.json();
    });

    let pokemonArr = await Promise.all(pokemonPromises);
    let randomPokemon = pokemonArr.sort(() => Math.random() - 0.5);
    generatorPokemon(randomPokemon);
}

function generatorPokemon(data: any[]) {
    const wrapper = document.querySelector('.pokemonWrapper');
    if (wrapper) {
        wrapper.innerHTML = data.map((p: Pokemon) => `
            <div class="pokemon">
                <div class="pokemon-card" onclick="this.classList.toggle('is-flipped')"> 
                    <div class="card-face front"></div>
                    <div class="card-face back">
                        <img src="${p.sprites.front_default}" alt="${p.name}" />
                    </div>
                </div>
                <span class="id">#$${p.id}</span>
            </div>
        `).join('');
    }
}

// Điều khiển màn hình [cite: 15]
startBtn?.addEventListener('click', () => {
    const name = usernameInput.value.trim();
    if (!name || !/^[a-zA-Z0-9 ]+$/.test(name)) {
        return alert("Tên không hợp lệ!");
    }
    document.getElementById('login-screen')!.style.display = 'none';
    document.getElementById('game-screen')!.style.display = 'block';
    shuffle();
});