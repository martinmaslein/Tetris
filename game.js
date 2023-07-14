const grid = document.getElementById('tetris-grid');

// Configura el tamaño del tablero
const ROWS = 20;
const COLS = 10;

// Crea una matriz bidimensional para representar el tablero
const board = [];
for (let row = 0; row < ROWS; row++) {
    board[row] = [];
    for (let col = 0; col < COLS; col++) {
        board[row][col] = 0;
    }
}

// Dibuja el tablero en la interfaz gráfica
function drawBoard() {
    let html = '';
    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            const cellValue = board[row][col];
            const cellColor = cellValue === 0 ? '#fff' : '#000'; // Cambia los colores según el valor de la celda
            html += `<div class="cell" style="background-color: ${cellColor}"></div>`;
        }
    }
    grid.innerHTML = html;
}

// Llama a la función para dibujar el tablero inicial
drawBoard();