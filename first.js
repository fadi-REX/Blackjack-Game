let cards = [];
let sum = 0;
let hasblackjack = false ;
let isalive = false ;
let message = "";

let player = {
     name : "per",
     chips : "100"
        }

document.querySelector('#player-el').textContent = player.name + ": $" + player.chips;




function   getrandomcard()
{

let cardnumber = Math.floor(Math.random()*13 + 1);

if (cardnumber === 1) { return 11;}
else if (cardnumber === 11 || cardnumber === 12 || cardnumber === 13) { return 10;}

return cardnumber ;




}






function startgame()
{
    isalive = true;
    let firstcard = getrandomcard();
    let secondcard = getrandomcard();
    cards = [firstcard,secondcard];
    sum = firstcard + secondcard;
    rendergame();

}





function rendergame() 
{
    if (sum < 21) {message = "do u want to draw a new card ?" 
                }
    else if (sum === 21) {message = "wohoo! you'v got blackjack!"
                        hasblackjack = true                   
                        }
    else {message = "you're out of the game! "
        isalive = false 
        }


    let messageEl = document.querySelector("#message-el");
    messageEl.textContent = message ;

    document.getElementById("sum-el").textContent = "sum: " + sum ;

    document.querySelector("#cards-el").textContent = "cards: " ;

    for (let i = 0; i< cards.length; i+=1)
    {

    document.querySelector("#cards-el").textContent += cards[i] + "  ";

    }
}





function newcard()
{
if (hasblackjack === false && isalive === true ) 
{
let card = getrandomcard();
sum += card ; 
cards.push(card)
rendergame();
}
}





