export function selecionarNovaAlternativa(array, nome, categoria, arrayDeDicas) {
    const obj = {
        nome: nome,
        categoria: categoria,
        dicas: arrayDeDicas
    }
    array.push(obj)
}