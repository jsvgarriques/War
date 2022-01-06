// document.addEventListener('DOMContentLoaded', function(event) {
// function createDeck (){
//     let deck = new Array();
//     for (let i = 0; i < suits.length; i++)
//         for (let j = 0; j < values.length; j++) {
//             let card = {Value: values.length}

//     }
let playerCardsArray =[], computerCardsArray = []//testing format
// -----------computerstuff------------
const computers_card = document.querySelector('.computers_card')
const cardsWonComputer= document.querySelector('.cardsWonComputer')
const cardCountComputer= document.querySelector('.cardCountComputer')
// ----------playerstuff---------------
const players_deck = document.querySelector('.players_deck')
const cardsWonPlayer= document.querySelector('#cardsWonPlayer')
const cardcountplayer= document.querySelector('#cardcountplayer')
// ------DECK--------
const suits = ["♥","♦","♣","♠"];
const ranks = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
let deck = [];
// let playerHand=playerCards
// let computerhand=computerCards
function createDeck() {
    for (let i = 0; i<suits.length; i++) {
        for (let j = 0; j<ranks.length; j++) { 
            deck.push({suit:suits[i], 
                rank:ranks[j],
                value:j-1})
        }
    }
     ;
    // console.log(deck);
    // ----------shuffleFUNCTION----------
function shuffleDeck (deck) {
    for(let a =0; a<deck.length; a++) {
        const tempCard = deck[a];
        const randomIndex = Math.floor(Math.random()*52);
        let x = deck[a];
        deck[a] = deck[randomIndex];
        deck[randomIndex] = x
        deck[randomIndex] = tempCard
        }
    }shuffleDeck(deck)//happens inside create deck most be declared in here+ deck isnt global
};

createDeck()//invoking
// let shuffledDeck = createDeck()

 
// pull random card
function dealCards(){
     let playerCardsArray = deck.splice(0,26)//link to the html of the card count
    
     let computerCardsArray  = deck.splice(0,26)//link this to the html of the carcount
    
    console.log(playerCardsArray, computerCardsArray );
// its not stored antwhere 
 }

document.querySelector('#deal').addEventListener('click', dealCards);

// function 

function playCard (){
    const playerWarCards = playerCardsArray[0]
    console.log(playerWarCards)
    const computerWarCards = computerCardsArray.shift()//returns top card from an array i think
    console.log(computerWarCards)
    }
    document.querySelector('#pulls_card').addEventListener('click',playCard);
// if (playerWarCards === computerWarCards) continue;
// else if(playWarCards > computerWarCards) { }




    //DONOTTOUCH TURNOVERCODE NOT NEEDED
// pull 2 cards one for the player and one for the comp
//let playerCard = deck.splice(Math.floor(Math.random()*deck.length),1)[0]
// let playerCard = deck.splice(Math.floor(Math.random()*deck.length),1)[0]
// display cards in the dom
// compare cards to see which is higher

// ---------GAMELOGIC-----------
// function winsRound () {
//     if ( playerCard === computerCard) { 
//         console.log('its War') }  
//         else if (playerCard < computerCard) {
//             playerDeck.push(playercard, computercard)//name playing pile?
//         }else { computerDeck.push(playerCard, computercard))}

//     }
// }
// // function deal(){
//
// }
// function shuffle(deck) {
//     for ( let b =0; b < deck.length; b++) { 
//         const tempCard = deck[b];
//         const randomIndex = Math.floor(Math.random() * (52);
//         let x = deck[randomIndex]
// // shuffle()
// console.log(shuffle(deck))

// function shuffle()
// split deck between player one and two
// display card count

//function recieve cards after victory
// player discard pile
// computer discard pile