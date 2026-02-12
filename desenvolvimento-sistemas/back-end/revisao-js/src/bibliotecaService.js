import { pool } from "./config.js";

export async function buscarPorId(livroId) {

    const [row] = await pool.query('SELECT * FROM livros WHERE id = ?',[livroId])
    console.log(row);
    
    return row[0]
}

export async function buscarEstoque() {

    const [row] = await pool.query("SELECT * FROM  vw_livros ")

    console.log(row);
    
    return row
    
}

export async function cadastrar(titulo, categoria, valor_unitario, estoque_minimo, estoque_maximo) {

    const [row] = await pool.query('INSERT INTO livros (titulo, categoria, valor_unitario, estoque_minimo, estoque_maximo) VALUES (?,?,?,?,?)',[titulo, categoria, valor_unitario, estoque_minimo, estoque_maximo])

    console.log(row);

    return row
    
}


export async function livrosMaiorSaida() {
    
}