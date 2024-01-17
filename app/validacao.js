function verificaChuteValido(chute) {
    const numero = +chute;   //+chute converte para inteiro

    if(chute == 'game over'){
        console.log('GAME OVER')
        document.body.innerHTML = `<h1 class='game-over'> GAME OVER </h1>`
        document.body.style.setProperty("--cor-de-fundo", "red")
        return
    }

    if (chuteInvalido(numero)) {
        console.log('valor inválido');
        elementoChute.innerHTML += '<div>Valor Inválido</div>'
        return
    }


    if (numeroRangeOut(numero)) {
        elementoChute.innerHTML += (` <div> Valor inválido: O número precisa estar entre ${menorValor} e ${maiorValor} </div>`);
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Parabéns você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>

        <button id='jogar-novamente' class='btn-jogar'>Jogar novamente</button>
        `
        
    } else if (numero > numeroSecreto){
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i> </div>`;

    } else {
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i> </div>`;    
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroRangeOut(numero) {
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente'){
        window.location.reload();
    }
})