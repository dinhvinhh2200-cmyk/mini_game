/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts"
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
() {

eval("{\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n// Lấy các element từ DOM\nconst startBtn = document.getElementById('start-btn');\nconst resetBtn = document.getElementById('reset-btn');\nconst cancelBtn = document.getElementById('cancel-btn');\nconst usernameInput = document.getElementById('username');\nconst loginScreen = document.getElementById('login-screen');\nconst gameScreen = document.getElementById('game-screen');\nconst pokemonWrapper = document.querySelector('.pokemonWrapper');\nfunction shuffle() {\n    return __awaiter(this, void 0, void 0, function* () {\n        // Xóa bài cũ trước khi tráo bài mới\n        if (pokemonWrapper)\n            pokemonWrapper.innerHTML = \"Đang tải bài...\";\n        try {\n            let res = yield fetch('https://pokeapi.co/api/v2/pokemon?limit=10');\n            let data = yield res.json();\n            let doubleData = [...data.results, ...data.results];\n            let pokemonPromises = doubleData.map((pokemon) => __awaiter(this, void 0, void 0, function* () {\n                let res = yield fetch(pokemon.url);\n                return yield res.json();\n            }));\n            let pokemonArr = yield Promise.all(pokemonPromises);\n            // Tráo bài ngẫu nhiên\n            let randomPokemon = pokemonArr.sort(() => Math.random() - 0.5);\n            generatorPokemon(randomPokemon);\n        }\n        catch (error) {\n            console.error(\"Lỗi tải Pokemon:\", error);\n        }\n    });\n}\nfunction generatorPokemon(data) {\n    if (!pokemonWrapper)\n        return;\n    pokemonWrapper.innerHTML = data.map((pokemon) => `\r\n        <div class=\"pokemon\">\r\n            <div class=\"pokemon-card\"> \r\n                <div class=\"card-face front\"></div>\r\n                <div class=\"card-face back\">\r\n                    <img src=\"${pokemon.sprites.front_default}\" alt=\"${pokemon.name}\" />\r\n                </div>\r\n            </div>\r\n        </div>\r\n    `).join('');\n    // Gán sự kiện lật thẻ cho từng thẻ bài mới tạo\n    const cards = document.querySelectorAll('.pokemon-card');\n    cards.forEach(card => {\n        card.addEventListener('click', () => {\n            card.classList.toggle('is-flipped');\n        });\n    });\n}\n// --- XỬ LÝ SỰ KIỆN (Y1.1 & Y1.2) ---\n// 1. Nút Bắt đầu\nstartBtn === null || startBtn === void 0 ? void 0 : startBtn.addEventListener('click', () => {\n    const username = usernameInput.value.trim();\n    if (username === \"\")\n        return alert(\"Vui lòng nhập tên!\");\n    if (loginScreen && gameScreen) {\n        loginScreen.style.display = 'none';\n        gameScreen.style.display = 'block';\n        shuffle();\n    }\n});\n// 2. Nút Reset - Chơi lại (Y1.2b)\nresetBtn === null || resetBtn === void 0 ? void 0 : resetBtn.addEventListener('click', () => {\n    shuffle(); // Tráo lại bài mới\n});\n// 3. Nút Hủy - Quay lại (Y1.2a)\ncancelBtn === null || cancelBtn === void 0 ? void 0 : cancelBtn.addEventListener('click', () => {\n    if (loginScreen && gameScreen) {\n        gameScreen.style.display = 'none';\n        loginScreen.style.display = 'block';\n        usernameInput.value = \"\"; // Xóa tên cũ\n        if (pokemonWrapper)\n            pokemonWrapper.innerHTML = \"\"; // Dọn dẹp sàn đấu\n    }\n});\n\n\n//# sourceURL=webpack://asm_minigame/./src/index.ts?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"].call(__webpack_exports__);
/******/ 	
/******/ })()
;