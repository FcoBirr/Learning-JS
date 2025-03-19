const suits = ["spades", "diamonds", "hearts", "clubs"];
const ranks = ['2','3','4','5','6','7','8','9','10','Jack','Queen','King','ace'];
const effects = ["damage","weapon","healing"];
let hp = 20;

function getDeck(){
    let deck = new Array();
    for(let i = 0; i < suits.length; i++){
        for(let x = 0; x < ranks.length; x++){
            let card = {Rank: ranks[x], Suit: suits[i], Power: x + 2, Effect: effects[i % 3]};
            deck.push(card);

        }
    }
    return deck;
}

function shuffleArray(deck){
    for(let i = 0; i < 1000; i++){
        let ind1 = Math.floor(Math.random() * deck.length);
        let ind2 = Math.floor(Math.random() * deck.length);
        let placeholder = deck[ind1];
        deck[ind1] = deck[ind2];
        deck[ind2] = placeholder;
    }
}



let deck = getDeck();
shuffleArray(deck);
console.log(deck[51]);
let card = deck[51];
deck.pop();
console.log(deck[51], card);
deck.unshift(card);
console.log(deck[0]);
console.log(deck[51]);

