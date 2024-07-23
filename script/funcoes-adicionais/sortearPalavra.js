import { arrayDeInformacoes } from "../dados/informacoes.js"

export function sortearPalavra(informacoes){
    const categoriaSelecionada = arrayDeInformacoes.filter(item => informacoes.categoria === item.categoria)[0]
    const filtrarElementosDificuldade = categoriaSelecionada.array.filter(item => informacoes.dificuldade === item.dificuldade)
    const indice = Math.floor(Math.random() * filtrarElementosDificuldade.length)
    return filtrarElementosDificuldade[indice]
}