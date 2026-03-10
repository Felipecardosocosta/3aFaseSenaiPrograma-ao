import { createUser } from "../src/userService"

const user= {
     age: 18,
     isActive: true,


}

test('test CreateUser', () => {

    expect(()=> createUser(user)).toThrow()
    expect(()=> createUser(user)).toThrow(Error)

  })