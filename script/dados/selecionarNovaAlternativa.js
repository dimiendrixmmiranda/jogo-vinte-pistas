export function selecionarNovaAlternativa(array, nome, categoria, arrayDeDicas, dificuldade) {
    const obj = {
        nome: nome,
        categoria: categoria,
        dicas: arrayDeDicas,
        dificuldade: dificuldade
    }
    array.push(obj)
}