import { logicaDoJogo } from "../funcoes-adicionais/logicaDoJogo.js"
import { sortearPalavra } from "../funcoes-adicionais/sortearPalavra.js"
import { gerarContainerDicas } from "./gerarContainerDicas.js"
import { gerarContainerFormularioChute } from "./gerarContainerFormularioChute.js"
import { gerarConteudoGamePlacar } from "./gerarContainerPlayer.js"

const conteudoGame = document.querySelector('.conteudo-game')
const formularioDeInformacoes = document.querySelector('#formularioDeInformacoes')
const ancora = document.querySelector('.conteudo-ancora')
export function gerarJogo(informacoes) {
    const palavraSorteada = sortearPalavra(informacoes)
    const containerGamerPlacar = gerarConteudoGamePlacar(informacoes)
    conteudoGame.appendChild(containerGamerPlacar)
    const containerFormularioChute = gerarContainerFormularioChute()
    conteudoGame.appendChild(containerFormularioChute)
    const containerDicas = gerarContainerDicas(informacoes, palavraSorteada)
    conteudoGame.appendChild(containerDicas)
    formularioDeInformacoes.setAttribute('style', 'display: none')
    ancora.setAttribute('style', 'display: flex')
    logicaDoJogo(informacoes)
}