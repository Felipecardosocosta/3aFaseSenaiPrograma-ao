test("dois mais dois é igual a quatro", ()=>{
    expect(2+2).toBe(4);
})

const can = {
  name: 'pamplemousse',
  ounces: 12,
};

describe('the can', () => {
  test('has 12 ounces', () => {
    expect(can.ounces).toBe(12);
  });

  test('has a sophisticated name', () => {
    expect(can.name).toBe('pamplemousse');
  });
}); 


const testeTestado = {
    testeNome: 'seuNome',
    suaIdade: 30
}

describe("The TesteTestado", ()=>{

    test('teste seu nome', ()=>expect(testeTestado.testeNome).toBe("seuNome") );

    test("teste sua idade", ()=>expect(testeTestado.suaIdade).toBe(30));

})


const pessoaUm = {
    nome:"pessoa1",
    idade: 10.5
}
const pessoaDois = {
    nome:"pessoa1",
    idade: 10.5
}


describe("The TesteTestadoPessoa", ()=>{

    test('Pessoa igual', ()=>expect(pessoaUm).toEqual(pessoaDois) );

 

})


const velho1 = {
    nome:"pessoa1",
    idade: 90
}
const velho2 = {
    nome:"pessoa1",
    idade: 85
}


describe("The TesteTestadoVelho", ()=>{

   test('Velho nao igual', ()=>expect(velho1).not.toEqual(velho2));

})





