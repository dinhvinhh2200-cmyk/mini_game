// Các Interface định nghĩa dữ liệu (Y2 - Model) [cite: 2, 5]
interface Pokemons { name: string; url: string; }
interface Pokemon {
    id: number;
    name: string;
    sprites: { front_default: string; };
}

// Lấy các element [cite: 2]
const startBtn = document.getElementById('start-btn') as HTMLButtonElement;
const usernameInput = document.getElementById('username') as HTMLInputElement;
const loginScreen = document.getElementById('login-screen') as HTMLElement;
const gameScreen = document.getElementById('game-screen') as HTMLElement;
const resetBtn = document.getElementById('reset-btn') as HTMLButtonElement;
const cancelBtn = document.getElementById('cancel-btn') as HTMLButtonElement;

// Hàm lấy API và xáo trộn (Y1.3) [cite: 2]
async function shuffle() {
    let res: Response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
    let data: any = await res.json();

    // Nhân đôi mảng để có các cặp hình giống nhau [cite: 2]
    let doubleData = [...data.results, ...data.results];

    let pokemonPromises = doubleData.map(async (pokemon: Pokemons) => {
        let res: Response = await fetch(pokemon.url);
        return await res.json();
    });

    let pokemonArr = await Promise.all(pokemonPromises);
    // Xáo trộn ngẫu nhiên [cite: 2]
    let randomPokemon = pokemonArr.sort(() => Math.random() - 0.5);
    generatorPokemon(randomPokemon);
}

// Render Pokemon ra màn hình [cite: 2]
function generatorPokemon(data: any[]) {
    const wrapper = document.querySelector('.pokemonWrapper') as HTMLElement;
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

// Xử lý nút Bắt đầu (Y1.1) [cite: 4]
startBtn?.addEventListener('click', () => {
    const name = usernameInput.value.trim();
    const regex = /^[a-zA-Z0-9 ]+$/; // Kiểm tra ký tự đặc biệt [cite: 4]

    if (!name) return alert("Vui lòng nhập tên!");
    if (!regex.test(name)) return alert("Tên không được có ký tự đặc biệt!");

    loginScreen.style.display = 'none';
    gameScreen.style.display = 'block';
    shuffle();
});

// Nút Hủy và Reset (Y1.2) [cite: 4]
cancelBtn?.addEventListener('click', () => {
    gameScreen.style.display = 'none';
    loginScreen.style.display = 'block';
});

resetBtn?.addEventListener('click', () => shuffle());