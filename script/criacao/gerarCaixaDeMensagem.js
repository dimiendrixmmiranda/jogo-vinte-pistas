import { criarElemento } from "./criarElemento.js";

export function gerarCaixaDeMensagem(mensagem){
    const div = criarElemento('div', 'conteudo-formulario-caixaDeMensagem')
    const p = criarElemento('p', 'conteudo-formulario-caixaDeMensagem-mensagem', mensagem)
    const btn = criarElemento('button', 'conteudo-formulario-caixaDeMensagem-botao', 'Entendi!')
    div.appendChild(p)
    div.appendChild(btn)
    return div
}