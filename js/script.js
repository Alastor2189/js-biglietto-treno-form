const btnGenerates = document.getElementById("generates");
console.log(btnGenerates);
btnGenerates.addEventListener("click",
    function() {
        //Prelievo degli input dall'utente
        const userName = document.getElementById("name-client").value;
        console.log(userName);

        const numKm = document.getElementById("km-ticket").value;
        console.log(numKm);

        const ageUser = document.getElementById("age-client").value;
        console.log(ageUser);

        const nameResponse = document.querySelector(".name-surname .bottom")
        console.log(nameResponse);
        nameResponse.innerHTML = `${userName}`;

        let offerta;
        switch (ageUser) {
            case 'minorenne':
                offerta = "Biglietto under";
                break;
            case 'over65':
                offerta = "Biglietto over";
                break;
            case 'maggiorenne':
                offerta = "Biglietto ordinario";
                break;

        }
        console.log(offerta);

        const offerResponse = document.querySelector(".offering .bottom")
        console.log(offerResponse);
        offerResponse.innerHTML = `${offerta}`;

        let carriage = Math.floor(Math.random() * 10) + 1;
        console.log(carriage);

        const numCarriage = document.querySelector(".carriage .bottom")
        numCarriage.innerHTML = `${carriage}`;

        let codTicket = Math.floor(Math.random() * (9999 - 9000)) + 9000;
        console.log(codTicket);

        const idTicket = document.querySelector(".id .bottom")
        idTicket.innerHTML = `${codTicket}`;




    }
)


// const nameResponse = document.querySelector(".ticket-detail .bottom")
// console.log(nameResponse);
// nameResponse.innerHTML = `${userName}`
// const numKm = parseInt(prompt('Quanti sono i km da percorrere?'));
// console.log(numKm);
// const clientAge = parseInt(prompt('Inserisci la tua età'));
// console.log(clientAge);

// il prezzo del biglietto è definito in base ai km (0.21 € al km)
const priceKm = 0.21;
const ticketPrice = priceKm * numKm;
// va applicato uno sconto del 20% per i minorenni

let totalPrice
if (clientAge < 18) {
    totalPrice = ticketPrice - (ticketPrice * 0.20);

}
// va applicato uno sconto del 40% per gli over 65.
else if (clientAge > 65) {
    totalPrice = ticketPrice - (ticketPrice * 0.40);
} else {
    ticketPrice = totalPrice
}

console.log(totalPrice);


document.getElementById("total-price").innerHTML = ' € ' + (totalPrice.toFixed(2)).replace('.', ',');
// L'output va stampato nella pagina HTML.