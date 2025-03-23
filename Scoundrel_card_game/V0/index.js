const suits = ["spades", "diamonds", "hearts", "clubs"];
const ranks = ['02','03','04','05','06','07','08','09','10','J','Q','K','A'];
const effects = ["damage","weapon","healing"];
const Field = document.querySelector(".field");
const message_to_user = document.getElementById("messages")
let hp = 20;
let attack = 0;
let durability = 15;
let field = new Array();
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

function shuffleArray(arr){
    for(let i = 0; i < 1000; i++){
        let ind1 = Math.floor(Math.random() * arr.length);
        let ind2 = Math.floor(Math.random() * arr.length);
        let placeholder = arr[ind1];
        arr[ind1] = arr[ind2];
        arr[ind2] = placeholder;
    }
}

function deal(){
    let temp_card;
    for(let i = 0; i < 4; i++){
        temp_card = deck[deck.length - 1];
        field.unshift(temp_card);
        deck.pop();
    }
}

function runAway(){
    if(can_run){
        shuffleArray(field);
        let card;
        while(field.length > 0){
            card = field[field.length - 1];
            deck.unshift(card);
            field.pop();
        }
        can_run = false;
        while (Field.firstChild) {
            Field.removeChild(Field.firstChild);
        }
        deal();
        displayField();
    }
    else{
        message_to_user.textContent = `Cannot run anymore!`;
        can_run = false;
    }
    
}

function displayField(){
    message_to_user.textContent = ""

    const card1 = document.createElement("img");
    const card2 = document.createElement("img");
    const card3 = document.createElement("img");
    const card4 = document.createElement("img");
    const counter = document.createElement("p");

    card1.src = `./kenney_playing-cards-pack/PNG/Cards (large)/card_${field[0].Suit}_${field[0].Rank}.png`;
    card2.src = `./kenney_playing-cards-pack/PNG/Cards (large)/card_${field[1].Suit}_${field[1].Rank}.png`;
    card3.src = `./kenney_playing-cards-pack/PNG/Cards (large)/card_${field[2].Suit}_${field[2].Rank}.png`;
    card4.src = `./kenney_playing-cards-pack/PNG/Cards (large)/card_${field[3].Suit}_${field[3].Rank}.png`;
    counter.textContent = `There are ${deck.length} cards left in the deck`;

    Field.appendChild(card1);
    Field.appendChild(card2);
    Field.appendChild(card3);
    Field.appendChild(card4);
    Field.appendChild(counter);

}

let deck = getDeck();
shuffleArray(deck);
deal();
displayField();