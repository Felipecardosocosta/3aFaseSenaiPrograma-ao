import { buscarEstoque,  cadastrar, produtoMaiorSaidaNoPeriodo, produtosLimite, registrarItensEstoque, retornoProdutosCadastrados, todasSaidas } from "./bibliotecaService.js";
import { pool } from "./config.js";
async function main() {
    // await buscarPorId(1)

    // await buscarEstoque()


    await buscarEstoque()

    await retornoProdutosCadastrados()

    //nome_produto, valor_produto, estoque_minimo, estoque_maximo
    await cadastrar('amaciante',15.99,0,50)


    await todasSaidas()

    //quantidade,data_movimentacao,produto_id
    await registrarItensEstoque(50,'2026-02-12 09:00:00',4)





    const dataInicial = "2026-01-01 00:00:00";
    const dataFinal = "2026-12-31 23:59:59";
    console.log(await produtoMaiorSaidaNoPeriodo(dataInicial, dataFinal))



     await  produtosLimite()




}

main().catch(err =>{
    console.error(err);
    

}).finally( async()=>{
    await pool.end()
});

