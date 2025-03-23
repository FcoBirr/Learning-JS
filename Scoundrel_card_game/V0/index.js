const suits = ["spades", "diamonds", "hearts", "clubs"];
const ranks = ['02','03','04','05','06','07','08','09','10','J','Q','K','A'];
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
    const card1 = document.createElement("img");
    const card2 = document.createElement("img");
    const card3 = document.createElement("img");
    const card4 = document.createElement("img");

    card1.src = `./kenney_playing-cards-pack/PNG/Cards (large)/card_${field[0].Suit}_${field[0].Rank}.png`;
    card2.src = `./kenney_playing-cards-pack/PNG/Cards (large)/card_${field[1].Suit}_${field[1].Rank}.png`;
    card3.src = `./kenney_playing-cards-pack/PNG/Cards (large)/card_${field[2].Suit}_${field[2].Rank}.png`;
    card4.src = `./kenney_playing-cards-pack/PNG/Cards (large)/card_${field[3].Suit}_${field[3].Rank}.png`;

    Field.appendChild(card1);
    Field.appendChild(card2);
    Field.appendChild(card3);
    Field.appendChild(card4);

}

let deck = getDeck();
shuffleArray(deck);
field = deal(deck);
displayField(field, deck);