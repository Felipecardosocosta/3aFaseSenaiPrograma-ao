import { log } from "node:console";

class Produto{
    nome:string;
    preco:number;

    constructor(nome:string, preco:number){

        this.nome = nome
        this.preco = preco

    }



}




class Categoria{
    
    desconto:number
    categoria:string

    constructor(categoria:string,desconto:number){
       
       this.desconto = desconto
        this.categoria = categoria
        
    }

    calcularDdesconto(produto:Produto):number{

        return  produto.preco -(produto.preco * this.desconto)/100
    }

}

 const produto = new Produto("bermuda",100)

const categoria = new Categoria('Verão',10)

console.log(categoria.calcularDdesconto(produto));




// parte dois



class Funcionario{
    nome:string;
    salario:number;

    constructor(nome:string,salario:number){

        this.nome = nome

        this.salario = salario

    }
    calcularSalario(){
        return this.salario
    }
}


class Programador extends Funcionario{

    constructor(nome:string,salario:number){

        super(nome,salario)

    }

    calcularSalario(): number {
        return this.salario * 1.3
    }
}
class Designer extends Funcionario{

    constructor(nome:string,salario:number){

        super(nome,salario)

    }

    calcularSalario(): number {
        return this.salario * 1.5
    }
}


const felipe = new Funcionario("Felipe",1500)

const gustavo = new Programador("Gustavo",1500)


const fred = new Designer("Fred",1500)


log(felipe.calcularSalario(),gustavo.calcularSalario(),fred.calcularSalario())