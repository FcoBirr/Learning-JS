let deck = {};
for(let i = 0; i < 52; i++){
    let suit = "", rank = "", power = "", effect = "";
    switch(true){
        case(i < 13):{ 
            suit = "spades";
            effect = "damage"
        }
        case(i >= 13 && i < 26):{
            suit = "hearts";
            effect = "healing";
        }
        case(i >= 26 && i < 39):{
            suit = "diamonds";
            effect = "weapon";
        }
        case(i >= 39 && i < 52):{
            suit = "clubs";
            effect = "damage";
        }
    }

    switch(true){
        case(i % 13 == 0):{
            rank = "ace";
            power = "14";
        }
        case(i % 13 > 0 && i % 13 <= 9):{
            rank = toString(i + 1);
            power = i + 1;
        }
        case(i % 13 == 10):{
            rank = "Jack";
            power = "11";
        }
        case(i % 13 == 11):{
            rank = "Queen";
            power = "12";
        }
        case(i % 13 == 0):{
            rank = "King";
            power = "13";
        }
    }
    deck.toString(i) = {"suit":suit, "rank":rank, "power":power, "effect":effect};

}

console.log(deck);
console.log("finish")