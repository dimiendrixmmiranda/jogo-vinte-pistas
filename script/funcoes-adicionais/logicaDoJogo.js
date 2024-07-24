export function logicaDoJogo(informacoes) {
    const listaDeDicas = document.querySelectorAll('.conteudo-game-dicas-lista-item')
    listaDeDicas.forEach(dica => {
        dica.addEventListener('click', (e) => {
            e.preventDefault()
            determinarVezDoJogador()
            dica.querySelector('.container-dica').setAttribute('style', 'backgroundColor: transparent;')
            dica.querySelector('.container-dica p').setAttribute('style', 'display: block')
        })
    })
}

let vez = 0

function determinarVezDoJogador() {
    // PENSAR EM UMA IMPLEMENTAÇÃO!
    // Só vai poder seguir para o próximo passo se ja estiver aberto uma dica e dado um chute!
    
    // const listaDePlayers = document.querySelectorAll('.conteudo-game-placar div')
    // listaDePlayers.forEach(player => player.classList.remove('active'))
    // listaDePlayers[vez].classList.add('active')
    // vez ++
    // console.log(vez)
}