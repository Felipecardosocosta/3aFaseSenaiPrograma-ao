import { pool } from "./config.js";

export async function buscarPorId(livroId) {

    const [row] = await pool.query('SELECT * FROM livros WHERE id = ?', [livroId])
    console.log(row);

    return row[0]
}

export async function buscarEstoque() {

    const [row] = await pool.query("SELECT * FROM  vw_estoque")

    console.log(row);

    return row

}

export async function retornoProdutosCadastrados() {

    const [rows] = await pool.query('SELECT * FROM produto')

    console.log(rows);

    return rows

}






export async function cadastrar(nome_produto, valor_produto, estoque_minimo, estoque_maximo) {

    const [row] = await pool.query('INSERT INTO produto (nome_produto, valor_produto, minimo_estoque,maximo_estoque) VALUES (?,?,?,?)', [nome_produto, valor_produto, estoque_minimo, estoque_maximo])

    console.log(row);

    return row

}


export async function todasSaidas() {

    const [rows] = await pool.query(`SELECT 
                                        p.id,
                                        p.nome_produto,
                                        m.data_movimentacao

                                        FROM movimentacao m
                                        LEFT JOIN produto p
                                        ON p.id= m.produto_id
                                        WHERE m.tipo_movimentacao= 'SAIDA'
                                        ORDER BY  m.data_movimentacao DESC `
                                    )

    console.log(rows);

    return rows
    

}


export async function registrarItensEstoque(quantidade,data_movimentacao,produto_id) {

    const [rows] = await pool.query(`INSERT INTO movimentacao(
                                        tipo_movimentacao,
                                        quantidade,
                                        data_movimentacao,
                                        produto_id
                                        ) 
                                        VALUES
                                        ('ENTRADA',?,?,?);`,[quantidade,data_movimentacao,produto_id]
                                    )
    console.log(rows);

    return rows
    
    
}


export async function produtoMaiorSaidaNoPeriodo(dataInicial, dataFinal) {
    const [rows] = await pool.query(`SELECT p.id AS produto_id, 
        p.nome_produto, 
        p.valor_produto, 
        m.quantidade_total_saida 
        FROM produto p
        LEFT JOIN 
        ( SELECT produto_id, SUM(quantidade) AS quantidade_total_saida 
         FROM movimentacao m 
         WHERE tipo_movimentacao = 'SAIDA' 
         AND data_movimentacao 
         BETWEEN ? AND ?
         GROUP BY produto_id ) m ON m.produto_id = p.id 
         ORDER BY m.quantidade_total_saida DESC;`,
        [dataInicial, dataFinal]);
    return rows.map((item) => {
        const quantidade = item.quantidade_total_saida; 
        const valorUnitario = item.valor_produto;
        return { 
            nome_produto: item.nome_produto, 
            quantidade_total_saida: quantidade, 
            valor_total_financeiro_saidas: quantidade * valorUnitario 
        };
    });
} 




export async function produtosLimite() {


    const [rows] = await pool.query(`SELECT 
		p.id,
        p.nome_produto,
        p.maximo_estoque,
        p.minimo_estoque,
        sum(
	CASE 
		WHEN m.tipo_movimentacao = "ENTRADA" THEN m.quantidade
        WHEN m.tipo_movimentacao = "SAIDA"	THEN -m.quantidade
        ELSE 0
        END
        
) AS quantidade_estoque
FROM movimentacao m

LEFT JOIN produto p
ON m.produto_id = p.id


GROUP BY p.id`)


if (rows.length> 0 ) {
    
    const filtro = rows.filter((value)=> value.maximo_estoque< value.quantidade_estoque) 
    
    console.log(filtro);

    return filtro
}

return 'tudo ok!'



    
}

