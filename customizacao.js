function alternarDestaque(){
	var cards = document.getElementsByClassName("card")
	cards = Array.from(cards)

	for(let i = 0; i < cards.length; i++){
		cards[i].classList.toggle('card-destaque')
	}
}
setInterval(alternarDestaque, 1500)