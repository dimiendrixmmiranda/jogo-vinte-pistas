import { gerarCaixaDeMensagem } from "./criacao/gerarCaixaDeMensagem.js"
import { gerarJogo } from "./criacao/gerarJogo.js"

const formularioDeInformacoes = document.querySelector('#formularioDeInformacoes')
formularioDeInformacoes.addEventListener('submit', (e) => {
    e.preventDefault()
    const categoria = pegarInformacaoDoFormulario('.conteudo-formulario-categoria input')
    const dificuldade = pegarInformacaoDoFormulario('.conteudo-formulario-dificuldade input')
    const quantidadeDePlayers = pegarInformacaoDoFormulario('.conteudo-formulario-players input')

    const informacoes = {
        categoria,
        dificuldade,
        quantidadeDePlayers
    }

    // Verificando se o usuário passou todas as informações para gerar o jogo
    if (informacoes.categoria == undefined) {
        const mensagem = gerarCaixaDeMensagem('Selecione uma categoria')
        document.body.appendChild(mensagem)
        mensagem.querySelector('button').addEventListener('click', e => {
            funcaoAuxiliarCaixaMensagem(e)
        })
    } else if (informacoes.dificuldade == undefined) {
        const mensagem = gerarCaixaDeMensagem('Selecione uma dificuldade')
        document.body.appendChild(mensagem)
        mensagem.querySelector('button').addEventListener('click', e => {
            funcaoAuxiliarCaixaMensagem(e)
        })
    } else if (informacoes.quantidadeDePlayers == undefined) {
        const mensagem = gerarCaixaDeMensagem('Selecione uma quantidade de players')
        document.body.appendChild(mensagem)
        mensagem.querySelector('button').addEventListener('click', e => {
            funcaoAuxiliarCaixaMensagem(e)
        })
    } else {
        gerarJogo(informacoes)
    }
})

const funcaoAuxiliarCaixaMensagem = (e) => {
    e.preventDefault()
    e.target.closest('.conteudo-formulario-caixaDeMensagem').remove()
}

function pegarInformacaoDoFormulario(seletor) {
    const listaInput = document.querySelectorAll(seletor)
    let dificuldade
    listaInput.forEach(input => {
        if (input.checked) {
            dificuldade = input.id
        }
    })
    return dificuldade
}