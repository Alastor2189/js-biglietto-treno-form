const btnGenerates = document.getElementById("generates");
console.log(btnGenerates);
btnGenerates.addEventListener("click",
    function() {
        //Prelievo degli input dall'utente
        // prelievo nominativo
        const userName = document.getElementById("name-client").value;

        // prelievo numero km da percorrere
        const numKm = document.getElementById("km-ticket").value;

        const priceKm = 0.21;
        let ticketPrice = priceKm * numKm;

        // prelievo tipologia biglietto
        const ageUser = document.getElementById("age-client").value;

        // generazione nominativo
        const nameResponse = document.querySelector(".name-surname .bottom")
        nameResponse.innerHTML = `${userName}`;

        // generazione tipologia biglietto
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

        // generazione numero carrozza
        let carriage = Math.floor(Math.random() * 10) + 1;
        console.log(carriage);

        const numCarriage = document.querySelector(".carriage .bottom")
        numCarriage.innerHTML = `${carriage}`;

        // generazione ID ticket
        let codTicket = Math.floor(Math.random() * (9999 - 9000)) + 9000;
        console.log(codTicket);

        const idTicket = document.querySelector(".id .bottom")
        idTicket.innerHTML = `${codTicket}`;

        // generazione prezzo finale
        let totalPrice
        if (ageUser == 'minorenne') {
            totalPrice = ticketPrice - (ticketPrice * 0.20);

        } else if (ageUser == 'over65') {
            totalPrice = ticketPrice - (ticketPrice * 0.40);
        } else if (ageUser == 'maggiorenne') {
            totalPrice = ticketPrice
        }
        const finalPrice = document.querySelector(".ticket-price .bottom")
        finalPrice.innerHTML = ' € ' + (totalPrice.toFixed(2)).replace('.', ',');


        const detailPassenger = document.querySelector(".detail-passenger");
        detailPassenger.classList.remove("d-none");
    }
);

// attivazione tasto annulla
const clearBtn = document.getElementById("cancel");

clearBtn.addEventListener("click",
    function() {
        const userName = document.getElementById("name-client");
        userName.value = "";

        const numKm = document.getElementById("km-ticket");
        numKm.value = "";

        const ageUser = document.getElementById("age-client");
        ageUser.value = "";

        const detailPassenger = document.querySelector(".detail-passenger");
        detailPassenger.classList.add("d-none");
    }

)