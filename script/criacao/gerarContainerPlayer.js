import { criarElemento } from "./criarElemento.js";

export function gerarConteudoGamePlacar(informacoes){
    const containerConteudoPlacar = criarElemento('div', 'conteudo-game-placar')
    containerConteudoPlacar.setAttribute('style', `grid-template-columns: repeat(${informacoes.quantidadeDePlayers}, 1fr)`)
    for (let i = 0; i < informacoes.quantidadeDePlayers; i++) {
        const player = gerarContainerPlayer(`Player ${i + 1}`)
        containerConteudoPlacar.appendChild(player)
    }
    containerConteudoPlacar.querySelector('div').classList.add('active')
    return containerConteudoPlacar
}

function gerarContainerPlayer(player){
    const div = criarElemento('div')
    const pPlayer = criarElemento('p', 'player', player)
    const pPlacar = criarElemento('p', 'placar', '00')
    div.appendChild(pPlayer)
    div.appendChild(pPlacar)
    return div
}