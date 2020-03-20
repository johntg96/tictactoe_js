let currentPlayer = 'X';

const gameBoard = () => {
	let board = [];
}

const player = xy => {

}

const cell = document.querySelectorAll('.cell').forEach(cell =>
	cell.addEventListener('click', () => clickedCell(cell.id))
);

const clickedCell = (id) => {
	let specificCell = document.querySelector('#' + id);
	specificCell.innerHTML = '<h1 id="mark">' + currentPlayer + '</h1>';

	if(currentPlayer == 'X') {
		currentPlayer = 'O';
	} else {
		currentPlayer = 'X';
	}
}