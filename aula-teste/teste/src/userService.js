
export const createUser = (userData) => {



    if (!userData.name) {
       
        throw new Error("O nome do usuário é obrigatório.")
        
    } else if (userData.age < 18) {

        throw new Error("Voce nao tem idade")

    }
    

    return {
        id: Math.floor(Math.random(1, 10)),
        name: userData.name,
        age: userData.age,
        isActive: userData.isActive,
        roles: ['user']

    }




    
}