const { faker } = require('@faker-js/faker');

const names = {
    nameUser01: `User01${faker.person.lastName()}`,
    nameUser03: `UserTC03${faker.person.lastName()}`
}

const user01 = {
    nome: names.nameUser01,
    email: faker.internet.email({ firstName: `${names.nameUser01}`, provider: 'gmail.com' }),
    password: faker.internet.password({length: 10}),
    administrador: "true"
},

user02 = {
    nome: faker.person.firstName(),
    email: faker.internet.email({ firstName: 'User02', provider: 'gmail.com' }),
    password: faker.internet.password({length: 10}),
    administrador: "true"
},

userTC03 = {
    nome: faker.person.firstName(),
    email: faker.internet.email({ firstName: `${names.nameUser03}`, provider: 'gmail.com' }),
    password: faker.internet.password({length: 10}),
    administrador: "true"
}

module.exports = {
    user01,
    user02,
    userTC03
}