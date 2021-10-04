const arrCardNum = ['ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
const arrCardSuit = ['Hearts', 'Spades', 'Clubs', 'Dimonds'];
const arrDealer= ['Dave', 'Mia', 'Luca', 'Ivy', 'Quinn', 'Atlas','Lucas', 'Alice', 'Skylar', 'Parker'];


const Hand = () => {
	let card1 = funcCardNum[Math.floor(Math.random() * funcCardNum.length)] + ' of ' + funcCardSuit[Math.floor(Math.random() * funcCardSuit.length)];
	let card2 = funcCardNum[Math.floor(Math.random() * funcCardNum.length)] + ' of ' + funcCardSuit[Math.floor(Math.random() * funcCardSuit.length)];
	while (card1 === card2) {
		card2 = funcCardNum[Math.floor(Math.random() * funcCardNum.length)] + ' of ' + funcCardSuit[Math.floor(Math.random() * funcCardSuit.length)];
	}
	let dealer = funcDealer[Math.floor(Math.random() * funcDealer.length)];
	return `${dealer} has dealt you the hand: ${card1} & ${card2}`;
}

console.log(Hand())