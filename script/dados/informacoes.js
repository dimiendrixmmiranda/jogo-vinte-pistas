import { anos } from "./ano.js";
import { estadios } from "./estadio.js";
import { jogadores } from "./jogador.js";
import { selecoes } from "./selecao.js";
import { clubes } from "./clube.js";

export const arrayDeInformacoes = [
    {
        categoria: "ano", 
        array: anos
    },
    {
        categoria: "estadio", 
        array: estadios
    },
    {
        categoria: "jogador", 
        array: jogadores
    },
    {
        categoria: "selecao", 
        array: selecoes
    },
    {
        categoria: "clube", 
        array: clubes
    },
]