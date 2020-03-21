let currentPlayer = 'X';
let board = [];

const gameBoard = (player, turn) => {
	board.push(playersTurn(player, turn))
	console.log(board);
}

// factory function to create players move
const playersTurn = (player, turn) => {
	let xy = player;
	let mark = turn;

	return {
		player: xy,
		turn: mark
	}
}

const checkMarked = (id) => {
	for(var i = 0; i < board.length; i++) {
		if(board[i].turn == id) {
			return true;
		}
	}

	return false;
}

const markBoard = (id) => {
	let specificCell = document.querySelector('#' + id);
	specificCell.innerHTML = '<h1 class="mark" id="mark_' + id + '">' + currentPlayer + '</h1>';
	gameBoard(currentPlayer, id);

	if(currentPlayer == 'X') {
		currentPlayer = 'O';
	} else {
		currentPlayer = 'X';
	}
}

const cell = document.querySelectorAll('.cell').forEach(cell =>
	cell.addEventListener('click', () => clickedCell(cell.id))
);

const clickedCell = (id) => {
	if(typeof board !== undefined && board.length > 0) {
		if(checkMarked(id) == true) {
			alert('already been marked');
		} else {
			markBoard(id);
		}

	} else {
		markBoard(id);
	}
}
