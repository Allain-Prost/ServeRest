const { spec } = require("pactum");
const { baseUrl } = require("../../constants");

async function postUsuario({nome, email, password, administrador}) {
    return await spec()
        .post(`${baseUrl}/usuarios`)
        .withBody({
            "nome": nome,
            "email": email,
            "password": password,
            "administrador": administrador
        })
        .expectStatus(201)
}

module.exports = {
    postUsuario
}