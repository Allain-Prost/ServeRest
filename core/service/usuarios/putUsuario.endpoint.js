const { spec } = require("pactum");
const { baseUrl } = require("../../constants");

async function putUsuario({nome, email, password, administrador, id}) {
    return await spec()
        .put(`${baseUrl}/usuarios/${id}`)
        .withBody({
            'nome': nome ?? '',
            'email': email ?? '',
            'password': password ?? '',
            'administrador': administrador ?? '',
        })
        .expectStatus(200)
}

module.exports = {
    putUsuario
}