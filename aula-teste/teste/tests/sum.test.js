import { createUser } from "../src/userService"

const user= {

     age: 18,
     isActive: true,


}

test('test CreateUser', () => {

    expect(()=> createUser(user)).toThrow('O nome do usuário é obrigatório.')
    expect(()=> createUser(user)).toThrow(Error)

  })