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

eval("{\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n// Lấy các element [cite: 2]\nconst startBtn = document.getElementById('start-btn');\nconst usernameInput = document.getElementById('username');\nconst loginScreen = document.getElementById('login-screen');\nconst gameScreen = document.getElementById('game-screen');\nconst resetBtn = document.getElementById('reset-btn');\nconst cancelBtn = document.getElementById('cancel-btn');\n// Hàm lấy API và xáo trộn (Y1.3) [cite: 2]\nfunction shuffle() {\n    return __awaiter(this, void 0, void 0, function* () {\n        let res = yield fetch('https://pokeapi.co/api/v2/pokemon?limit=10');\n        let data = yield res.json();\n        // Nhân đôi mảng để có các cặp hình giống nhau [cite: 2]\n        let doubleData = [...data.results, ...data.results];\n        let pokemonPromises = doubleData.map((pokemon) => __awaiter(this, void 0, void 0, function* () {\n            let res = yield fetch(pokemon.url);\n            return yield res.json();\n        }));\n        let pokemonArr = yield Promise.all(pokemonPromises);\n        // Xáo trộn ngẫu nhiên [cite: 2]\n        let randomPokemon = pokemonArr.sort(() => Math.random() - 0.5);\n        generatorPokemon(randomPokemon);\n    });\n}\n// Render Pokemon ra màn hình [cite: 2]\nfunction generatorPokemon(data) {\n    const wrapper = document.querySelector('.pokemonWrapper');\n    wrapper.innerHTML = data.map((p) => `\r\n        <div class=\"pokemon\" onclick=\"this.classList.toggle('is-flipped')\">\r\n            <div class=\"pokemon-card\"> \r\n                <div class=\"card-face front\"></div>\r\n                <div class=\"card-face back\">\r\n                    <img src=\"${p.sprites.front_default}\" alt=\"${p.name}\" />\r\n                </div>\r\n                <span class=\"id\">#$${p.id}</span>\r\n            </div>\r\n        </div>\r\n    `).join('');\n}\n// Xử lý nút Bắt đầu (Y1.1) [cite: 4]\nstartBtn === null || startBtn === void 0 ? void 0 : startBtn.addEventListener('click', () => {\n    const name = usernameInput.value.trim();\n    const regex = /^[a-zA-Z0-9 ]+$/; // Kiểm tra ký tự đặc biệt [cite: 4]\n    if (!name)\n        return alert(\"Vui lòng nhập tên!\");\n    if (!regex.test(name))\n        return alert(\"Tên không được có ký tự đặc biệt!\");\n    loginScreen.style.display = 'none';\n    gameScreen.style.display = 'block';\n    shuffle();\n});\n// Nút Hủy và Reset (Y1.2) [cite: 4]\ncancelBtn === null || cancelBtn === void 0 ? void 0 : cancelBtn.addEventListener('click', () => {\n    gameScreen.style.display = 'none';\n    loginScreen.style.display = 'block';\n});\nresetBtn === null || resetBtn === void 0 ? void 0 : resetBtn.addEventListener('click', () => shuffle());\n\n\n//# sourceURL=webpack://asm_minigame/./src/index.ts?\n}");

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