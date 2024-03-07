function calcolaPrezzo() {
    const nomeCognome = document.getElementById('nomeCognomeInput').value;
    const km = parseFloat(document.getElementById('kmInput').value);
    const eta = parseInt(document.getElementById('etaInput').value);
    const prezzoAlKm = 0.21;

    let prezzoTotale = km * prezzoAlKm;

    if (eta < 18) {
        prezzoTotale *= 0.8;
        tipoBiglietto = "Biglietto scontato giovani";
    } else if (eta >= 65) {
        prezzoTotale *= 0.6;
        tipoBiglietto = "Biglietto scontato anziani";
    } else {
        tipoBiglietto = "Biglietto standard";
    }

    const outputTipoBigliettoElement = document.getElementById('outputTipoBiglietto');
    outputTipoBigliettoElement.textContent = tipoBiglietto;

    const outputNomeElement = document.getElementById('outputNomeCognome');
    outputNomeElement.textContent = ` ${nomeCognome}`;

    const outputPrezzoElement = document.getElementById('outputPrezzo');
    outputPrezzoElement.textContent = ` € ${prezzoTotale.toFixed(2)}`;


    function generaNumeroCasuale() {
        return Math.floor(Math.random() * 20) + 1;
    }

    const carozzaElement = document.querySelector('.carozza');

    const numeroCasuale = generaNumeroCasuale();

    carozzaElement.textContent = "" + numeroCasuale;
}

function resetForm() {
    document.getElementById('nomeCognomeInput').value = "";
    document.getElementById('kmInput').value = "";
    document.getElementById('etaInput').value = "";
    document.getElementById('outputNome').textContent = "";
    document.getElementById('outputPrezzo').textContent = "";
}
