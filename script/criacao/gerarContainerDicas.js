import { criarElemento } from "./criarElemento.js";

export function gerarContainerDicas(informacoes, palavraSorteada){
    const containerConteudoDicas = criarElemento('div', 'conteudo-game-dicas', '', 'conteudoGameDicas')

    const resposta = criarElemento('div', 'conteudo-game-dicas-resposta')
    const pResposta = criarElemento('p', '', '', 'pResposta')
    resposta.appendChild(pResposta)

    const categoria = criarElemento('div', 'conteudo-game-dicas-categoria')
    const pCategoria = criarElemento('p', '', informacoes.categoria.toUpperCase(), 'pCategoria')
    categoria.appendChild(pCategoria)

    const listaDicas = criarElemento('ul', 'conteudo-game-dicas-lista')
    palavraSorteada.dicas.forEach((dica, i) => {
        const elementoDica = criarElemento('li', 'conteudo-game-dicas-lista-item')
        const numeroDica = criarElemento('div', 'numero-dica', i+1)
        const containerDica = criarElemento('div', 'container-dica')
        const p = criarElemento('p', '', dica)
        containerDica.appendChild(p)
        
        elementoDica.appendChild(numeroDica)
        elementoDica.appendChild(containerDica)
        listaDicas.appendChild(elementoDica)
    })

    containerConteudoDicas.appendChild(resposta)
    containerConteudoDicas.appendChild(categoria)
    containerConteudoDicas.appendChild(listaDicas)
    return containerConteudoDicas
}