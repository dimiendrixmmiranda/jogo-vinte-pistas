import { criarElemento } from "./criarElemento.js"

export function gerarContainerFormularioChute() {
    const containerFormularioChute = criarElemento('form', 'conteudo-game-form', '', 'conteudoGameForm')
    const input = criarElemento('input', '', '', 'inputChute')
    input.setAttribute('name', 'inputChute')
    input.setAttribute('type', 'text')
    input.setAttribute('placeholder', 'Que tal arriscar um chute?')
    const button = criarElemento('button','', 'Arriscar!', 'botaoChutar')
    containerFormularioChute.appendChild(input)
    containerFormularioChute.appendChild(button)
    return containerFormularioChute
}