class Card{
    constructor(sval, suit, val) {
        this.stringval = sval;
        this.suit = suit;
        this.val = val;
    }
    show(){
        Console.log("Stringval: " + stringval + " Suit: " + suit + " Val: " + val);
    }
}

class Deck {
    constructor(name) {
        this.name = name;
        this.cards = [];
        for (var i = 0; i < 4; i++){
            for (var j = 0; j < 13; j++){
                var suit = "";
                var val = "";
                if (i == 0){
                    suit = "Clubs";
                }
                else if(i == 1){
                    suit = "Spades";
                }
                else if(i == 2){
                    suit = "Hearts";
                }
                else {
                    suit = "Diamonds";
                }
                if (j == 0){
                    val = "Ace";
                }
                else if(j == 10){
                    val = "Jack";
                }
                else if(j == 11){
                    val = "Queen";
                }
                else if(j == 12){
                    val = "King";
                }
                else {
                    val = j.ToString();
                }
                var temp = new Card(val, suit, j );
                cards.push(temp);
            }
        }
    }
    shuffle(){
        for (var i = 0; i < cards.length; i++){
            var rnd = Math.floor(Math.random() * (this.cards.length-1 - i + 1)) + i;
            var temp = this.cards[i];
            this.cards[i] = this.cards[rnd];
            this.cards[rnd] = temp;
            this.cards[i].show();
        }
        return this;
    }
    reset() {
        this.cards = [];
        for (var i = 0; i < 4; i++){
            for (var j = 0; j < 13; j++){
                var suit = "";
                var val = "";
                if (i == 0){
                    suit = "Clubs";
                }
                else if(i == 1){
                    suit = "Spades";
                }
                else if(i == 2){
                    suit = "Hearts";
                }
                else {
                    suit = "Diamonds";
                }
                if (j == 0){
                    val = "Ace";
                }
                else if(j == 10){
                    val = "Jack";
                }
                else if(j == 11){
                    val = "Queen";
                }
                else if(j == 12){
                    val = "King";
                }
                else {
                    val = j.ToString();
                }
                var temp = new Card(val, suit, j );
                cards.push(temp);
            }
        }
        return this;
    }
    deal() {
        var rnd = Math.floor(Math.random() * (this.cards.length-1 - i + 1)) + i;
        var temp = cards[rnd];
        cards.splice(index, cards[rnd]);
        return this.temp;
    }
}

class Player {
    constructor(name) {
        this.name;
        this.hand = [];
    }
    take(deck){
        this.hand.push(deck.deal());
        return this;
    }
    discard(card){
        cards.splice(hand[card]);
        return this;
    }
}