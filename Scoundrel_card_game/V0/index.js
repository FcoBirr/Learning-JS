const suits = ["spades", "diamonds", "hearts", "clubs"];
const ranks = ['2','3','4','5','6','7','8','9','10','Jack','Queen','King','ace'];
const effects = ["damage","weapon","healing"];
const Field = document.querySelector(".field")
let hp = 20;
let attack = 0;
let durability = 15;
let can_run = true;

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

function deal(deck){
    let field = new Array();
    let temp_card;
    for(let i = 0; i < 4; i++){
        temp_card = deck[deck.length - 1];
        field.unshift(temp_card);
        deck.pop();
    }
    return field;
}

function runAway(field, deck){
    shuffleArray(field);
    let card;
    while(field.length > 0){
        card = field[field.length - 1];
        deck.unshift(card);
        field.pop();
    }
    can_run = false
}

function displayField(field, deck){
    const card1 = document.createElement("p");
    const card2 = document.createElement("p");
    const card3 = document.createElement("p");
    const card4 = document.createElement("p");

    card1.textContent = `${field[0].Rank} of ${field[0].Suit}`;
    card2.textContent = `${field[1].Rank} of ${field[1].Suit}`;
    card3.textContent = `${field[2].Rank} of ${field[2].Suit}`;
    card4.textContent = `${field[3].Rank} of ${field[3].Suit}`;

    Field.appendChild(card1);
    Field.appendChild(card2);
    Field.appendChild(card3);
    Field.appendChild(card4);

}

let deck = getDeck();
shuffleArray(deck);
field = deal(deck);
displayField(field, deck);